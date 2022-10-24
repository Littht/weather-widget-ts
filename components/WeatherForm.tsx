import { ChangeEvent, FormEvent, useState } from "react"

import styles from "./weatherForm.module.css"

type Props = {
    onChangeCity:(city:string) => void
}

const WeatherForm = ({onChangeCity}:Props) => {

    const [city, setCity] = useState('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
        if(e.target.value != ""){
            setCity(e.target.value)
        }
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        onChangeCity(city)
    }
  return (
    <>
        <form action="" onSubmit={handleSubmit} className={styles.container}>
            <input className={styles.input} type="text" onChange={handleChange}/>
        </form>
    </>
  )
}

export default WeatherForm