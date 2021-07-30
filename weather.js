class Weather {
  contsructor(city, state) {
    this.apiKey = 'b41dc92c7c9da50be399459ae11a2e27';
    this.city = city;
    this.state = state;
  }
}

// https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}