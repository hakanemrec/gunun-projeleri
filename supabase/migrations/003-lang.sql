-- Ü1.1: Çok dilli içerik altyapısı (TR şimdi, EN ileride).
-- Supabase SQL Editor'de bir kez çalıştır. Mevcut tüm veri 'tr' olarak işaretlenir.

-- 1) lang kolonları
alter table projects          add column if not exists lang text not null default 'tr';
alter table terms             add column if not exists lang text not null default 'tr';
alter table project_terms     add column if not exists lang text not null default 'tr';
alter table user_term_progress add column if not exists lang text not null default 'tr';
alter table weekly_syntheses  add column if not exists lang text not null default 'tr';

-- 2) projects: unique (day_date, name) → (day_date, name, lang)
alter table projects drop constraint if exists projects_day_date_name_key;
alter table projects add constraint projects_day_date_name_lang_key unique (day_date, name, lang);

-- 3) terms: PK (key) → (key, lang). Önce bağımlı FK'lar düşürülür.
alter table project_terms      drop constraint if exists project_terms_term_key_fkey;
alter table user_term_progress drop constraint if exists user_term_progress_term_key_fkey;
alter table terms drop constraint if exists terms_pkey;
alter table terms add primary key (key, lang);

-- 4) project_terms: PK ve FK bileşik anahtara geçer
alter table project_terms drop constraint if exists project_terms_pkey;
alter table project_terms add primary key (project_id, term_key, lang);
alter table project_terms add constraint project_terms_term_fkey
  foreign key (term_key, lang) references terms(key, lang) on delete cascade;

-- 5) user_term_progress: PK ve FK bileşik anahtara geçer
alter table user_term_progress drop constraint if exists user_term_progress_pkey;
alter table user_term_progress add primary key (user_id, term_key, lang);
alter table user_term_progress add constraint user_term_progress_term_fkey
  foreign key (term_key, lang) references terms(key, lang) on delete cascade;

-- 6) weekly_syntheses: PK (week_start) → (week_start, lang)
alter table weekly_syntheses drop constraint if exists weekly_syntheses_pkey;
alter table weekly_syntheses add primary key (week_start, lang);
