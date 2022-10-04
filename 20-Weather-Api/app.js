let lat,
  long,
  api,
  apikey = "1250c30e7025057655ffaea3ff929e53";
let cityName = document.querySelector(".city"),
  degreetop = document.querySelector(".degreetop");
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
          console.log(iconcode);
          cityName.innerText = data.name;
          degreetop.innerText = (data.main.temp - 273).toString().slice(0, 2);
        });
    });
  }
});

// "http://openweathermap.org/img/w/" + iconcode + ".png";
