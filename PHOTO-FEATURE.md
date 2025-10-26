# Photo Upload Feature Setup

This feature allows guests to upload photos with their name.

## 📋 Step 1: Create Database Table

Run this SQL in your Supabase SQL Editor:

```sql
-- See database-setup.sql for the complete schema
```

Or copy the SQL from `database-setup.sql` file.

## 🗄️ Step 2: Enable Supabase Storage

1. Go to your Supabase dashboard
2. Click **Storage** in the left sidebar
3. Click **Create a new bucket**
4. Name: `guest-photos`
5. Make it **Public** (toggle enabled)
6. Click **Save**

## ⚙️ Step 3: Set Storage Policies

In the Storage section, click on your `guest-photos` bucket, then **Policies**:

Add these policies:

**Policy 1: Allow anyone to upload**
- Policy name: `Allow public uploads`
- Target roles: `public`
- ALLOW policy
- USING expression: `true`
- WITH CHECK expression: `true`

**Policy 2: Allow anyone to read**
- Policy name: `Allow public reads`
- Target roles: `public`
- ALLOW policy
- SELECT operation
- USING expression: `true`

## 🎨 Step 4: Add Photo Upload UI

The photo upload UI is already included in the app. Features:

- 📷 Take photo with camera
- 📂 Upload from gallery/camera roll
- ✅ One photo per guest name
- 🔄 Preview before upload
- 💾 Auto-save to Supabase

## 📱 How It Works

1. Guest clicks "Add Photo"
2. Chooses camera or gallery
3. Takes/selects photo
4. Enters their name (optional but unique)
5. Photo is uploaded to Supabase Storage
6. Photo URL is saved to `guest_photos` table

## 🔒 Privacy & Security

- Photos are publicly accessible (for guest viewing)
- Only one photo per name (UNIQUE constraint)
- Photos stored in secure Supabase Storage
- No personal data except the name

## 🐛 Troubleshooting

### Can't upload photos?
- Check Storage bucket is public
- Verify storage policies are set
- Check browser console for errors

### "Name already exists" error?
- This is expected - each guest can only have one photo
- Use a different name or contact admin

### Photo not displaying?
- Check photo_url is saved correctly
- Verify storage bucket permissions
- Check network tab in DevTools
