"use client"

import { useState, useEffect } from "react"
import type { CurrentWeather, ForecastData } from "@/types/weather"

export function useWeather(city: string) {
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather | null>(null)
  const [forecast, setForecast] = useState<ForecastData[] | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (!city) return

      setIsLoading(true)
      setError(null)

      try {
        // Fetch current weather
        const currentWeatherResponse = await fetch(`/api/weather?city=${encodeURIComponent(city)}`)

        if (!currentWeatherResponse.ok) {
          const errorData = await currentWeatherResponse.json()
          throw new Error(errorData.message || "Failed to fetch current weather")
        }

        const currentWeatherData = await currentWeatherResponse.json()
        setCurrentWeather(currentWeatherData)

        // Fetch forecast
        const forecastResponse = await fetch(`/api/forecast?city=${encodeURIComponent(city)}`)

        if (!forecastResponse.ok) {
          const errorData = await forecastResponse.json()
          throw new Error(errorData.message || "Failed to fetch forecast")
        }

        const forecastData = await forecastResponse.json()
        setForecast(forecastData.list)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred")
        console.error("Weather fetch error:", err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchWeatherData()
  }, [city])

  return { currentWeather, forecast, isLoading, error }
}
