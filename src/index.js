import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CurrentWeather from './view/Shared/CurrentWeather';
import WeatherForecast from './view/Shared/WeatherForecast';
import reportWebVitals from './reportWebVitals';
import '../src/view/styles/sass/_main.scss';
import '../src/view/styles/sass/_global.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CurrentWeather />
    <WeatherForecast />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
