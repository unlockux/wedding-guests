# Deployment Guide

This guide will help you deploy your Wedding Guests PWA to Vercel and set up Supabase.

## 🚀 Deploy to Vercel

### Option 1: Deploy via GitHub (Recommended)

1. **Connect your GitHub repository to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "Add New Project"
   - Import the `wedding-guests` repository

2. **Configure the project**:
   - **Framework Preset**: Other
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: Leave empty
   - **Output Directory**: Leave empty

3. **Add Environment Variables** (after Supabase setup):
   - Click "Environment Variables"
   - Add `VITE_SUPABASE_URL`
   - Add `VITE_SUPABASE_ANON_KEY`

4. **Deploy**:
   - Click "Deploy"
   - Wait for deployment to complete
   - Your app will be live at `https://your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? wedding-guests
# - In which directory? ./
```

## 🗄️ Set Up Supabase

### Step 1: Create a Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Sign in or create an account
3. Click "New Project"
4. Fill in project details:
   - **Name**: wedding-guests (or your choice)
   - **Database Password**: Save this securely!
   - **Region**: Choose closest to your users
5. Click "Create new project"

### Step 2: Get Your API Keys

1. Go to **Settings** → **API**
2. Copy the following:
   - **Project URL** → This is your `VITE_SUPABASE_URL`
   - **anon/public key** → This is your `VITE_SUPABASE_ANON_KEY`

### Step 3: Create Database Tables

Go to **SQL Editor** in Supabase and run this example schema:

```sql
-- Example: Create a guests table
CREATE TABLE guests (
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  name text NOT NULL,
  email text,
  is_attending boolean DEFAULT false,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (optional for now)
ALTER TABLE guests ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows all operations (adjust for production)
CREATE POLICY "Allow all operations" ON guests FOR ALL USING (true);
```

### Step 4: Set Up Environment Variables

#### In Vercel:

1. Go to your Vercel project
2. Click **Settings** → **Environment Variables**
3. Add:
   - `VITE_SUPABASE_URL` = Your Supabase Project URL
   - `VITE_SUPABASE_ANON_KEY` = Your Supabase anon key
4. Select environment: Production, Preview, Development
5. Click "Save"
6. Redeploy your application

#### For Local Development:

1. Create a `.env` file in your project root:
```bash
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

2. Add `.env` to `.gitignore` (already done)

## 📦 Install Supabase Client

```bash
npm install @supabase/supabase-js
```

Then update `supabase.js` to use the actual client:

```javascript
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

## ✅ Verify Everything Works

1. **Check Vercel Deployment**:
   - Visit your Vercel URL
   - The PWA should load

2. **Check Supabase Connection**:
   - Open browser DevTools console
   - The service worker should be registered
   - No CORS errors for Supabase requests

3. **Test PWA Features**:
   - Try installing the app to your device
   - Test offline functionality
   - Check if data syncs with Supabase

## 🔄 Continuous Deployment

Vercel automatically deploys on every push to your main branch:
- Push to `main` → Auto-deploy to production
- Create pull request → Auto-deploy preview

## 📱 Testing PWA Installation

1. Visit your deployed site on mobile
2. Tap "Add to Home Screen" (iOS) or "Install App" (Android)
3. Open the installed app
4. Test offline mode by turning off WiFi/data

## 🐛 Troubleshooting

### Environment Variables Not Working

- Ensure variables start with `VITE_` prefix
- Redeploy after adding variables
- Check variables are set for all environments

### Supabase CORS Issues

- Check Supabase project settings
- Verify API keys are correct
- Enable CORS in Supabase dashboard if needed

### Service Worker Not Registering

- Check service worker file is in root
- Verify `sw.js` is accessible via URL
- Check browser console for errors

## 📚 Next Steps

- Add authentication with Supabase Auth
- Create more database tables
- Add real-time subscriptions
- Implement offline sync
- Add push notifications

---

Need help? Check:
- [Vercel Docs](https://vercel.com/docs)
- [Supabase Docs](https://supabase.com/docs)
- [PWA Guides](https://web.dev/progressive-web-apps/)
