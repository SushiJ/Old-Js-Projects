class Weather {
  constructor(city) {
    this.apiKey = "Your Api Key";
    this.city = city;
  }

  // Fetch Weather from API
  async getWeather() {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.city}&aqi=no`
    );

    const responseData = await response.json();

    return responseData;
  }

  //   Change Location
  changeLocation(city) {
    this.city = city;
  }
}
