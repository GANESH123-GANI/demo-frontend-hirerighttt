# HireRight — Production Deployment Guide (Vercel & Render)

This guide walks you through deploying **HireRight** with zero downtime:
- **Frontend (React + Vite SPA)** deployed on **Vercel**
- **Backend (Node.js API & AI Assessment Engine)** deployed on **Render**

---

## 🏗 Architecture Overview

```
+------------------------------------+           +-------------------------------------+
|         VERCEL (Frontend)          |           |          RENDER (Backend)           |
|                                    |           |                                     |
|  - React 19 + TypeScript + Vite    |  HTTPS    |  - Node.js API Service              |
|  - SPA Routing via vercel.json     | --------> |  - LLM Assessment & Ava Interviews  |
|  - Real Logged-in Candidate Search |  REST/WS  |  - Proctoring Integrity Telemetry   |
|  - VITE_API_URL pointing to Render |           |  - PORT 8787 / /api/health          |
+------------------------------------+           +-------------------------------------+
```

---

## Part 1: Deploy Backend to Render

### Method A: 1-Click Blueprint (Recommended)
1. Push your repository to **GitHub**.
2. Go to [Render Dashboard](https://dashboard.render.com).
3. Click **New +** → **Blueprint**.
4. Connect your GitHub repository.
5. Render will automatically detect [`render.yaml`](../render.yaml) and configure the `hireright-backend` service.
6. Under **Environment Variables**, provide your AI key if you have one:
   - `EXPERIENTIALLABS_API_KEY` (or `OPENROUTER_API_KEY` / `OPENAI_API_KEY`)
7. Click **Apply**. Render will install dependencies and start `node index.mjs`.
8. Once deployed, note down your Render service URL:  
   👉 `https://hireright-backend.onrender.com`

---

### Method B: Manual Web Service on Render
If you prefer creating the service manually:
1. In Render, click **New +** → **Web Service**.
2. Select your repository.
3. Configure the fields:
   - **Name**: `hireright-backend`
   - **Region**: Oregon (or closest to your users)
   - **Root Directory**: `backend/node`
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node index.mjs`
   - **Instance Type**: Free
4. Add Environment Variables:
   | Key | Value | Purpose |
   |---|---|---|
   | `NODE_ENV` | `production` | Production mode |
   | `ENVIRONMENT` | `production` | Runtime mode |
   | `PORT` | `8787` | Server port |
   | `CORS_ORIGINS` | `*` (or your Vercel URL) | Cross-origin access |
   | `SESSION_SECRET` | *(Click generate 32+ chars)* | Session cryptography |
   | `ALLOW_DEMO_ACCOUNTS` | `true` | Allows test demo accounts |
   | `SIGNUP_ENABLED` | `true` | Allows user registrations |
   | `EXPERIENTIALLABS_API_KEY` | `your_key_here` | LLM interview evaluations |
5. Click **Create Web Service**.
6. Verify deployment by visiting `https://your-service.onrender.com/api/health`. You should see `{"ok":true,"service":"hireright-api"}`.

---

## Part 2: Deploy Frontend to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard).
2. Click **Add New...** → **Project**.
3. Import your GitHub repository (`HireRightt`).
4. In the **Configure Project** screen:
   - **Framework Preset**: `Vite`
   - **Root Directory**: Leave as `./` (or select `frontend` if deploying frontend repo directly)
   - **Build Command**: `npm run build`
   - **Output Directory**: `frontend/dist` (or `dist` if root dir is `frontend`)
5. Add Environment Variables:
   | Key | Value | Description |
   |---|---|---|
   | `VITE_API_URL` | `https://your-backend.onrender.com` | Your deployed Render backend URL |
   | `VITE_EXPERIENTIALLABS_API_KEY` | *(optional)* | Client-side Ava streaming if desired |
6. Click **Deploy**.
7. Vercel will run `tsc -b && vite build` and deploy in ~30 seconds.
8. Your production URL will be live at `https://hireright-xxx.vercel.app`!

---

## Part 3: Connect Frontend & Backend (Final Polish)

Once you have both URLs:
1. Go to your **Render Dashboard** → `hireright-backend` → **Environment**.
2. Update `CORS_ORIGINS` to include your Vercel domain:
   ```env
   CORS_ORIGINS=https://hireright-xxx.vercel.app,http://localhost:5173
   ```
3. Save changes. Render will auto-reload with strict CORS protection.

---

## 🔍 Verification Checklist

- [x] **SPA Routing**: Navigating to `/employer`, `/employer/dashboard`, `/login`, `/interview` works without 404 errors on refresh (managed by `vercel.json` rewrite rule).
- [x] **Employer Landing Flow**: Visiting `/employer` displays the **Employer Landing Page first**.
- [x] **Talent Search Hub**: Clicking *"Enter Candidate Search & Verification Dashboard →"* seamlessly reveals the search dashboard.
- [x] **3-Way Search**: Search works across **Name**, **Email**, and **Phone Number** in real-time.
- [x] **Strict Real-User Guard**: Only genuine users who logged in and took action are visible (zero mock Vikram cards).
- [x] **Full AI Dossier Modal**: Clicking any candidate opens their comprehensive evaluation report, verbatim answers, and proctoring telemetry.
- [x] **Health Check**: Backend responds `200 OK` on `/api/health`.
