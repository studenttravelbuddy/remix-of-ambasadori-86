CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role
  )
$$;

CREATE POLICY "Users can view their own roles"
ON public.user_roles FOR SELECT TO authenticated
USING (user_id = auth.uid());

CREATE POLICY "Admins can view all roles"
ON public.user_roles FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE TYPE public.card_type AS ENUM ('isic', 'itic', 'euro26');
CREATE TYPE public.application_status AS ENUM ('new', 'in_review', 'approved', 'rejected');
CREATE TYPE public.card_holder_status AS ENUM ('existing', 'new');

CREATE TABLE public.ambassador_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  city text NOT NULL,
  birth_date date NOT NULL,
  card_type public.card_type NOT NULL,
  holder_status public.card_holder_status NOT NULL,
  card_number text,
  school_name text,
  study_form text,
  academic_year text,
  employer_name text,
  job_position text,
  teaching_scope text,
  instagram_handle text,
  tiktok_handle text,
  portfolio_url text,
  motivation text NOT NULL,
  experience text,
  eligibility_confirmed boolean NOT NULL DEFAULT false,
  terms_accepted boolean NOT NULL DEFAULT false,
  content_use_accepted boolean NOT NULL DEFAULT false,
  gdpr_accepted boolean NOT NULL DEFAULT false,
  status public.application_status NOT NULL DEFAULT 'new',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT ALL ON public.ambassador_applications TO service_role;
GRANT SELECT, UPDATE ON public.ambassador_applications TO authenticated;
ALTER TABLE public.ambassador_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can view applications"
ON public.ambassador_applications FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update applications"
ON public.ambassador_applications FOR UPDATE TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$ BEGIN NEW.updated_at = now(); RETURN NEW; END; $$;

CREATE TRIGGER update_ambassador_applications_updated_at
BEFORE UPDATE ON public.ambassador_applications
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE INDEX idx_ambassador_applications_created_at ON public.ambassador_applications (created_at DESC);
CREATE UNIQUE INDEX idx_ambassador_applications_email ON public.ambassador_applications (lower(email));