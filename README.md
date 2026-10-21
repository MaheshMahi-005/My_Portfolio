# Mahesh Chandra Ganji — Portfolio (React + CSS3)

## Run it
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

## Where to edit
- **Content** (text, projects, links, skills, education): `src/data.js`
  - A link left as `''` hides its button automatically.
  - Fill in: Skyline live/GitHub links, certificate links, and double-check the TaskManager / CineBase GitHub repo URLs.
- **Colors / fonts / spacing**: CSS variables at the top of `src/index.css`
  - Dark theme = `:root` / `[data-theme='dark']`, light theme = `[data-theme='light']`
- **A section's layout/animation**: `src/components/<Section>/<Section>.jsx` and `.css`
- **Resume**: put your PDF at `public/assets/resume.pdf`
