import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const city = searchParams.get("city")

  if (!city) {
    return NextResponse.json({ message: "City parameter is required" }, { status: 400 })
  }

  const apiKey = process.env.OPENWEATHERMAP_API_KEY

  if (!apiKey) {
    return NextResponse.json({ message: "API key is not configured" }, { status: 500 })
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`,
    )

    if (!response.ok) {
      const errorData = await response.json()
      return NextResponse.json(
        { message: errorData.message || "Failed to fetch forecast data" },
        { status: response.status },
      )
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Forecast API error:", error)
    return NextResponse.json({ message: "Failed to fetch forecast data" }, { status: 500 })
  }
}
