"use client"

import { useState, useEffect } from "react"

interface AirQualityData {
  list: Array<{
    main: {
      aqi: number
    }
    components: {
      co: number
      no: number
      no2: number
      o3: number
      so2: number
      pm2_5: number
      pm10: number
      nh3: number
    }
  }>
}

export function useAirQuality(lat?: number, lon?: number) {
  const [airQuality, setAirQuality] = useState<AirQualityData | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchAirQuality = async () => {
      if (!lat || !lon) return

      setIsLoading(true)
      setError(null)

      try {
        const response = await fetch(`/api/air-quality?lat=${lat}&lon=${lon}`)
        
        if (!response.ok) {
          throw new Error("Failed to fetch air quality data")
        }

        const data = await response.json()
        setAirQuality(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch air quality data")
      } finally {
        setIsLoading(false)
      }
    }

    fetchAirQuality()
  }, [lat, lon])

  return { airQuality, isLoading, error }
}