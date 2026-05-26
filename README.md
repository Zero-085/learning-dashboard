# LearnOS — Student Learning Dashboard

A futuristic dark-mode student dashboard built with Next.js App Router, Supabase, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript** — strict mode throughout
- **Tailwind CSS** — custom design tokens
- **Framer Motion** — spring physics, staggered animations, layoutId
- **Supabase** — PostgreSQL, server-side data fetching
- **Lucide React** — dynamic icon rendering

## Architecture Decisions

### Server vs Client Components

- `app/dashboard/page.tsx` → **Server Component** — fetches data via async RSC, wraps `CourseGrid` in `<Suspense>`
- `components/dashboard/CourseGrid.tsx` → **Server Component** — calls Supabase directly, passes data to client cards
- `components/dashboard/CourseCard.tsx` → **Client Component** — handles Framer Motion animations
- `components/sidebar/Sidebar.tsx` → **Client Component** — manages active state, layoutId animations
- `components/ui/BentoTile.tsx` → **Client Component** — shared animated wrapper

Data never fetched via `useEffect`. All Supabase calls happen server-side using the `@supabase/supabase-js` client in Server Components.

### Animation Strategy

- All animations use `transform` and `opacity` only — zero layout shifts
- Spring physics: `stiffness: 300, damping: 20`
- Staggered tile entrance via `delay: index * 0.07`
- `layoutId="sidebar-active"` for snapping sidebar indicator
- Progress bars animate from 0% on mount with spring easing

### Responsive Layout

- **Desktop (>1024px)**: Full sidebar + 4-column bento grid
- **Tablet (768–1024px)**: Collapsed sidebar (icons only) + 2-column grid
- **Mobile (<768px)**: Hidden sidebar + bottom nav + single-column stacked

## Setup

### 1. Clone and install

```bash
git clone https://github.com/yourusername/learning-dashboard
cd learning-dashboard
npm install
```

### 2. Supabase setup

1. Go to [supabase.com](https://supabase.com) and create a new project
2. In the SQL editor, run the following:

```sql
-- Create courses table
create table if not exists courses (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  progress integer not null default 0,
  icon_name text not null,
  created_at timestamptz default now()
);

-- Seed data
insert into courses (title, progress, icon_name) values
  ('Advanced React Patterns', 78, 'Code2'),
  ('AI Systems Design', 45, 'Brain'),
  ('TypeScript Mastery', 92, 'Layers'),
  ('Motion UI Engineering', 31, 'Zap');

-- Enable Row Level Security (optional but recommended)
alter table courses enable row level security;

-- Allow public read access (adjust as needed)
create policy "Allow public read" on courses
  for select using (true);
```

3. Go to **Settings → API** in your Supabase dashboard
4. Copy the **Project URL** and **anon/public key**

### 3. Environment variables

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### 4. Run locally

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) — it redirects to `/dashboard`.

## Deployment (Vercel)

1. Push to GitHub
2. Import the repo on [vercel.com](https://vercel.com)
3. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy

**Never commit `.env.local`** — it's gitignored by default in Next.js.

## Folder Structure

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx                    # Redirects to /dashboard
│   └── dashboard/
│       ├── page.tsx                # Main dashboard (Server Component)
│       └── loading.tsx             # Skeleton fallback
├── components/
│   ├── charts/
│   │   └── ActivityTile.tsx        # Contribution graph
│   ├── dashboard/
│   │   ├── CourseCard.tsx          # Client — animated course tile
│   │   ├── CourseGrid.tsx          # Server — fetches & maps courses
│   │   ├── DashboardShell.tsx      # Client — sidebar state wrapper
│   │   └── HeroTile.tsx            # Welcome + stats tile
│   ├── sidebar/
│   │   ├── BottomNav.tsx           # Mobile bottom navigation
│   │   └── Sidebar.tsx             # Desktop collapsible nav
│   └── ui/
│       ├── BentoTile.tsx           # Framer Motion tile wrapper
│       ├── ProgressBar.tsx         # Animated progress bar
│       └── Skeleton.tsx            # Shimmer skeleton loaders
├── lib/
│   ├── icons.ts                    # Lucide icon name → component map
│   ├── supabase/
│   │   └── queries.ts              # Typed Supabase server queries
│   └── utils.ts                    # Gradient/color maps, data generators
├── types/
│   └── index.ts                    # TypeScript interfaces
└── .env.example
```

## Challenges & Notes

- **Server/Client split**: Framer Motion only works in client components. The solution is thin client wrappers (`BentoTile`, `CourseCard`) that receive data from server parents.
- **Zero CLS**: All hover/entrance animations use only `transform` and `opacity`, keeping layout entirely stable.
- **Dynamic icons**: `lib/icons.ts` maintains a manual map of `icon_name → LucideIcon` to avoid `require()` hacks that break tree-shaking.
