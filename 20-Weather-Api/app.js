window.addEventListener("load", () => {
  let long;
  let lat;
  let apikeu = "1250c30e7025057655ffaea3ff929e53";
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      let api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=1250c30e7025057655ffaea3ff929e53`;
      fetch(api)
        .then((response) => response.json())
        .then((data) => {
          let temp = data.main.temp;
          let celc = temp - 273.15 + "C";
          console.log(celc.slice(0, 5) + "C");
        });
    });
  }
});
