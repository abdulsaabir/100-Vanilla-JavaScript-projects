let lat,
  long,
  api,
  apikey = "1250c30e7025057655ffaea3ff929e53";
let cityName = document.querySelector(".city");
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
          cityName.innerText = data.name;
        });
    });
  }
});
