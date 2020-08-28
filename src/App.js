import React from 'react';
import Container from './Container';
import './style/app.css';

function App() {

  /*async function fetchData() {
      //e.preventDefault()
    const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${APIKEY}`)
      .then( res => res.json())
      .then(data => console.log('data:',data));
      setWeather({
        data: apiData
      }
      )
  }*/
  /*useEffect(()=>{
    async function fetchData() {
      //e.preventDefault()
    const apiData = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Baku,az&APPID=${APIKEY}`)
      .then( res => res.json())
      .then(data => {
        setWeather((prevState)=>({
          ...prevState,
          weather:data
        }));
        console.log('data:',data);
      });
  }
  fetchData();
  },[]);*/
  return (
    <div className="App">
      <Container/>
    </div>
  );
}

export default App;
