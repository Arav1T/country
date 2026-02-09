# 🌍 Countries Explorer – SEO Optimized Next.js App

This project is a **server-side rendered (SSR) website** built using **Next.js App Router**.  
It demonstrates **programmatic SEO**, dynamic routes, and modern SEO best practices.

---

## 🚀 Features

- Server-side rendering (SSR) using Next.js
- Dynamic pages for each country
- SEO-friendly metadata (title & description)
- JSON-LD structured data (Schema.org)
- Dynamic sitemap for search engines
- Responsive UI using Tailwind CSS and Shadcn UI
- Deployed on Vercel

---

## 🗂️ Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Shadcn UI
- REST Countries API

---

## 📊 Data Source

Country data is fetched from the public API:

https://restcountries.com/v3.1/all


Each country is used to generate a dynamic SEO page.

---

## 📁 Project Structure



app/
├─ page.tsx // Home page
├─ countries/[slug]/page.tsx // Country detail page
├─ sitemap.ts // Dynamic sitemap
components/
├─ JsonLd.tsx // JSON-LD component
lib/
├─ api.ts // API functions


---

## 🔍 SEO Implementation

- Dynamic meta titles and descriptions
- JSON-LD structured data for each country
- OpenGraph metadata
- Automatically generated sitemap

---

## ▶️ Running Locally

1. Clone the repository:
```bash
git clone <your-repo-url>


Install dependencies:

npm install


Run the development server:

npm run dev