import { useState } from "react";
import "./index.css";
import search from "./assets/icons/search.svg";
import { useStateContext } from "./Context";
import { BackGroundLayout, WeatherCard, MiniCard } from "./components";

function App() {
  const [input, setInput] = useState(""); // Local state for input field
  const { weather, thisLocation, values, place, setPlace } = useStateContext();

  const handleSearch = () => {
    if (input.trim()) {
      setPlace(input); // Update context with input value
      setInput(""); // Clear input after pressing enter
    }
  };

  console.log(weather);

  return (
    <div className="w-full h-screen text-white px-8">
      {/* Navbar with logo and search bar */}
      <nav className="flex w-full justify-between items-center p-3">
        <h1 className="backdrop-blur-xs p-1 text-2xl font-bold text-white border-0 ">Weather App</h1>

        <div className="w-[15rem] overflow-hidden shadow-2xl rounded p-2 flex items-center gap-2 bg-white">
          <img src={search} alt="search" className="w-[1.5rem] h-[1.5rem]" />
          <input
            type="text"
            className="focus:outline-none w-full text-[#121212] text-lg bg-white"
            placeholder="Enter a city..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
        </div>
      </nav>

      {/* Background image based on weather conditions */}
      <BackGroundLayout />

      {/* Main weather forecast section */}
      {weather.temp !== undefined && ( // Render only after fetching weather
        <main className="w-full flex flex-wrap gap-8 py-4 px-[10%] items-center justify-center">
          <WeatherCard
            place={thisLocation}
            windspeed={weather.wspd}
            humidity={weather.humidity}
            temperature={weather.temp}
            heatIndex={weather.heatindex}
            iconString={weather.conditions}
            conditions={weather.conditions}
          />

          <div className="flex justify-center gap-8 flex-wrap w-[60%]">
            {values?.slice(1, 7).map((curr) => (
              <MiniCard
                key={curr.datetime}
                time={curr.datetime}
                temp={curr.temp}
                iconString={curr.conditions}
              />
            ))}
          </div>
        </main>
      )}
    </div>
  );
}

export default App;
