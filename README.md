**✅ Generated: React + Vite + Tailwind Portfolio (with Framer Motion)**

### Run locally
```bash
npm install
npm run dev
```

If you don’t already have a Vite React TS project, you can also scaffold similarly:
```bash
npm create vite@latest my-portfolio -- --template react-ts
```

### Tech
- React + TypeScript + Vite
- Tailwind CSS
- Framer Motion
- lucide-react (icons)

### Replace your avatar
- Put your photo at: `/public/avatar.jpg` (same filename).

### Email form
- Uses `mailto:` fallback by default.
- To enable EmailJS, install `emailjs-com` and fill `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, `YOUR_PUBLIC_KEY` in `ContactForm.tsx` (and uncomment).

### Deploy
- Vercel/Netlify: build command `npm run build`, output `dist/`.

### Accessibility checklist
- Keyboard focus visible
- ARIA labels on interactive elements
- Sufficient color contrast (WCAG AA)
