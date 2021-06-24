import s from './Weather.module.css';

const Weather = ({weatherData}) => {

   const week = [
      `Sunday`,
      `Monday`,
      `Tuesday`,
      `Wednesday`,
      `Thursday`,
      `Friday`,
      `Saturday`,
   ]

   const month = [
      `January`, 
      `February`, 
      `March`, 
      `April`, 
      `May`, 
      `June`, 
      `July`, 
      `August`, 
      `September`, 
      `October`, 
      `November`, 
      `December`, 
   ]

   const date = new Date();

   const dayOfWeek = week[date.getDay()];
   const dd = date.getDate();
   const mm = month[date.getMonth()];
   const yy = date.getFullYear();
   const sunrise = new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN');
   const sunset = new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN');

   return (
      <div>
         <div className={s.wrapper}>
            <h1 className={s.heading}>{weatherData.name}</h1>
            <div className={`${s.description} ${s.first}`}>
               <p>{`${dayOfWeek}, ${mm} ${dd}, ${yy}`}</p>
               <p>{weatherData.weather[0].main}</p>
            </div>
            <div className={s.description}>
               <p>Temprature: {weatherData.main.temp} &deg;C</p>
               <p>Humidity: {weatherData.main.humidity} %</p>
            </div>     
            <div className={s.description}>
               <p>Sunrise: {sunrise}</p>
               <p>Sunset: {sunset}</p>
            </div>
         </div>
      </div>
   );
}

export default Weather;