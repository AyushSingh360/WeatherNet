export interface WeatherCondition {
  id: number
  main: string
  description: string
  icon: string
}

export interface CurrentWeather {
  name: string
  dt: number
  weather: WeatherCondition[]
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
  }
  wind: {
    speed: number
    deg: number
  }
  sys: {
    country: string
    sunrise: number
    sunset: number
  }
  clouds: {
    all: number
  }
  visibility: number
}

export interface ForecastData {
  dt: number
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
  }
  weather: WeatherCondition[]
  clouds: {
    all: number
  }
  wind: {
    speed: number
    deg: number
  }
  visibility: number
  pop: number
  dt_txt: string
}
