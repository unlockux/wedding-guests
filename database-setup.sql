-- Guest Photos Table
-- This table stores photos that guests upload with their name
CREATE TABLE guest_photos (
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  name text NOT NULL,
  photo_url text NOT NULL,
  upload_key text NOT NULL, -- Secret key for guests to delete their own photo
  is_admin boolean DEFAULT false, -- Admin flag for special permissions
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  UNIQUE(name) -- Ensures a guest can only add one photo
);

-- Enable Row Level Security
ALTER TABLE guest_photos ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to read and write
CREATE POLICY "Allow all operations for guest photos" 
ON guest_photos 
FOR ALL 
USING (true) 
WITH CHECK (true);

-- Create an index for faster queries
CREATE INDEX idx_guest_photos_name ON guest_photos(name);
CREATE INDEX idx_guest_photos_created_at ON guest_photos(created_at DESC);
