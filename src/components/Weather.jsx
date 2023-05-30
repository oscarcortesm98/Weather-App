/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react"
import { kelvinToCelsius, kelvinTuFarenheit } from "../utils/temp"

const weatherIcons = {
  "01d" : "/images/ic-weather/01d-clear-sky.png",
  "01n" : "/images/ic-weather/01n-clear-sky.png",  
  "02d" : "/images/ic-weather/02d-few-clouds.png",  
  "02n" : "/images/ic-weather/02n-few-clouds.png",  
  "03d" : "/images/ic-weather/03d-scattered-clouds.png",    
  "03n" : "/images/ic-weather/03n-scattered-clouds.png",    
  "04d" : "/images/ic-weather/04d-broken-clouds.png",  
  "04n" : "/images/ic-weather/04n-broken-clouds.png",  
  "09d" : "/images/ic-weather/09d-shower-rain.png",  
  "09n" : "/images/ic-weather/09n-shower-rain.png",  
  "10d" : "/images/ic-weather/10d-rain.png",  
  "10n" : "/images/ic-weather/10n-rain.png",  
  "11d" : "/images/ic-weather/11d-thunderstorm.png",  
  "11n" : "/images/ic-weather/11n-thunderstorm.png",  
  "12d" : "/images/ic-weather/12d-snow.png",  
  "12n" : "/images/ic-weather/12n-snow.png",  
  "50d" : "/images/ic-weather/50d-mist.png",  
  "50n" : "/images/ic-weather/50n-mist.png",  
}

const Weather = ({ weatherInfo }) => {

  const [isCelcius, setIsCelcius] = useState(true)

  const handleChangeTemp = () => {
    setIsCelcius(!isCelcius)
  }

  return (

    <section className="relative text-center text-black grid gap-6 justify-items-center">

      <h2 className="font-bold text-2xl p-3">{weatherInfo.name}, {weatherInfo?.sys.country}</h2>

      <section className="grid gap-4 sm:grid-cols-[1fr_auto]">

        {/* <----- SECCION PRINCIPAL -----> */}

        <article className="bg-white/40 p-2 rounded-3xl grid grid-cols-2 items-center sm: w-70">
          <h3 className="col-span-2 capitalize">{weatherInfo?.weather[0].description}</h3>
          <span className="text-4xl p-3">{isCelcius ? kelvinToCelsius(weatherInfo?.main.temp) : kelvinTuFarenheit(weatherInfo?.main.temp)}</span>
          <div className="p-4">
            <img src={weatherIcons[weatherInfo?.weather[0].icon]} alt="" />
          </div>
        </article>

        {/* <----- FIN SECCION PRINCIPAL -----> */}

        {/* <----- SECCION SECUNDARIA -----> */}

        <section className="bg-white/40 p-2 py-3 rounded-2xl grid grid-cols-3 justify-items-center sm:grid-cols-1 sm:items-center">

          <article className="flex gap-2 h-10 items-center">
            <div>
              <img src="/images/ic-conditions/wind.png" alt="" />
            </div>
            <span>{weatherInfo?.wind.speed} m/s</span>
          </article>

          <article className="flex gap-2 h-10 items-center">
            <div>
              <img src="/images/ic-conditions/humidity.png" alt="" />
            </div>
            <span>{weatherInfo?.main.humidity}%</span>
          </article>

          <article className="flex gap-2 h-10 items-center">
            <div>
              <img src="/images/ic-conditions/pressure.png" alt="" />
            </div>
            <span>{weatherInfo?.main.pressure} hPa</span>
          </article>

        </section>

        {/* <----- FIN SECCION SECUNDARIA -----> */}

      </section>
      
      <div className="bg-blue-950/60 text-white rounded-2xl w-15 p-2 py-1">
      <button onClick={handleChangeTemp}>F° | C°</button>
      </div>

    </section>
  )
}

export default Weather