import React, {useEffect, useState} from "react";


function CurrentWeather(){
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}`;

useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      // CURRENT WEATHER
      await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=1ee16b2b7b1692c2baaa3d0534f0bb02`) //current position
      // await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=38.0398760&lon=23.7392700&units=metric&appid=1ee16b2b7b1692c2baaa3d0534f0bb02`) //nea philadelphia
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
    }
    fetchData();
  }, [lat,long])

return(
    <div className="wa-wrapper">
        {(typeof data.main != 'undefined') ? (         
            <div className="wa-inner">
            <div className="wa-city">

              <span><strong>{data.name} </strong></span><span>, {data.sys.country}</span>
            <div className="wa-date">
              {date}
            </div>
            
            </div>

            <div className="wa-conditions">
             <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt='icon'/>           
            <span>{data.weather[0].main}</span>
            </div>

          <div className="wa-temp-hum"> 
            <div className="wa-temperature">
            <label>Temp: </label>
            <span>{data.main.temp} &deg;C</span>
            </div>

            <div className="wa-humidity">
              <label>Humid: </label>
              <span>{data.main.humidity}%</span>
            </div>
          </div>
            

            </div>
      ): (
        <div>Not fetched correctly</div>
      )}
    </div>

);
}

export default CurrentWeather;