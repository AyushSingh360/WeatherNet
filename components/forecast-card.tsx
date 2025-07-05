"use client"

import { Card, CardContent } from "@/components/ui/card"
import { formatDay, formatTime, getWeatherIcon } from "@/lib/utils"
import { cn } from "@/lib/utils"
import type { ForecastData } from "@/types/weather"

interface ForecastCardProps {
  forecast: ForecastData
  className?: string
}

export function ForecastCard({ forecast, className }: ForecastCardProps) {
  return (
    <Card className={cn("backdrop-blur-md bg-white/10 dark:bg-black/20 border-white/20 shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white/20 dark:hover:bg-black/30", className)}>
      <CardContent className="p-4 text-center">
        <div className="text-white/80 text-sm mb-2">
          {formatDay(forecast.dt)}
        </div>
        <div className="text-white/60 text-xs mb-3">
          {formatTime(forecast.dt)}
        </div>
        <div className="text-3xl mb-3 animate-bounce-slow">
          {getWeatherIcon(forecast.weather[0].icon)}
        </div>
        <div className="text-white font-semibold text-lg mb-1">
          {Math.round(forecast.main.temp)}°C
        </div>
        <div className="text-white/70 text-xs capitalize mb-2">
          {forecast.weather[0].description}
        </div>
        <div className="text-white/60 text-xs">
          {Math.round(forecast.main.temp_max)}° / {Math.round(forecast.main.temp_min)}°
        </div>
        {forecast.pop > 0 && (
          <div className="text-gray-300 text-xs mt-2">
            💧 {Math.round(forecast.pop * 100)}%
          </div>
        )}
      </CardContent>
    </Card>
  )
}