"use client"
import React, { useState,useEffect } from 'react';
export default function WeatherCard({weatherProp}:{weatherProp?: any}) {
    console.log("weatherProp from weather card",weatherProp);
    const [loaded,setLoaded] = useState(false);
    useEffect(() => {
        if (!weatherProp || Object.keys(weatherProp).length === 0 || Object.values(weatherProp).some(val => val === "")) {
            setLoaded(false);
        } else {
            setLoaded(true);
        }
    }, [weatherProp]);

  return (
    <div className="mb-7 mt-7 backdrop-blur-md rounded-xl bg-white/20 p-6 w-full ">
        {!loaded ? (
            <div className="flex flex-col justify-center items-center p-3 text-white/70 space-y-3">
                <div>Enter a city name above to get started with real-time weather information</div>
                <div>Try searching for cities like "Tunisia", "New York", or "Tokyo"</div>
            </div>
        ):
      (
      <><h2 className="text-xl font-semibold mb-4 text-white">🌤️Weather Forecast</h2>
        <img src={weatherProp.icon} alt="Weather Icon" className="w-16 h-16" />

      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-white/70"><span className="font-semibold text-white">🌍Location:</span> {weatherProp.city}</p>
          <p className="text-white/70"><span  className="font-semibold text-white">🌡️Temperature:</span> {weatherProp.temperature}</p>
          <p className="text-white/70"><span  className="font-semibold text-white">💧Humidity:</span> {weatherProp.humidity}</p>
          <p className="text-white/70"><span  className="font-semibold text-white">🌬️Wind speed:</span> {weatherProp.windSpeed}</p>
      <p className="text-white/70"><span  className="font-semibold text-white">📝Description: </span>{weatherProp.description}</p>

</div>
        </div>
      </>)}
    </div>
  );
}