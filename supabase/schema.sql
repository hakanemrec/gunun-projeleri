-- Günün Projeleri — Supabase şeması
-- Supabase SQL Editor'de bir kez çalıştırılır.

-- ============ İçerik tabloları (herkese açık okuma) ============

create table if not exists days (
  date date primary key,
  created_at timestamptz not null default now()
);

create table if not exists projects (
  id uuid primary key default gen_random_uuid(),
  day_date date not null references days(date) on delete cascade,
  name text not null,
  url text not null,
  stars text,
  language text,
  serves_md text,
  tech_md text,
  why_md text,
  evolve_md text,
  created_at timestamptz not null default now(),
  unique (day_date, name)
);
create index if not exists projects_day_idx on projects(day_date desc);

-- Küresel sözlük: terim tekilleştirilmiş, tanım en güncel haliyle
create table if not exists terms (
  key text primary key,          -- lowercase/trim edilmiş terim
  term text not null,            -- görünen yazım
  def_md text not null,
  first_seen date,
  created_at timestamptz not null default now()
);

-- Terim ↔ proje geçiş ilişkisi (sıklık ve "hangi projede geçti" için)
create table if not exists project_terms (
  project_id uuid not null references projects(id) on delete cascade,
  term_key text not null references terms(key) on delete cascade,
  primary key (project_id, term_key)
);
create index if not exists project_terms_term_idx on project_terms(term_key);

-- Haftalık sentez (Faz 3'te kullanılacak, şema hazır)
create table if not exists weekly_syntheses (
  week_start date primary key,
  content_md text not null,
  created_at timestamptz not null default now()
);

-- ============ Kullanıcı tabloları (RLS: sadece sahibi) ============

create table if not exists user_bookmarks (
  user_id uuid not null references auth.users(id) on delete cascade,
  project_id uuid not null references projects(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (user_id, project_id)
);

create table if not exists user_notes (
  user_id uuid not null references auth.users(id) on delete cascade,
  project_id uuid not null references projects(id) on delete cascade,
  note text not null,
  updated_at timestamptz not null default now(),
  primary key (user_id, project_id)
);

-- Leitner ilerlemesi (Faz 2'de kullanılacak, şema hazır)
-- box: 1..5 (1g→3g→7g→14g→30g). box 0 = "hiç çalışılmadı" anlamına gelmez; satır yoksa çalışılmamıştır.
create table if not exists user_term_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  term_key text not null references terms(key) on delete cascade,
  box smallint not null default 1 check (box between 1 and 5),
  next_review_at date not null default current_date,
  started_on date not null default current_date,
  updated_at timestamptz not null default now(),
  primary key (user_id, term_key)
);
create index if not exists utp_due_idx on user_term_progress(user_id, next_review_at);

create table if not exists user_streaks (
  user_id uuid primary key references auth.users(id) on delete cascade,
  current_streak int not null default 0,
  best_streak int not null default 0,
  last_session_date date
);

-- ============ RLS ============

alter table days enable row level security;
alter table projects enable row level security;
alter table terms enable row level security;
alter table project_terms enable row level security;
alter table weekly_syntheses enable row level security;
alter table user_bookmarks enable row level security;
alter table user_notes enable row level security;
alter table user_term_progress enable row level security;
alter table user_streaks enable row level security;

-- İçerik: herkes okur (anon dahil); yazma sadece service role (RLS'i baypas eder)
create policy "public read days" on days for select using (true);
create policy "public read projects" on projects for select using (true);
create policy "public read terms" on terms for select using (true);
create policy "public read project_terms" on project_terms for select using (true);
create policy "public read weekly_syntheses" on weekly_syntheses for select using (true);

-- Kullanıcı verisi: sadece sahibi
create policy "own bookmarks" on user_bookmarks
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "own notes" on user_notes
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "own progress" on user_term_progress
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "own streak" on user_streaks
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
