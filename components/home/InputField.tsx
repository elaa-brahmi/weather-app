"use client"
import {MapPinIcon, Search} from 'lucide-react';
import { Input } from '../ui/input';
import { useState } from 'react';
import { Button } from '../ui/button';
import WeatherCard from './WeatherCard';
import { cn } from '@/lib/utils';
export default function InputField() {
    const [Thecity, setCity] = useState('');
     const initialWeather = {
        city: '',
        temperature: '',
        description: '',
        condition: '',
        icon: '',
        humidity: '',
        windSpeed: '',
    };
    const [Theweather, setWeather] = useState(initialWeather);
    const fetchWeather = async () => {
        if (!Thecity) return;
        try {
            console.log(Thecity);
            const apiKey = process.env.NEXT_PUBLIC_API_KEY|| '' ;
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Thecity}&appid=${apiKey}&units=metric`);
            if (!response.ok) {
                throw new Error('City not found');
            }
            const data = await response.json();
            console.log(data);
            setWeather({
                city: data.name,
                temperature: data.main.temp,
                description: data.weather[0].description,
                condition: data.weather[0].description,
                icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
            });
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    }
  return (
    <>
        <div className=" flex mt-7 backdrop-blur-md rounded-xl bg-white/20 p-6 w-full  ">
            <div className="relative p-3 flex items-start w-full">
                <MapPinIcon className="absolute mt-3 ms-2 w-5 h-5 text-gray-500 mr-2 inline" />
                <Input
                    onChange={(e) => setCity(e.target.value)}
                    value={Thecity}
                    type="text"
                    placeholder="Enter city name ..."
                    className=" h-12 w-full pl-9 bg-white border-none focus:border-none active:border-none focus:outline-none outline-none text-gray-800 placeholder-gray-500"></Input>
                    <div className="ms-5 mt-1 backdrop-blur-md rounded-md  p-1">
                        <Button
                        className={cn("border-none outline-none cursor-pointer text-white/40 hover:text-white/80 transition-colors duration-300",Thecity? "":"cursor-not-allowed ")}
                        onClick={fetchWeather}  
                        ><Search></Search></Button>
                    </div>
            </div>
        
        </div>
        <div>
            <WeatherCard weatherProp={Theweather}></WeatherCard>
       
        </div>
    </>
  )}