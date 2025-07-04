import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const lat = searchParams.get("lat")
  const lon = searchParams.get("lon")

  if (!lat || !lon) {
    return NextResponse.json({ message: "Latitude and longitude parameters are required" }, { status: 400 })
  }

  const apiKey = process.env.OPENWEATHERMAP_API_KEY

  if (!apiKey) {
    return NextResponse.json({ message: "API key is not configured" }, { status: 500 })
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`,
    )

    if (!response.ok) {
      const errorData = await response.json()
      return NextResponse.json(
        { message: errorData.message || "Failed to fetch air quality data" },
        { status: response.status },
      )
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Air quality API error:", error)
    return NextResponse.json({ message: "Failed to fetch air quality data" }, { status: 500 })
  }
}