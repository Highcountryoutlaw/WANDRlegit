"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"

interface SensorData {
  temperature: number
  humidity: number
  airQuality: number
  soilMoisture: number
  lightLevel: number
  networkStrength: number
}

export function SensorFeed() {
  const [sensorData, setSensorData] = useState<SensorData>({
    temperature: 65.3,
    humidity: 72,
    airQuality: 85,
    soilMoisture: 68,
    lightLevel: 15,
    networkStrength: 94,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setSensorData((prev) => ({
        temperature: prev.temperature + (Math.random() - 0.5) * 2,
        humidity: Math.max(0, Math.min(100, prev.humidity + (Math.random() - 0.5) * 5)),
        airQuality: Math.max(0, Math.min(100, prev.airQuality + (Math.random() - 0.5) * 3)),
        soilMoisture: Math.max(0, Math.min(100, prev.soilMoisture + (Math.random() - 0.5) * 4)),
        lightLevel: Math.max(0, Math.min(100, prev.lightLevel + (Math.random() - 0.5) * 8)),
        networkStrength: Math.max(0, Math.min(100, prev.networkStrength + (Math.random() - 0.5) * 2)),
      }))
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const sensors = [
    {
      label: "Temperature",
      value: ((sensorData.temperature * 9) / 5 + 32).toFixed(1),
      unit: "°F",
      color: "text-orange-400",
    },
    { label: "Humidity", value: sensorData.humidity.toFixed(0), unit: "%", color: "text-blue-400" },
    { label: "Air Quality", value: sensorData.airQuality.toFixed(0), unit: "AQI", color: "text-green-400" },
    { label: "Soil Moisture", value: sensorData.soilMoisture.toFixed(0), unit: "%", color: "text-emerald-400" },
    { label: "Light Level", value: sensorData.lightLevel.toFixed(0), unit: "%", color: "text-yellow-400" },
    { label: "Network", value: sensorData.networkStrength.toFixed(0), unit: "%", color: "text-cyan-400" },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
      {sensors.map((sensor, index) => (
        <Card key={sensor.label} className="bg-black/40 border-green-500/30 backdrop-blur-sm p-4">
          <div className="text-xs text-green-300/70 mb-1">{sensor.label}</div>
          <div className={`text-lg font-mono ${sensor.color} animate-pulse`}>
            {sensor.value}
            {sensor.unit}
          </div>
        </Card>
      ))}
    </div>
  )
}
