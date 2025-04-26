import { WeatherDashboard } from "@/components/weather-dashboard"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 dark:from-purple-900 dark:via-fuchsia-900 dark:to-slate-900 transition-colors duration-500">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center drop-shadow-lg">Vibrant Weather</h1>
          <ThemeToggle />
        </div>
        <WeatherDashboard />
      </div>
    </main>
  )
}
