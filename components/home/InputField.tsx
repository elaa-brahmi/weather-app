"use client"
import {MapPinIcon, Search} from 'lucide-react';
import { Input } from '../ui/input';
import { useState } from 'react';
import { Button } from '../ui/button';
export default function InputField() {
    const [city, setCity] = useState('');
    const fetchWeather = async () => {
        if (!city) return;
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`);
            if (!response.ok) {
                throw new Error('City not found');
            }
            const data = await response.json();
            console.log(data);
            // Handle the weather data as needed
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    }
  return (
    <div className=" flex mt-7 backdrop-blur-md rounded-xl bg-white/20 p-6 w-full max-w-2xl ">
        <div className="relative p-3 flex items-start w-full">
            <MapPinIcon className="absolute mt-3 ms-2 w-5 h-5 text-gray-500 mr-2 inline" />
            <Input
                onChange={(e) => setCity(e.target.value)}
                value={city}
                type="text"
                placeholder="Enter city name ..."
                className=" h-12 w-full pl-9 bg-white border-none focus:outline-none outline-none text-gray-800 placeholder-gray-500"></Input>
                <div className="ms-5 mt-1 backdrop-blur-md rounded-md  p-1">
                    <Button
                    className="border-none outline-none cursor-pointer text-white/40 hover:text-white/80 transition-colors duration-300"
                    onClick={fetchWeather}  
                    ><Search></Search></Button>
                </div>
        </div>
        <div></div>
    </div>
  )}