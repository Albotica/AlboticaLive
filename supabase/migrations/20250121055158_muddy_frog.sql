/*
  # Create contact form submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `full_name` (text, required)
      - `designation` (text)
      - `email` (text, required)
      - `phone` (text)
      - `company_name` (text, required)
      - `company_size` (text)
      - `project_description` (text)
      - `created_at` (timestamp with time zone)

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for inserting new submissions
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  designation text,
  email text NOT NULL,
  phone text,
  company_name text NOT NULL,
  company_size text,
  project_description text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable insert for all users" ON contact_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);