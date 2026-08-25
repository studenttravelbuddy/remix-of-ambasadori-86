ALTER TABLE public.ambassador_applications
  ADD COLUMN IF NOT EXISTS video1_url text,
  ADD COLUMN IF NOT EXISTS video2_url text,
  ADD COLUMN IF NOT EXISTS video3_url text;

ALTER TABLE public.ambassador_applications ALTER COLUMN motivation DROP NOT NULL;