"use client"

import { useState, useEffect } from "react"

interface FavoriteCity {
  name: string
  country: string
  temp: number
  condition: string
  icon: string
}

export function useFavorites() {
  const [favorites, setFavorites] = useState<FavoriteCity[]>([])

  useEffect(() => {
    const stored = localStorage.getItem("weather-favorites")
    if (stored) {
      try {
        setFavorites(JSON.parse(stored))
      } catch (error) {
        console.error("Failed to parse favorites from localStorage:", error)
      }
    }
  }, [])

  const saveFavorites = (newFavorites: FavoriteCity[]) => {
    setFavorites(newFavorites)
    localStorage.setItem("weather-favorites", JSON.stringify(newFavorites))
  }

  const addFavorite = (city: FavoriteCity) => {
    const newFavorites = [...favorites.filter(fav => fav.name !== city.name), city]
    saveFavorites(newFavorites)
  }

  const removeFavorite = (cityName: string) => {
    const newFavorites = favorites.filter(fav => fav.name !== cityName)
    saveFavorites(newFavorites)
  }

  const isFavorite = (cityName: string) => {
    return favorites.some(fav => fav.name === cityName)
  }

  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
  }
}