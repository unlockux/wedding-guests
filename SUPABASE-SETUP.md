# Supabase Setup Guide

This guide will help you set up Supabase for your Wedding Guests PWA.

## 📋 Step 1: Create a Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Sign in with GitHub (recommended) or create an account
3. Click **"New Project"**
4. Fill in the details:
   - **Name**: `wedding-guests` (or your choice)
   - **Database Password**: Choose a strong password (save this securely!)
   - **Region**: Choose closest to you/your users
5. Click **"Create new project"**
6. Wait 2-3 minutes for the project to be created

## 🔑 Step 2: Get Your API Keys

1. In your Supabase project dashboard, go to **Settings** (gear icon) → **API**
2. Copy these two values:
   - **Project URL** (e.g., `https://xxxxxxxxxxxxx.supabase.co`)
   - **anon public** key (long string starting with `eyJ...`)

## 💾 Step 3: Create Your Database Table

1. In your Supabase dashboard, click **SQL Editor** in the left sidebar
2. Click **New Query**
3. Paste this SQL to create a guests table:

```sql
-- Create guests table
CREATE TABLE guests (
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  name text NOT NULL,
  email text,
  phone text,
  is_attending boolean DEFAULT false,
  num_guests integer DEFAULT 1,
  dietary_restrictions text,
  notes text,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE guests ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to read and write
-- ⚠️ WARNING: This is for development only!
-- In production, you should add proper authentication
CREATE POLICY "Allow all operations for now" 
ON guests 
FOR ALL 
USING (true) 
WITH CHECK (true);

-- Create an index for faster queries
CREATE INDEX idx_guests_created_at ON guests(created_at DESC);
```

4. Click **Run** (or press Cmd/Ctrl + Enter)
5. You should see "Success. No rows returned"

## 🔓 Step 4: Configure Your App

### Option A: For Local Development

1. Create a file named `.env` in your project root (it's already in .gitignore)
2. Add your Supabase credentials:

```bash
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

3. Restart your local server

### Option B: For GitHub Pages (Recommended)

Since GitHub Pages is static hosting, we'll inject the keys into the HTML:

1. Open `index.html`
2. Add these lines before the `</head>` tag:

```html
<script>
  // Add your Supabase credentials here
  window.SUPABASE_URL = 'https://your-project-id.supabase.co';
  window.SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';
</script>
```

**⚠️ Security Note**: For GitHub Pages, these keys will be public in your HTML. This is OK for the anon key with proper Row Level Security policies, but keep it in mind.

## ✅ Step 5: Test the Connection

1. Open your app in the browser
2. Open DevTools Console (F12)
3. You should see no errors related to Supabase
4. The app is now connected to Supabase!

## 📊 Step 6: Test the Database

To test that everything works:

```javascript
// In browser console, try:
import { supabase } from './supabase.js'

// Insert a test guest
const { data, error } = await supabase
  .from('guests')
  .insert([
    { name: 'Test Guest', email: 'test@example.com' }
  ])

console.log('Insert:', data, error)
```

## 🎯 Next Steps

Now that Supabase is set up, you can:
- Build a guest list interface
- Add forms to add/edit guests
- Implement filtering and searching
- Add real-time updates
- Create authentication

## 🔐 Security Best Practices

1. **Row Level Security (RLS)**: Already enabled in the SQL above
2. **Use the anon key safely**: It's OK to expose in client-side code
3. **Add authentication later**: For production, set up proper auth
4. **Review RLS policies**: Adjust policies based on your needs

## 🐛 Troubleshooting

### "Supabase is not configured"
- Check that you've added the credentials to `index.html` (for GitHub Pages)
- Or check your `.env` file (for local development)

### CORS errors
- Make sure your Supabase project is active
- Check that the URL and key are correct

### RLS policy errors
- Go to Authentication → Policies in Supabase dashboard
- Make sure policies are created correctly

## 📚 Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript/introduction)
- [Row Level Security Guide](https://supabase.com/docs/guides/auth/row-level-security)

---

**Need Help?** Check the Supabase Discord or create an issue in the repository.
