import React from "react";
import { useEffect, useState } from "react";
import { useDate } from "./../Utils/useDate";
import sun from "./../assets/icons/sun.png";
import cloud from "./../assets/icons/cloud.png";
import fog from "./../assets/icons/fog.png";
import rain from "./../assets/icons/rain.png";
import search from "./../assets/icons/search.svg";
import snow from "./../assets/icons/snow.png";
import storm from "./../assets/icons/storm.png";
import wind from "./../assets/icons/windy.png";
import "../index.css";
import PropTypes from "prop-types";

const WeatherCard = ({
  temperature,
  windspeed,
  humidity,
  place,
  heatIndex,
  iconString,
  condition,
}) => {
  const [icon, setIcon] = useState(sun);
  const { time } = useDate();

  useEffect(() => {
    if (iconString) {
      if (iconString.toLowerCase().includes("cloud") || iconString.toLowerCase().includes("overcast")) {
        setIcon(cloud);
      } else if (iconString.toLowerCase().includes("rain")) {
        setIcon(rain);
      } else if (iconString.toLowerCase().includes("clear")) {
        setIcon(sun);
      } else if (iconString.toLowerCase().includes("thunder")) {
        setIcon(storm);
      } else if (iconString.toLowerCase().includes("fog")) {
        setIcon(fog);
      } else if (iconString.toLowerCase().includes("snow")) {
        setIcon(snow);
      } else if (iconString.toLowerCase().includes("wind")) {
        setIcon(wind);
      }
    }
  }, [iconString]);

  
  return (
    <div className="w-[22rem] min-w-[22rem] h-[30rem] glassCard p-4">
      <div className="flex w-full just-center, items-center gap-4 mt-12 mb-4">
        <img src={icon} alt="weather_icon" />
        <p className="font-bold text-5xl flex justify-center items-center text-[#ffffff]">
          {temperature} &deg;C
        </p>
      </div>
      <div className="font-bold text-center text-xl">{place}</div>
      <div className="w-full flex justify-between items-center mt-4">
        <p className="flex-1 text-center p-2">
          {new Date().toLocaleDateString("en-US", {
            weekday: "short", // "Wed"
            month: "short", // "Feb"
            day: "numeric", // "19"
            year: "numeric", // "2025"
          })}
        </p>
        <p className="flex-1 text-center p-2">
          {new Date().toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true, // Display in AM/PM format
          })}
        </p>
      </div>

      <div className="w-full flex justify-between items-center mt-4 gap-4">
        <p className="flex-1 text-center p-2 font-bold bg-blue-600 shadow rounded-lg">
          Wind Speed <span className="font-normal block">{windspeed} km/h</span>
        </p>
        <p className="flex-1 text-center p-2 font-bold rounded-lg bg-green-600">
          Humidity{" "}
          <span className="font-normal block">{humidity} gm/m&#179;</span>
        </p>
      </div>
      <div className="w-full p-3 mt-4 flex justify-between items-center">
        <p className="font-semibold text-lg">Heat Index</p>
        <p className="text-lg">{heatIndex ? heatIndex : "N/A"}</p>
      </div>
      <hr className="bg-slate-600" />
      <div className="w-full p-4 flex justify-center items-center text-3xl font-semibold">
        {condition}
      </div>
    </div>
  );
};

WeatherCard.propTypes = {
  temperature: PropTypes.number,
  windspeed: PropTypes.number,
  humidity: PropTypes.number,
  place: PropTypes.string,
  heatIndex: PropTypes.number,
  iconString: PropTypes.string,
  condition: PropTypes.string,
};

export default WeatherCard;
