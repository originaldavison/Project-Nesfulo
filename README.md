# NESFULO — Remote Careers

A Next.js careers site for NESFULO: 14 remote roles, a dedicated `/apply/[role]`
application page per role, and eligibility limited to the US, Canada, and the UK.

## Stack

- Next.js 14 (App Router)
- Tailwind CSS
- Poppins (via `next/font/google`)

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Project structure

```
app/
  layout.js            Root layout, loads Poppins, sets metadata
  page.js               Home page (hero, job grid)
  globals.css           Tailwind + custom ribbon/hero styles
  not-found.js           404 page
  apply/[role]/
    page.js             Apply page for a single role (server component)
    ApplyForm.js        The actual form (client component, has the country logic)
components/
  Header.js  Hero.js  EligibilityStrip.js  JobGrid.js  JobCard.js  Logo.js  Footer.js
lib/
  jobs.js                All 14 roles live here — edit this file to add/remove/edit roles
public/
  logo.svg  favicon.svg   NESFULO logomark
```

To add or edit a role, edit `lib/jobs.js` — every job automatically gets a
card on the home page and its own `/apply/<id>` page.

## Before you launch this for real

The apply form currently only **simulates** a submission (see the
`handleSubmit` function in `app/apply/[role]/ApplyForm.js` — it just flips a
piece of state, nothing is sent anywhere). Before going live you'll want to:

1. **Wire up real submission.** Easiest options: a form backend like
   Formspree/Getform, or a Next.js [API route](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
   that writes to a database or emails you.
2. **Handle CV uploads properly.** Right now it's a link field. If you want
   real file uploads, add an `<input type="file">` and store uploads in
   something like S3 or Cloudinary rather than passing files through a
   basic form endpoint.
3. **Add a privacy policy.** You're collecting name, email, age, and home
   address — say what you do with it and how long you keep it.
4. **Register a real domain and business identity.** A multi-role remote
   job board asking for personal details is a pattern scammers use too —
   a verifiable company identity (real domain, business registration,
   named contact) helps candidates trust the listing is genuine.

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit — NESFULO careers site"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## Deploy a live preview (Vercel — free, made by the Next.js team)

1. Push the repo to GitHub (above).
2. Go to https://vercel.com, sign in with GitHub, click **Add New → Project**.
3. Select this repo. Vercel auto-detects Next.js — no config needed.
4. Click **Deploy**. You'll get a live URL (and a new one on every push) to
   share before pointing a real domain at it.
