# Deploy to GitHub Pages (Free Alternative to Vercel)

This is a free option that doesn't require creating accounts outside of GitHub.

## 🚀 Quick Setup

### Step 1: Enable GitHub Pages in Repository Settings

1. Go to your repository on GitHub: https://github.com/unlockux/wedding-guests
2. Click **Settings** tab
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:
   - **Source**: GitHub Actions
5. Click **Save**

### Step 2: Push the GitHub Actions Workflow

The workflow file is already created in `.github/workflows/pages.yml`.

To activate it, commit and push:

```bash
git add .github/workflows/pages.yml
git commit -m "Add GitHub Pages deployment workflow"
git push origin main
```

### Step 3: Watch it Deploy

1. Go to the **Actions** tab in your GitHub repository
2. You'll see the workflow running
3. Wait 1-2 minutes for it to complete
4. Your site will be live at:
   - `https://unlockux.github.io/wedding-guests`

### Step 4: Access Your Deployed Site

- Your site will be available at: `https://unlockux.github.io/wedding-guests`
- The URL format is: `https://<your-username>.github.io/<repo-name>`
- Changes to the `main` branch will auto-deploy

## ✅ What This Gives You

- ✅ **Free hosting** (no credit card required)
- ✅ **HTTPS** (SSL certificate included)
- ✅ **Custom domain support** (optional)
- ✅ **Auto-deploy** on every push to main
- ✅ **PWA works perfectly**
- ✅ **Service workers work**

## ⚠️ Limitations vs Vercel

- No serverless functions (api/ directory won't work)
- No environment variables (for now)
- Builds are slightly slower
- No preview deployments for PRs

## 🔧 Future: Add Supabase

Since GitHub Pages is static hosting, you'll need to:

1. **Use Supabase Client-Side Only**:
   - All API calls will be from the browser
   - Uses your Supabase URL directly
   - Good for public data

2. **Add Supabase Keys** (when ready):
   ```html
   <!-- In index.html, add before </head> -->
   <script>
     window.SUPABASE_URL = 'your-supabase-url';
     window.SUPABASE_KEY = 'your-supabase-key';
   </script>
   ```

## 📱 Test Your PWA

1. Visit: `https://unlockux.github.io/wedding-guests`
2. On mobile: Tap "Add to Home Screen"
3. Test offline mode
4. Check DevTools → Application → Service Workers

## 🆚 GitHub Pages vs Vercel (Comparison)

| Feature | GitHub Pages | Vercel |
|---------|-------------|---------|
| **Cost** | Free ✅ | Free (with limits) ✅ |
| **Account** | Just GitHub ✅ | Separate account ❌ |
| **SSL/HTTPS** | Yes ✅ | Yes ✅ |
| **Custom Domain** | Yes ✅ | Yes ✅ |
| **Build Time** | ~2 min | ~30 sec ⚡ |
| **Environment Variables** | No ❌ | Yes ✅ |
| **Serverless Functions** | No ❌ | Yes ✅ |
| **Preview Deployments** | No ❌ | Yes ✅ |

**For your use case (PWA + Supabase)**: GitHub Pages is perfect! 🎉

## 🐛 Troubleshooting

### Site not loading?

1. Check **Actions** tab for deployment errors
2. Go to **Settings** → **Pages** to verify it's enabled
3. Wait a few minutes (first deploy can be slow)
4. Clear browser cache and hard refresh

### Want to switch to Vercel later?

No problem! You can have both:
- GitHub Pages: `https://unlockux.github.io/wedding-guests`
- Vercel: `https://wedding-guests.vercel.app`

Just disable GitHub Pages when ready.
