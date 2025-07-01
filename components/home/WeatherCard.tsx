export default function WeatherCard() {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Weather Forecast</h2>
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-gray-600">Location: New York</p>
          <p className="text-gray-600">Temperature: 75°F</p>
        </div>
        <img src="/weather-icon.png" alt="Weather Icon" className="w-16 h-16" />
      </div>
      <p className="text-gray-600">Condition: Sunny</p>
    </div>
  );
}