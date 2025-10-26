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

📖 **Full deployment guide**: See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions on deploying to Vercel and setting up Supabase.

### Quick Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "Add New Project" and import `wedding-guests`
4. Deploy! Your app will be live instantly

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

## Future Integration: Supabase

See [DEPLOYMENT.md](DEPLOYMENT.md) for complete Supabase setup instructions.

Quick start:
1. Create a project at [supabase.com](https://supabase.com)
2. Copy your Project URL and anon key
3. Add to Vercel environment variables
4. Install the client: `npm install @supabase/supabase-js`
5. The `supabase.js` file is already set up for you!

## Project Structure

```
.
├── index.html          # Main HTML file
├── manifest.json       # PWA manifest
├── sw.js              # Service worker
├── favicon.svg        # Favicon
├── supabase.js        # Supabase client configuration
├── vercel.json        # Vercel configuration
├── package.json       # Project configuration
├── env.example        # Example environment variables
├── api/               # Vercel serverless functions directory
├── README.md          # This file
└── DEPLOYMENT.md      # Deployment & setup guide
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
