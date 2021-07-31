class Weather {
  contsructor(city, country) {
    this.apiKey = '0340c197587e2a590809de58f649cc8a';
    this.city = city;
    this.country = country;
  }

    // Fetch Weather from API
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}`);
                               // https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}
    const responseData = await response.json()
    console.log(responseData);

    return responseData;
  }

  // Change weather location
  changeLocation(city, country) {
    this.city = city
    this.country = country
  }
}

// https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}