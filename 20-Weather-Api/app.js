let weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let lat,
  long,
  api,
  apikey = "1250c30e7025057655ffaea3ff929e53";
let cityName = document.querySelector(".city"),
  degreetop = document.querySelector(".degreetop"),
  showIcon = document.querySelector(".showIcon"),
  dayName = document.querySelectorAll(".dayname"),
  degree = document.querySelectorAll(".degree");
icons = document.querySelectorAll(".icon");

window.addEventListener("load", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      lat = position.coords.latitude;
      long = position.coords.longitude;

      api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=1250c30e7025057655ffaea3ff929e53`;

      fetch(api)
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          let iconcode = data.weather[0].icon;
          showIcon.src = `http://openweathermap.org/img/w/${iconcode}.png`;
          cityName.innerText = data.name;
          degreetop.innerText = (data.main.temp - 273).toString().slice(0, 2);
        });
    });
  }
  fetchdata("berlin", dayName[0], degree[0], icons[0]);
  // london
});

let searchcity = JSON.parse(localStorage.getItem("city") || []);

// https://api.openweathermap.org/data/2.5/weather?q=Nairobi&appid=1250c30e7025057655ffaea3ff929e53
// , day, weather, icon
function fetchdata(city, cityname, degree, icon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1250c30e7025057655ffaea3ff929e53`
  )
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      cityname.innerText = data.name;
      degree.innerText = (data.main.temp - 273).toString().slice(0, 2);
      icon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    });
}
