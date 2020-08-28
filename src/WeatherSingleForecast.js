import React from 'react';
import './style/WeatherSingleForecast.css'
const WeatherSingleForecast = (props) => {
    const {dateTime, cloud}=props;

    return (
        <div className={'weatherSingleItem'} style={{display:'flex', flexDirection:'column',alignItems:'center'}}>
            <div> 
                {dateTime}UTC
            </div>
            <div> Cloud: {cloud}% </div>
        </div>
    );
};

export default WeatherSingleForecast;