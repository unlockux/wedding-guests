# Wedding Guests PWA

A Progressive Web App for managing wedding guests, built with a simple hello world page for testing PWA implementation.

## Features

- ✨ Progressive Web App (PWA) ready
- 📱 Installable on mobile and desktop
- 🚀 Works offline with service workers
- 🎨 Beautiful gradient UI
- ⚡ Fast and lightweight

## Tech Stack

- **Frontend**: Vanilla HTML, CSS, JavaScript
- **Deployment**: Vercel
- **Backend (Future)**: Supabase
- **Version Control**: GitHub

## Quick Start

### Local Development

1. Clone the repository:
```bash
git clone <your-repo-url>
cd wedding-guests
```

2. Serve the files locally using any static file server:

**Using Python:**
```bash
python3 -m http.server 8000
```

**Using Node.js:**
```bash
npx serve
```

**Using PHP:**
```bash
php -S localhost:8000
```

3. Open your browser to `http://localhost:8000`

### Testing PWA Features

1. Open the app in Chrome or Edge
2. Open DevTools (F12) → Application tab
3. Check:
   - Service Worker is registered
   - Manifest is loaded
   - Cache storage is working

4. To test installability:
   - Click the install icon in the address bar
   - Or use DevTools → Application → Manifest → "Add to homescreen"

## Deployment

### Option 1: GitHub Pages (Recommended - Free & Easy)

📖 **Step-by-step guide**: See [DEPLOYMENT-GITHUB-PAGES.md](DEPLOYMENT-GITHUB-PAGES.md)

**Quick steps:**
1. Go to repository **Settings** → **Pages**
2. Select **Source**: GitHub Actions
3. Push the workflow file (already created)
4. Your site will be live at: `https://unlockux.github.io/wedding-guests`

### Option 2: Vercel (Also Free)

📖 **Full deployment guide**: See [DEPLOYMENT.md](DEPLOYMENT.md)

**Quick steps:**
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "Add New Project" and import `wedding-guests`
3. Deploy!

Or use Vercel CLI:
```bash
npm i -g vercel
vercel
```

## Adding PWA Icons

Generate PWA icons and place them in the root:

- `icon-192.png` (192x192)
- `icon-512.png` (512x512)

You can use tools like:
- [PWA Asset Generator](https://www.pwabuilder.com/imageGenerator)
- [Favicon.io](https://favicon.io)

## 🗄️ Supabase Setup

📖 **Complete setup guide**: See [SUPABASE-SETUP.md](SUPABASE-SETUP.md)

**Quick setup:**
1. Create a project at [supabase.com](https://supabase.com)
2. Copy your Project URL and anon key
3. Create the `guests` table (SQL in the guide)
4. Add credentials to `index.html` (for GitHub Pages)
5. Install the client: `npm install @supabase/supabase-js` ✅ (Done!)
6. The `supabase.js` file is already configured! ✅

## Project Structure

```
.
├── index.html                        # Main HTML file
├── manifest.json                     # PWA manifest
├── sw.js                            # Service worker
├── favicon.svg                      # Favicon
├── supabase.js                      # Supabase client configuration
├── vercel.json                      # Vercel configuration
├── package.json                     # Project configuration
├── env.example                      # Example environment variables
├── api/                             # Vercel serverless functions directory
├── .github/workflows/pages.yml      # GitHub Pages workflow
├── README.md                        # This file
├── DEPLOYMENT.md                    # Vercel deployment guide
├── DEPLOYMENT-GITHUB-PAGES.md       # GitHub Pages guide
└── SUPABASE-SETUP.md                # Supabase setup guide
```

## Browser Support

- ✅ Chrome/Edge (Desktop & Mobile)
- ✅ Firefox (Desktop & Mobile)
- ✅ Safari (iOS 11.3+)
- ✅ Samsung Internet

## License

MIT

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request
