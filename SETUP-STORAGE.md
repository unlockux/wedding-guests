# Quick Storage Setup Guide

The 400 error means the Storage bucket isn't configured. Follow these steps:

## Step 1: Create Bucket

1. Go to your Supabase dashboard
2. Click **Storage** in the left sidebar
3. Click **"New bucket"** button
4. Fill in:
   - **Name**: `guest-photos` (exactly this name)
   - **Public bucket**: Toggle ON ✅
5. Click **"Save"**

## Step 2: Add Policies

Click on your new `guest-photos` bucket, then go to the **Policies** tab:

### Policy 1: Allow Public Uploads

Click **"New policy"**, then:

1. Policy name: `Allow public uploads`
2. Allowed operations: Select **INSERT**, **UPDATE**, **DELETE**
3. Target roles: `public`
4. USING expression: `true`
5. WITH CHECK expression: `true`

Click **"Review"**, then **"Save policy"**

### Policy 2: Allow Public Reads

Click **"New policy"** again:

1. Policy name: `Allow public reads`
2. Allowed operations: Select **SELECT**
3. Target roles: `public`
4. USING expression: `true`

Click **"Review"**, then **"Save policy"**

## Step 3: Test

Go back to your photo upload page and try uploading again. It should work!

## Troubleshooting

If you still get errors:
- Make sure the bucket name is exactly `guest-photos`
- Verify it's set to Public (toggle should be ON)
- Check that both policies are saved
- Refresh your browser page after saving policies
