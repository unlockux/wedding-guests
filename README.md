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

### Vercel

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Deploy automatically on every push

Or use Vercel CLI:
```bash
npm i -g vercel
vercel
```

### GitHub Pages

1. Push to GitHub
2. Go to Settings → Pages
3. Select branch and save

## Adding PWA Icons

Generate PWA icons and place them in the root:

- `icon-192.png` (192x192)
- `icon-512.png` (512x512)

You can use tools like:
- [PWA Asset Generator](https://www.pwabuilder.com/imageGenerator)
- [Favicon.io](https://favicon.io)

## Future Integration: Supabase

To connect Supabase:

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Get your project URL and API key
3. Add environment variables in Vercel
4. Update the app to use Supabase client

Example structure:
```javascript
// supabase.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'YOUR_SUPABASE_URL'
const supabaseKey = 'YOUR_SUPABASE_KEY'

export const supabase = createClient(supabaseUrl, supabaseKey)
```

## Project Structure

```
.
├── index.html          # Main HTML file
├── manifest.json       # PWA manifest
├── sw.js              # Service worker
├── favicon.svg        # Favicon
├── vercel.json        # Vercel configuration
├── package.json       # Project configuration
└── README.md          # This file
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
