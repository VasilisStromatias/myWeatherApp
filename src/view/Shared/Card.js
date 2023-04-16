import React, {useEffect, useState} from "react";



function Card(){
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
const [data, setData] = useState([]);

useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=1ee16b2b7b1692c2baaa3d0534f0bb02`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
    }
    fetchData();
  }, [lat,long])

return(
    <div className="weather-wrapper">
        {(typeof data.main != 'undefined') ? (
            <p>
                {data.name}
                {data.main.temp}
            </p>
      ): (
        <div>not</div>
      )}
    </div>

);
}

export default Card;