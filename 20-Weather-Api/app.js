let lat,
  long,
  api,
  apikey = "1250c30e7025057655ffaea3ff929e53";
function showPosition(position) {
  alert(`${position.coords.longitude} - ${position.coords.latitude}`);
}
window.addEventListener("load", () => {
  navigator.geolocation.getCurrentPosition(this.showPosition);
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      lat = position.coords.latitude;
      long = position.coords.longitude;
    });
    api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=1250c30e7025057655ffaea3ff929e53`;

    console.log(api);
  }
});
