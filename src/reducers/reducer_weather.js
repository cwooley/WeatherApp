import FETCH_WEATHER from '../actions/index';

export default function (state = [], action){
  switch (action.type) {
    case "FETCH_WEATHER":
      console.log('hit fetchWeather block and setting state')
      return [action.payload.data, ...state]
    default:
  }
  return state;
}
