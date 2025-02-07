/*
  # Enable net extension and set up email notifications
  
  1. Changes
    - Enable net extension for HTTP requests
    - Create notification function for sending emails via Resend
    - Add trigger for contact form submissions
  
  2. Notes
    - Requires Resend API key to be set in Supabase settings
    - Uses net extension for HTTP requests
*/

-- Enable the net extension
CREATE EXTENSION IF NOT EXISTS "http";
CREATE EXTENSION IF NOT EXISTS "pg_net";

-- Drop existing trigger if it exists
DROP TRIGGER IF EXISTS notify_contact_submission ON contact_submissions;

-- Drop existing function if it exists
DROP FUNCTION IF EXISTS notify_new_contact_submission();

-- Create the notification function
CREATE OR REPLACE FUNCTION notify_new_contact_submission()
RETURNS TRIGGER AS $$
BEGIN
  PERFORM
    http_post(
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
        'Authorization', 'Bearer ' || current_setting('app.resend_api_key'),
        'Content-Type', 'application/json'
      )::jsonb
    );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create the trigger
CREATE TRIGGER notify_contact_submission
  AFTER INSERT ON contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION notify_new_contact_submission();