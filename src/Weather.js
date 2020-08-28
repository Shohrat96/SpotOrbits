import React, { useState } from 'react';
import './style/weather.css';
import WeatherSingleForecast from './WeatherSingleForecast';
import Loader from './utils/loader/loader';

const Weather = (props) => {
    const [weather,setWeather] = useState([]);
    const [curState,setCurState]=useState('notloaded')
    const [placeName, setPlaceName]=useState('Baku, az');
    const APIKEY = '33e338e54e3f4458d65b039f4afb46a5';
    
    const fetchWeatherHandler=(e)=>{

        e.preventDefault();
        try {
            async function fetchData() {
                const apiData = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${placeName}&APPID=${APIKEY}`)
                  .then( res => {
                      if (res.status===404){
                        setCurState('placeNotFound');
                        return false
                      } else {
                        return res.json();
                      }
                    })
                  .then(data => { if (data) {
                    console.log('data:',data)
                    setWeather(data);
                    setCurState('loaded');
                  }
                }, (onreject)=>{console.log('rejected')});
              }
              fetchData()
        } catch (error) {
            alert('Error: ',error);
        }
 
    }
    return (
        <div className={'weatherSection'}>
            <form className={'weatherForm'} onSubmit={(e)=>{setCurState('loading'); fetchWeatherHandler(e)}}>
                <div className={'placeNameLabel'}>
                    Insert the place name.
                    <input className={'placeName'} placeholder='Baku'  type='text' name='text' onChange={(e)=>{setPlaceName(e.currentTarget.value)}}/>
                </div>
                <input id={'submit-btn'} type='submit' placeholder='Submit'></input>
            </form>
            {
                weather?.list? (
                    <div className={'output'} >
                    {   curState==='loading'? <Loader/>:
                        curState==='placeNotFound'? <div>Place Not Found</div>:
                        weather?.list?.map((item, index)=>{
                            return (
                            <WeatherSingleForecast  key={index} dateTime={item.dt_txt} cloud={item.clouds.all} />
                            )
                        })
                    }
                </div>
                ):null
            }

        </div>
    );
};

export default Weather;