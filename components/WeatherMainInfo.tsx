import styles from "./weatherMainInfo.module.css"

interface weatherInfo {
    name:string,
    country:string,
    img:string,
    text:string,
    temp:number,
    lon: number,
    lat:number

}
const WeatherMainInfo = ({name,country,img,text,temp,lon,lat}:weatherInfo) => {
    return(
        <div className={styles.mainInfo}>
            <div className={styles.city}>{name}</div>
            <div className={styles.country}>{country}</div>
            <div className={styles.row}>
                <div>
                    <img
                        src={`http:${img}`}
                        width={64}
                        height={64}
                    />
                </div>
                <div >
                    <div className={styles.condition}>{text}</div>
                    <div className={styles.current}>{temp}º</div>
                </div>
            </div>
            <iframe className={styles.mapa}
            title= "mapa"
            src={`https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d39737.74392469577!2d${lon}322832057719654!3d${lat}204239659526!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sve!4v1666619228693!5m2!1ses!2sve`} 
            width="350" 
            height="350" 
            style={{border:0}} 
            loading="lazy" >
            </iframe>

           
        </div>
    )
}
    

export default WeatherMainInfo