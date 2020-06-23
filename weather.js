class Weather{
  constructor(){
    this.apiKey = 'b08b3b941a34891f0be81bc4ff7bfa8a';
    this.city = city;
    this.state = state;
  }

  // Fetch weather from api
  async getweather(){
    const responce = await fetch(`api.openweathermap.org/data/2.5/weather?q={${this.city}},{${this.state}}&appid={${this.apiKey}}`);

    const responceData = await responce.json();

    return responceData.current_opservation;
  }

  // change weather location
  changeLocation(city, state){
    this.city = city;
    this.state = state;
  }
}