class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.temperature = document.getElementById("w-temp");
    this.icon = document.getElementById("w-icon");
    this.details = document.getElementById("w-details");
    this.humidity = document.getElementById("w-humidity");
    this.feelsLike = document.getElementById("w-feels-like");
    this.wind = document.getElementById("w-wind");
    this.uv = document.getElementById("w-uv");
    this.alert = document.getElementById("alert");
  }

  paint(weather) {
    this.location.textContent = weather.location.name;
    this.desc.textContent = weather.current.condition.text;
    this.temperature.textContent = `${weather.current.temp_c} °C`;
    this.icon.setAttribute("src", weather.current.condition.icon);
    this.humidity.textContent = `Relative Humidity: ${weather.current.humidity}`;
    this.feelsLike.textContent = `Feels Like: ${weather.current.feelslike_c} °C`;
    this.wind.textContent = `Wind: ${weather.current.wind_kph} ${weather.current.wind_dir}`;
    this.uv.textContent = `UV index: ${weather.current.uv}`;
  }

  alert() {
    this.alert.innerHTML = "<strong>Oh snap!</strong>";
  }
}
