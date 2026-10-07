# PlaceHub - Student Placement Dashboard

React 18 + Vite + React Router v6 + Context API + hooks.

## Run in VS Code
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Structure
```
src/
  services/api.js          mock API (replace with fetch/axios)
  context/AppContext.jsx   auth, applications, notifications state
  hooks/useForm.jsx        form validation hook + Field component
  hooks/useLoad.js         data-loading hook
  components/Layout.jsx    sidebar + protected layout
  pages/                   Auth, Dashboard, Jobs, Applications, Notifications, Profile
```

## Deploy
Vercel/Netlify: import the repo, build command `npm run build`, output `dist`.
Uses HashRouter, so no server rewrite rules are needed.

## Next steps
- Convert `h(...)` calls to JSX if your course expects it.
- Point `services/api.js` at a real backend and hash passwords server-side.
- Add docs: architecture, screenshots (UI design screens), demo script.
