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
          console.log(data);

          let iconcode = data.weather[0].icon;
          showIcon.src = `http://openweathermap.org/img/w/${iconcode}.png`;
          cityName.innerText = data.name;
          degreetop.innerText = (data.main.temp - 273).toString().slice(0, 2);
        });
    });
  }
});

// let searchcity = JSON.parse(localStorage.getItem("city") || []);

https://api.openweathermap.org/data/2.5/weather?q=Nairobi&appid=1250c30e7025057655ffaea3ff929e53
