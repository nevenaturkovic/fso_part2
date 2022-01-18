import React, { useState } from "react"
import axios from "axios"
const api_key = process.env.REACT_APP_API_KEY

const degToDir = (deg) => {
  const directions = [
    "N",
    "NNE",
    "NE",
    "NEE",
    "E",
    "SEE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "SWW",
    "W",
    "NWW",
    "NW",
    "NNW",
  ]
  const fraction = 360 / directions.length
  const index = ((deg + fraction / 2) % 360) / fraction

  return directions[Math.floor(index)]
}

const Weather = ({ capital, countryCode }) => {
  const apiUrl =
    "http://api.openweathermap.org/data/2.5/weather?" +
    `q=${capital},${countryCode}&appid=${api_key}`
  const [temp, setTemp] = useState("")
  const [icon, setIcon] = useState("")
  const [wind, setWind] = useState("")

  axios.get(apiUrl).then((response) => {
    const tempK = response.data.main.temp
    const iconCode = response.data.weather[0].icon
    const windSpeed = response.data.wind.speed
    const windDegree = response.data.wind.deg
    setTemp((tempK - 273).toFixed(1))
    setIcon(`http://openweathermap.org/img/wn/${iconCode}@2x.png`)
    setWind(
      `${((windSpeed * 36) / 10).toFixed(2)} kph direction ${degToDir(
        windDegree
      )}`
    )
  })

  return (
    <div>
      <h3>Weather in {capital}</h3>
      <strong>temperature:</strong> {temp} Celsius <br />
      <img src={icon} /> <br />
      <strong>wind:</strong> {wind}
    </div>
  )
}

export default Weather
