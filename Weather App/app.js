const storage = new Storage();

// get storage data
const weatherLocation = storage.getLocationData();

const ui = new UI();

// Init Weather Object
const weather = new Weather(weatherLocation.city);

// Get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

// Change City
document.getElementById("search-city-btn").addEventListener("click", (e) => {
  this.alert = document.getElementById("alert");

  const newCity = document.getElementById("search-city").value;

  if (newCity !== "") {
    weather.changeLocation(newCity);

    storage.setLocationData(newCity);

    getWeather();
  } else {
    this.alert.classList.toggle("visually-hidden");
    setTimeout(() => {
      this.alert.classList.toggle("visually-hidden");
    }, 4000);
  }
  e.preventDefault();
});

function getWeather() {
  weather
    .getWeather()
    .then((data) => ui.paint(data))
    .catch((err) => console.log(err));
}
