/************ Fetch version  ************/

export default async function handler(request, response) {

  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}`;
  const { city } = request.query; // or .queryStringParameters ?
  const params = "&q=" + city + "&days=1&aqi=no&alerts=no";

  try {
    const res = await fetch(`${url}${params}`);
    if (res.ok) {
      const data = await res.json();
      console.log(data);
      return response.send(JSON.stringify(data));
    }
  } catch (error) {
    return console.log(error);
  }
};

/************ Axios version ************
 
const axios = require("axios");

export default async function handler(request, response) {

  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}`;
  const { city } = request.query; // or .queryStringParameters ?
  const params = "&q=" + city + "&days=1&aqi=no&alerts=no";

  try {
    const { data } = await axios.get(`${url}${params}`);
    return response.send(JSON.stringify(data));
  } catch (error) {
    const { status, statusText, headers, data } = error.response
    return {
      statusCode: status,
      body: JSON.stringify({status, statusText, headers, data})
    }
  }
};

 ***************************************/