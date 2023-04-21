import React,{useState, useEffect} from "react";

function WeatherForecast () {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);


  useEffect(() => {

      const fetchData = async () =>{
          navigator.geolocation.getCurrentPosition(function(position) {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
          });
    
            await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=metric&appid=8f81e9f0ce84e9bd3fe8f09a74cdd101`) //current position
          .then(res => res.json())
          .then(result => {
            setData(result)
            console.log(result);
          });
        }
        fetchData();
  }, [lat,long])



    return (  
        <>
        {(typeof data.city != 'undefined') ? (
            <div className="wf-wrapper">
                {data.list.map((item, key) => {
                    return (
                        <div className="wf-inner" id={key}>

                            <div className="wf-date">
                                <span>
                                    {item.dt_txt}
                                </span>
                            </div>

                            <div className="wf-temp">
                                <label>Temp: </label>
                                <span>
                                    {item.main.temp} &deg;C
                                </span>
                            </div>

                            <div className="wf-humidity">
                                <label>Humid: </label>
                                <span>{item.main.humidity}%</span>
                            </div>

                            <div className="wf-conditions">
                                <img src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} alt='icon'/>           
                                <span>{item.weather[0].main}</span>
                            </div>

                        </div>
                    )                                           
                })}
            </div>
        ): (
           <div>Not fetched correctly</div> 
        )}
        </>
    );
} 

export default WeatherForecast ;