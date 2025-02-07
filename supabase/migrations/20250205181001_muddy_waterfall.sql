/*
  # Set up secure API key storage
  
  1. Changes
    - Create a secure table for API keys
    - Insert the Resend API key
    - Update notification function to use stored key
  
  2. Security
    - RLS enabled
    - Only authenticated users can read keys
    - No one can modify keys through RLS
*/

-- Create API keys table
CREATE TABLE IF NOT EXISTS api_keys (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL UNIQUE,
    key_value text NOT NULL,
    created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE api_keys ENABLE ROW LEVEL SECURITY;

-- Only allow authenticated users to read
CREATE POLICY "Allow authenticated users to read api keys"
    ON api_keys
    FOR SELECT
    TO authenticated
    USING (true);

-- Insert Resend API key
INSERT INTO api_keys (name, key_value)
VALUES ('resend', 're_3ckSnWVk_5KGrMisjjWqricU6N1bL4yrP')
ON CONFLICT (name) 
DO UPDATE SET key_value = EXCLUDED.key_value;

-- Drop existing trigger and function
DROP TRIGGER IF EXISTS notify_contact_submission ON contact_submissions;
DROP FUNCTION IF EXISTS notify_new_contact_submission();

-- Create updated notification function
CREATE OR REPLACE FUNCTION notify_new_contact_submission()
RETURNS TRIGGER AS $$
DECLARE
    resend_key text;
BEGIN
    -- Get the Resend API key
    SELECT key_value INTO resend_key
    FROM api_keys
    WHERE name = 'resend';

    PERFORM http_post(
        'https://api.resend.com/emails',
        jsonb_build_object(
            'from', 'Albotica Notifications <notifications@albotica.live>',
            'to', 'alboticaconnect@gmail.com',
            'subject', 'New Contact Form Submission',
            'html', concat(
                '<h2>New Contact Form Submission</h2>',
                '<p><strong>Name:</strong> ', NEW.full_name, '</p>',
                '<p><strong>Email:</strong> ', NEW.email, '</p>',
                '<p><strong>Company:</strong> ', NEW.company_name, '</p>',
                CASE WHEN NEW.designation IS NOT NULL 
                    THEN concat('<p><strong>Designation:</strong> ', NEW.designation, '</p>')
                    ELSE ''
                END,
                CASE WHEN NEW.company_size IS NOT NULL 
                    THEN concat('<p><strong>Company Size:</strong> ', NEW.company_size, '</p>')
                    ELSE ''
                END,
                CASE WHEN NEW.project_description IS NOT NULL 
                    THEN concat('<p><strong>Project Description:</strong> ', NEW.project_description, '</p>')
                    ELSE ''
                END
            )
        )::jsonb,
        jsonb_build_object(
            'Authorization', 'Bearer ' || resend_key,
            'Content-Type', 'application/json'
        )::jsonb
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Recreate the trigger
CREATE TRIGGER notify_contact_submission
    AFTER INSERT ON contact_submissions
    FOR EACH ROW
    EXECUTE FUNCTION notify_new_contact_submission();