-- Create contacts table for storing contact form submissions
CREATE TABLE IF NOT EXISTS contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all authenticated users to insert contacts
CREATE POLICY "Allow authenticated users to insert contacts" ON contacts
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Create policy to allow all users to insert contacts (for public forms)
CREATE POLICY "Allow public contact form submissions" ON contacts
  FOR INSERT WITH CHECK (true);

-- Create policy to allow only authenticated users to view contacts
CREATE POLICY "Allow authenticated users to view contacts" ON contacts
  FOR SELECT USING (auth.role() = 'authenticated');

-- Create index for better performance
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at);
CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email); 