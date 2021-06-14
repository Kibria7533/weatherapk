import React from "react";
import { useState } from "react";
import axios from 'axios'
function App() {
const [place,setPlace]=useState("Dhaka")
const [temp,setTemp]=useState("");
const [city,setCity]=useState("");
const [country,setCountry]=useState("");
const [weather,setWeather]=useState("");
const [weatherdes,setWeatherdes]=useState("");
const [img,se]=useState("");


const fetchweater=async(e)=>{
  if(e.key=='Enter'){
   await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=32d462d77842e2ab135ad20a99e208b1`).then(res=>{
      console.log(res.data)
      var tem=273-(res.data.main.temp-32) / 1.8;
      setTemp(Math.round(tem))
      setCity(res.data.name)
      setCountry(res.data.sys.country)
      setWeather(res.data.weather[0].main)
      setWeatherdes(res.data.weather[0].description)
      se(res.data.weather[0].icon)

    }).catch(err=>{
      console.log(err)
    })

  }

}

  return (
    <div className="container">
      <div  style={{justifyContent: 'center', textAlign: 'center' ,marginTop:"30px" }}>
        <input  onChange={(e)=>setPlace(e.target.value)} onKeyPress={fetchweater}/>
        <br/>
        <hr/>
<button>Check</button>
       


      </div>
      
  <div className="row">
    
    <div className="col">
      <div className="weather-card one">
        <div className="top">
          <div className="wrapper">
         
            <h1 className="heading">{weather}</h1>
            <h2>{weatherdes}</h2>
            <img src={`https://openweathermap.org/img/wn/${img}@2x.png`}/>
            <h3 className="location">{city}, {country}</h3>
            <p className="temp">
              <span className="temp-value">{temp}</span>
              <span className="deg">0</span>
              <a href="javascript:;"><span className="temp-type">C</span></a>
            </p>
          </div>
        </div>
      
      </div>
    </div>
    
  </div>
</div>

  );
}

export default App;
