/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Weather from './components/Weather'
import Loader from './components/Loader'
import Input from './components/Input'

// const weatherImages = [ "bg01", "bg02", "bg03", "bg04", "bg09", "bg10", "bg11", "bg12", "bg50"]

const weatherImages = {
  '01d': "/images/bg-weather/clear-sky.jpg",
  '01n': "/images/bg-weather/clear-sky-night.jpg",
  '02d': "/images/bg-weather/few-clouds.jpg",
  '02n': "/images/bg-weather/few-clouds-night.jpg",
  '03d': "/images/bg-weather/scattered-clouds.jpg",
  '03n': "/images/bg-weather/scattered-clouds-night.jpg",
  '04d': "/images/bg-weather/broken-clouds.jpg",
  '04n': "/images/bg-weather/broken-clouds-night.jpg",
  '09d': "/images/bg-weather/shower-rain.jpg",
  '09n': "/images/bg-weather/shower-rain-night.jpg",
  '10d': "/images/bg-weather/rain.jpg",
  '10n': "/images/bg-weather/rain-night.jpeg",
  '11d': "/images/bg-weather/thunderstorm.jpg",
  '11n': "/images/bg-weather/thunderstorm-night.jpg",
  '12d': "/images/bg-weather/snow.jpg",
  '12n': "/images/bg-weather/snow-night.jpg",
  '50d': "/images/bg-weather/mist.jpg",
  '50n': "/images/bg-weather/mist.jpg",
}

function App() {

  const [weatherInfo, setWeatherInfo] = useState(null)

  const handleRequest = (event) => {
    event.preventDefault()
    const city = event.target.city.value
    const KEY = 'd62d592b176ce21736ee95698c916002'

    const CITY_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`

    axios.get(CITY_URL)
      .then(({ data }) => setWeatherInfo(data))
      .catch((error) => console.log(error))
  }

  const success = (pos) => {
    const lat = pos.coords.latitude
    const lon = pos.coords.longitude
    const API_KEY = "420e973f239dabbb6e34df87f41a001f"

    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`

    axios.get(URL)
      .then(({ data }) => setWeatherInfo(data))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  /* <=========================================================================> */

  return (

    <div>

      {/* <div className={`app ${weatherImage}`}> */}
      <main className="bg-black min-h-screen text-white flex justify-center items-center font-primary-font" >
        <div className="absolute w-full h-full">
          <img src={weatherImages[weatherInfo?.weather[0].icon]} className="relative object-cover w-full h-full" alt="" />
        </div>

      

        <section className='relative'>
          {weatherInfo ? (
            <>
            <Input handleRequest={handleRequest} />
            <Weather weatherInfo={weatherInfo} />
            </>
            
          ) : (

            <Loader />
          )}
        </section>

      </main>
    </div>

  )
}

export default App
