"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Trash2, MapPin } from "lucide-react"
import { getWeatherIcon } from "@/lib/utils"

interface FavoriteCity {
  name: string
  country: string
  temp: number
  condition: string
  icon: string
}

interface FavoritesPanelProps {
  favorites: FavoriteCity[]
  onCitySelect: (city: string) => void
  onRemoveFavorite: (cityName: string) => void
}

export function FavoritesPanel({ favorites, onCitySelect, onRemoveFavorite }: FavoritesPanelProps) {
  if (favorites.length === 0) {
    return (
      <Card className="backdrop-blur-md bg-white/10 dark:bg-black/20 border-white/20 shadow-xl">
        <CardContent className="flex flex-col items-center justify-center h-64 text-white/70">
          <Heart className="h-12 w-12 mb-4" />
          <p className="text-lg font-semibold mb-2">No favorite cities yet</p>
          <p className="text-sm text-center">
            Add cities to your favorites by clicking the bookmark icon on the weather card
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {favorites.map((city, index) => (
        <Card 
          key={city.name} 
          className={`backdrop-blur-md bg-white/10 dark:bg-black/20 border-white/20 shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white/20 cursor-pointer animate-slide-up delay-${index * 100}`}
          onClick={() => onCitySelect(city.name)}
        >
          <CardHeader className="pb-2">
            <CardTitle className="text-white text-lg flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {city.name}, {city.country}
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation()
                  onRemoveFavorite(city.name)
                }}
                className="text-white/70 hover:text-red-400 hover:bg-red-500/20 transition-all duration-300"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-white">{city.temp}°C</div>
                <div className="text-white/70 capitalize text-sm">{city.condition}</div>
              </div>
              <div className="text-4xl animate-bounce-slow">
                {getWeatherIcon(city.icon)}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}