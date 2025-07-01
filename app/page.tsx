"use client"
import Image from "next/image";
import styles from "./page.module.css";
import WeatherCard from "@/components/home/WeatherCard";
import InputField from "@/components/home/InputField";

export default function Home() {
  return (
   <div className="flex flex-col items-center min-h-screen bg-gradient-to-br mx-auto from-blue-400 via-blue-500 to-blue-600 transition-all duration-1000 ease-in-out bg-black/10 backdrop-blur-sm">
    <div className="mt-12 mb-8 text-center">
      <h1 className="font-bold md:text-6xl text-2xl text-white ">WeatherNow</h1>
    </div>
    <div className="text-white font-semibold text-lg">Get real-time weather information for any city</div>
    <div className=" w-full mx-4 max-w-2xl">
    <InputField/>
    </div>
   </div>
  );
}
