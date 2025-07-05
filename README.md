# 🌤️ WeatherNet - Advanced Weather Network

**WeatherNet** is a sophisticated, feature-rich weather network application built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. Experience weather data like never before with beautiful animations, comprehensive analytics, and intelligent features in a sleek black and white design.

![WeatherNet Dashboard](https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop)

---

## ✨ Features

### 🌍 Core Weather Features
- **Real-time Weather Data** - Current conditions with live updates
- **5-Day Detailed Forecast** - Hour-by-hour predictions
- **Interactive Weather Charts** - Temperature, humidity, and pressure trends
- **Weather Alerts** - Intelligent warnings for extreme conditions

### 🎯 Smart Features
- **📍 Auto Location Detection** - GPS-based weather for your current location
- **⭐ Favorites System** - Save and quickly access your favorite cities
- **🌬️ Air Quality Index** - Real-time pollution data with health recommendations
- **🗺️ Interactive Maps** - Visual location context with map integration

### 🎨 Beautiful UI/UX
- **🖤 Monochrome Design** - Elegant black and white aesthetic
- **🌙 Dark/Light Mode** - Seamless theme switching
- **📱 Fully Responsive** - Perfect on mobile, tablet, and desktop
- **🎭 Glassmorphism Design** - Modern frosted glass effects
- **⚡ Lightning Fast** - Optimized performance with smooth animations

### 📊 Advanced Analytics
- **📈 Temperature Trends** - Visual charts showing weather patterns
- **💨 Wind & Pressure Data** - Comprehensive atmospheric information
- **☔ Precipitation Probability** - Rain forecasts with percentage chances
- **🌅 Sunrise/Sunset Times** - Complete daily light cycle information

---

## 🚀 Tech Stack

### Frontend
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first styling
- **[Shadcn/ui](https://ui.shadcn.dev/)** - Beautiful component library
- **[Recharts](https://recharts.org/)** - Interactive data visualization

### APIs & Services
- **[OpenWeatherMap API](https://openweathermap.org/api)** - Weather and air quality data
- **Geolocation API** - Browser-based location detection
- **Google Maps Integration** - Location visualization

### Development Tools
- **ESLint & Prettier** - Code quality and formatting
- **TypeScript Strict Mode** - Enhanced type safety
- **Responsive Design** - Mobile-first approach

---

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ installed
- OpenWeatherMap API key (free at [openweathermap.org](https://openweathermap.org/api))

### Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/weathernet.git
   cd weathernet
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Configure Environment Variables:**
   
   Create `.env.local` in the project root:
   ```env
   OPENWEATHERMAP_API_KEY=your_api_key_here
   ```
   
   > 🔑 **Get your free API key:** Visit [OpenWeatherMap](https://openweathermap.org/api) and sign up for a free account.

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) to see WeatherNet in action! ✨

---

## 🎯 Usage Guide

### 🔍 Search for Cities
- Type any city name in the search bar
- Get instant weather updates with smooth animations

### 📍 Use Your Location
- Click the location button to auto-detect your position
- Grant location permissions for the best experience

### ⭐ Manage Favorites
- Click the bookmark icon to save cities
- Access your favorites from the dedicated tab
- Remove cities with a single click

### 📊 Explore Data
- Switch between Current, Forecast, Charts, and Favorites tabs
- Hover over elements for interactive details
- View comprehensive weather metrics

---

## 🏗️ Project Structure

```
weathernet/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── weather/       # Current weather endpoint
│   │   ├── forecast/      # Forecast endpoint
│   │   └── air-quality/   # Air quality endpoint
│   ├── globals.css        # Global styles & animations
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── logo.tsx          # WeatherNet logo component
│   ├── weather-dashboard.tsx  # Main dashboard
│   ├── weather-chart.tsx     # Chart components
│   ├── air-quality-card.tsx  # Air quality display
│   └── ...               # Other feature components
├── hooks/                # Custom React hooks
│   ├── use-weather.tsx   # Weather data management
│   ├── use-geolocation.tsx   # Location detection
│   └── use-favorites.tsx     # Favorites management
├── lib/                  # Utility functions
├── types/                # TypeScript definitions
└── public/               # Static assets
```

---

## 🎨 Design Philosophy

### Visual Design
- **Monochrome Aesthetic** - Sophisticated black and white color scheme
- **Glassmorphism** - Frosted glass effects with backdrop blur
- **Micro-interactions** - Subtle animations that enhance user experience
- **Typography Hierarchy** - Clear information architecture

### User Experience
- **Progressive Disclosure** - Information revealed contextually
- **Accessibility First** - WCAG compliant design
- **Performance Optimized** - Fast loading with smooth animations
- **Mobile Responsive** - Touch-friendly interface

---

## 🌟 Key Features Explained

### 🎭 Advanced Animations
```css
/* Custom keyframe animations */
@keyframes slide-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Staggered animation delays */
.animate-slide-up.delay-100 { animation-delay: 100ms; }
```

### 🌬️ Air Quality Integration
- Real-time AQI (Air Quality Index) data
- PM2.5, PM10, O₃, NO₂ measurements
- Health recommendations based on pollution levels
- Monochrome color-coded quality indicators

### 📊 Interactive Charts
- Temperature trend visualization
- Humidity and pressure correlations
- Responsive chart design with white/gray color scheme
- Smooth data transitions

### ⚡ Performance Optimizations
- Lazy loading of components
- Optimized API calls with caching
- Efficient state management
- Minimal bundle size

---

## 🔧 Customization

### Themes
Modify `app/globals.css` to customize the monochrome theme:
```css
:root {
  --primary-gradient: linear-gradient(135deg, #000000 0%, #404040 100%);
  --animation-duration: 0.6s;
}
```

### Logo Customization
The WeatherNet logo combines a cloud icon with a lightning bolt and can be customized in `components/logo.tsx`:
- Adjust icon sizes for different breakpoints
- Modify the color scheme
- Change the typography

---

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add your `OPENWEATHERMAP_API_KEY` in environment variables
4. Deploy with one click!

### Other Platforms
- **Netlify**: Build command `npm run build`, publish directory `out`
- **Railway**: Automatic deployment from GitHub
- **Docker**: Use the included Dockerfile for containerization

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch:** `git checkout -b feature/amazing-feature`
3. **Commit your changes:** `git commit -m 'Add amazing feature'`
4. **Push to the branch:** `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines
- Follow TypeScript best practices
- Maintain responsive design principles
- Keep the monochrome design consistent
- Add animations for new components
- Update documentation for new features

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **OpenWeatherMap** for comprehensive weather data
- **Shadcn/ui** for beautiful component primitives
- **Recharts** for powerful data visualization
- **Pexels** for stunning stock photography
- **Lucide** for crisp, consistent icons

---

## 📞 Support

Having issues? We're here to help!

- 🐛 **Bug Reports**: [Open an issue](https://github.com/yourusername/weathernet/issues)
- 💡 **Feature Requests**: [Start a discussion](https://github.com/yourusername/weathernet/discussions)
- 📧 **Email**: support@weathernet.app

---

## 🎯 Roadmap

### Upcoming Features
- [ ] **Weather Radar Maps** - Animated precipitation overlay
- [ ] **Historical Weather Data** - Past weather trends and comparisons
- [ ] **Weather Notifications** - Push alerts for severe weather
- [ ] **Multi-language Support** - Internationalization
- [ ] **Offline Mode** - Cached data for offline viewing
- [ ] **Weather Widgets** - Embeddable components for other sites

### Performance Improvements
- [ ] **Service Worker** - Background data updates
- [ ] **Image Optimization** - WebP format with fallbacks
- [ ] **Bundle Splitting** - Reduced initial load time
- [ ] **CDN Integration** - Global content delivery

---

<div align="center">

**Built with ❤️ for weather enthusiasts**

*WeatherNet - Your sophisticated weather network* 🌤️

[![GitHub stars](https://img.shields.io/github/stars/yourusername/weathernet?style=social)](https://github.com/yourusername/weathernet)

</div>