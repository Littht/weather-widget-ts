import { useEffect, useState } from "react"
import WeatherForm from "./WeatherForm"
import WeatherMainInfo from "./WeatherMainInfo"

import styles from "./weatherApp.module.css"
import Loader from "./loader"


interface weatherInfo {
    name:string,
    country:string,
    img:string

}
const WeatherApp = () => {

    const [weather, setWeather] = useState(null)
    useEffect(() => {
      loadInfo( )
    }, [])
    useEffect(() => {
        document.title = `Weather | ${weather?.location.name}`
      }, [weather])
    
    const loadInfo = async (city:string = "london") =>{
        try {
            const req = await fetch(`${process.env.NEXT_PUBLIC_URL}&key=${process.env.NEXT_PUBLIC_KEY}&q=${city}`)
            const data = await req.json()

            setTimeout(() => {
                setWeather(data)
            },2000)
            
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    }

    const handleChangeCity = (city:string) =>{

        setWeather(null)
        if(city !== ""){
            loadInfo(city)
        }else{
            alert("ingrese locacion")
            loadInfo(city="london")
        }
    }
  return (
    <div className={styles.weatherContainer}>
        <WeatherForm onChangeCity={handleChangeCity} />
        {weather ? <WeatherMainInfo name={weather?.location.name} country={weather?.location.country} img={weather?.current.condition.icon} text={weather?.current.condition.text} temp={weather?.current.temp_c} lon={weather?.location.lon} lat={weather?.location.lat}/> : <Loader /> }

    </div>
  )
}

export default WeatherApp