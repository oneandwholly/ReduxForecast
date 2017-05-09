import axios form 'axios';

Const API_KEY = 'a4bf722123ddbb7a4a62c31726e790b8';
Const ROOT_ULR = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export default fetchWeather(city) {
  const url = `${ROOT_ULR}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
