"use client"
import React, { useState } from 'react';
export default function WeatherCard() {
const [loaded,setLoaded] = useState(false);

  return (
    <div className="mt-7 backdrop-blur-md rounded-xl bg-white/20 p-6 w-full max-w-2xl">
        {!loaded ? (
            <div className="flex flex-col justify-center items-center p-3 text-white/70 space-y-3">
                <div>Enter a city name above to get started with real-time weather information</div>
                <div>Try searching for cities like "Tunisia", "New York", or "Tokyo"</div>
            </div>
        ):
      (
      <><h2 className="text-xl font-semibold mb-4 text-white">Weather Forecast</h2>
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-gray-600">Location: New York</p>
          <p className="text-gray-600">Temperature: 75°F</p>
        </div>
        <img src="/weather-icon.png" alt="Weather Icon" className="w-16 h-16" />
      </div>
      <p className="text-gray-600">Condition: Sunny</p></>)}
    </div>
  );
}