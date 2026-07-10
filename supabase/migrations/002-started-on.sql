-- Faz 2.1: günlük yeni terim sınırı (5/gün) için terimin çalışılmaya başlandığı gün.
-- Supabase SQL Editor'de bir kez çalıştır.
alter table user_term_progress
  add column if not exists started_on date not null default current_date;
