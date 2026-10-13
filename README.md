# HireRight — Frontend Application

Modern AI-powered technical assessment and interview platform frontend built with React 19, TypeScript, Vite, and Tailwind/Vanilla CSS.

## Features
- **Interactive AI Video Interviewer (Ava)** with real-time proctoring and face integrity tracking
- **Dynamic Profile Wizard** with automatic resume parsing (Google Gemini AI)
- **Role & Experience Calibration** across Junior, Mid, and Senior engineering tracks
- **Performance Evaluation & Scorecard** with printable reports and category breakdown
- **Supabase Authentication & Sync** with real-time session support

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Fill in your configuration:
- `VITE_API_URL`: URL of your backend API (e.g. `http://localhost:8787` or your deployed Render service)
- `VITE_AUTH_PROVIDER`: `supabase` or `local`
- `VITE_SUPABASE_URL` & `VITE_SUPABASE_ANON_KEY`: If using Supabase auth
- `VITE_GEMINI_API_KEY`: Google Gemini API key (optional for client-side dev testing)

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Production Build
```bash
npm run build
```
Build output is generated in `dist/`.
