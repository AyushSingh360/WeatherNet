
# 🌤️ Vibrant Weather

**Vibrant Weather** is a stylish, fast, and responsive weather dashboard built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.  
It fetches real-time weather and forecast data using the **OpenWeather API**.

---

## ✨ Features
- 🌎 Current Weather Information
- 📅 5-Day Weather Forecast
- 🔥 Responsive Design (Mobile-friendly)
- 🌙 Dark Mode Support
- 🌀 Animated Weather Icons
- ⚡ Built with cutting-edge technologies (Next.js App Router, Server Components)

---

## 🚀 Tech Stack
- [Next.js 14](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [OpenWeatherMap API](https://openweathermap.org/api)
- [Shadcn UI](https://ui.shadcn.dev/) for beautiful components

---

## 🛠️ Installation & Running Locally

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd vibrant-weather
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   or if you prefer:
   ```bash
   pnpm install
   ```

3. **Configure Environment Variables:**

   Create a file named `.env.local` in the project root, and add:
   ```dotenv
   OPENWEATHERMAP_API_KEY=24f35048331ae83b69492b1fbaaeeacc
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## 🧩 Project Structure
```
/app
  /api         → Weather API routes (server-side)
  /components  → Reusable UI components
  /hooks       → Custom React hooks
  /styles      → Global CSS
/public         → Static assets
```

---

## 🧹 TODOs / Future Improvements
- Add location auto-detection (using browser Geolocation API)
- Show weather alerts (severe weather warnings)
- Support multiple weather providers (backup APIs)

---

## 📜 License
This project is licensed under the **MIT License**.

---

## 👤 Author
**Ayush Singh**

> Built with 💻, ☕, and a lot of ☀️ and ☁️!
