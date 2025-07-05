"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Activity, AlertTriangle } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"
import { cn } from "@/lib/utils"

interface AirQualityCardProps {
  airQuality: any
  isLoading: boolean
  className?: string
}

const AQI_LEVELS = {
  1: { label: "Good", color: "bg-gray-500", textColor: "text-gray-700" },
  2: { label: "Fair", color: "bg-gray-600", textColor: "text-gray-700" },
  3: { label: "Moderate", color: "bg-gray-700", textColor: "text-gray-700" },
  4: { label: "Poor", color: "bg-gray-800", textColor: "text-gray-700" },
  5: { label: "Very Poor", color: "bg-black", textColor: "text-gray-700" },
}

export function AirQualityCard({ airQuality, isLoading, className }: AirQualityCardProps) {
  if (isLoading) {
    return (
      <Card className={cn("backdrop-blur-md bg-white/10 dark:bg-black/20 border-white/20 shadow-xl", className)}>
        <CardContent className="flex items-center justify-center h-32">
          <LoadingSpinner />
        </CardContent>
      </Card>
    )
  }

  if (!airQuality?.list?.[0]) {
    return (
      <Card className={cn("backdrop-blur-md bg-white/10 dark:bg-black/20 border-white/20 shadow-xl", className)}>
        <CardContent className="flex items-center justify-center h-32 text-white/70">
          <div className="text-center">
            <AlertTriangle className="h-8 w-8 mx-auto mb-2" />
            <p>Air quality data unavailable</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  const aqi = airQuality.list[0].main.aqi
  const components = airQuality.list[0].components
  const level = AQI_LEVELS[aqi as keyof typeof AQI_LEVELS]

  return (
    <Card className={cn("backdrop-blur-md bg-white/10 dark:bg-black/20 border-white/20 shadow-xl transition-all duration-300 hover:scale-105", className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-white flex items-center gap-2">
          <Activity className="h-5 w-5" />
          Air Quality
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center">
          <div className="text-3xl font-bold text-white mb-2">{aqi}</div>
          <Badge className={`${level.color} text-white hover:${level.color}/80 transition-all duration-300`}>
            {level.label}
          </Badge>
        </div>
        
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="text-center p-2 rounded bg-white/10 dark:bg-black/20 backdrop-blur-sm">
            <div className="text-white/70">PM2.5</div>
            <div className="font-semibold text-white">{components.pm2_5.toFixed(1)}</div>
          </div>
          <div className="text-center p-2 rounded bg-white/10 dark:bg-black/20 backdrop-blur-sm">
            <div className="text-white/70">PM10</div>
            <div className="font-semibold text-white">{components.pm10.toFixed(1)}</div>
          </div>
          <div className="text-center p-2 rounded bg-white/10 dark:bg-black/20 backdrop-blur-sm">
            <div className="text-white/70">O₃</div>
            <div className="font-semibold text-white">{components.o3.toFixed(1)}</div>
          </div>
          <div className="text-center p-2 rounded bg-white/10 dark:bg-black/20 backdrop-blur-sm">
            <div className="text-white/70">NO₂</div>
            <div className="font-semibold text-white">{components.no2.toFixed(1)}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}