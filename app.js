// init weather object
const weather = new Weather('skive', 'DK');

// get weather on dom load
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather(){
weather.getWeather()
  .then(results => {
    console.log(results)
  })
  .catch(err => console.log(err));
}