import { WeatherDashboard } from "@/components/weather-dashboard"
import { ThemeToggle } from "@/components/theme-toggle"
import { Logo } from "@/components/logo"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 dark:from-black dark:via-gray-900 dark:to-black transition-colors duration-500">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <Logo size="md" />
          <ThemeToggle />
        </div>
        <WeatherDashboard />
      </div>
    </main>
  )
}