"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

interface WeatherMapProps {
  lat?: number
  lon?: number
  city: string
}

export function WeatherMap({ lat, lon, city }: WeatherMapProps) {
  const openInMaps = () => {
    if (lat && lon) {
      window.open(`https://www.google.com/maps/@${lat},${lon},10z`, '_blank')
    } else {
      window.open(`https://www.google.com/maps/search/${encodeURIComponent(city)}`, '_blank')
    }
  }

  return (
    <Card className="backdrop-blur-md bg-white/10 dark:bg-black/20 border-white/20 shadow-xl animate-slide-up">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <MapPin className="h-5 w-5" />
          Location
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="aspect-video bg-white/10 rounded-lg flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-green-500/20"></div>
          <div className="text-center z-10">
            <MapPin className="h-12 w-12 text-white/80 mx-auto mb-2 animate-bounce-slow" />
            <p className="text-white font-semibold">{city}</p>
            {lat && lon && (
              <p className="text-white/70 text-sm mt-1">
                {lat.toFixed(4)}, {lon.toFixed(4)}
              </p>
            )}
          </div>
        </div>
        <Button 
          onClick={openInMaps}
          className="w-full bg-white/20 hover:bg-white/30 text-white border-white/20 transition-all duration-300 hover:scale-105"
        >
          <ExternalLink className="h-4 w-4 mr-2" />
          Open in Maps
        </Button>
      </CardContent>
    </Card>
  )
}