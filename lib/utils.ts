import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(timestamp: number): string {
  return new Date(timestamp * 1000).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function formatTime(timestamp: number): string {
  return new Date(timestamp * 1000).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  })
}

export function formatDay(timestamp: number): string {
  return new Date(timestamp * 1000).toLocaleDateString("en-US", {
    weekday: "short",
  })
}

export function getWeatherIcon(iconCode: string): string {
  const iconMap: { [key: string]: string } = {
    "01d": "☀️", // clear sky day
    "01n": "🌙", // clear sky night
    "02d": "⛅", // few clouds day
    "02n": "☁️", // few clouds night
    "03d": "☁️", // scattered clouds
    "03n": "☁️",
    "04d": "☁️", // broken clouds
    "04n": "☁️",
    "09d": "🌧️", // shower rain
    "09n": "🌧️",
    "10d": "🌦️", // rain day
    "10n": "🌧️", // rain night
    "11d": "⛈️", // thunderstorm
    "11n": "⛈️",
    "13d": "❄️", // snow
    "13n": "❄️",
    "50d": "🌫️", // mist
    "50n": "🌫️",
  }
  
  return iconMap[iconCode] || "🌤️"
}

export function getWeatherGradient(condition: string): string {
  const gradients: { [key: string]: string } = {
    "Clear": "from-yellow-400 via-orange-500 to-red-500",
    "Clouds": "from-gray-400 via-gray-500 to-gray-600",
    "Rain": "from-blue-400 via-blue-500 to-blue-600",
    "Drizzle": "from-blue-300 via-blue-400 to-blue-500",
    "Thunderstorm": "from-purple-400 via-purple-500 to-purple-600",
    "Snow": "from-blue-100 via-blue-200 to-blue-300",
    "Mist": "from-gray-300 via-gray-400 to-gray-500",
    "Fog": "from-gray-300 via-gray-400 to-gray-500",
  }
  
  return gradients[condition] || "from-blue-400 via-blue-500 to-blue-600"
}