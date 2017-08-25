import axios from 'axios'
const APIKEY = '76bb2e591ec4c74431f443b066278aec';
const ROOTURL = `https://api.openweathermap.org/data/2.5/forecast?appid=${APIKEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const URL = `${ROOTURL}&q=${city},us`
  //returns promise which is passed into payload
  const request = axios.get(URL);
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
