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
  degree = document.querySelectorAll(".degree"),
  icons = document.querySelectorAll(".icon"),
  input = document.querySelector(".input");

// window.addEventListener("DOMContentLoaded", () => {
//   // let loader = document.querySelector(".
//   fetchdata("", cityName, degreetop, showIcon);
// });

let searchbtn = document.getElementById("search");
searchbtn.addEventListener("click", (e) => {
  e.preventDefault();
  let value = input.value;
  if (value) {
    fetchdata(value, cityName, degreetop, showIcon);
  }
});

window.onload = () => {
  let loader = document.querySelector(".loader");
  loader.style.display = "block";
  setTimeout(() => {
    loader.style.display = "none";
  }, 2000);
};

window.addEventListener("DOMContentLoaded", () => {
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
  // london
  fetchdata("london", dayName[0], degree[0], icons[0]);
  // berlin
  fetchdata("Doha", dayName[1], degree[1], icons[1]);
  // moscow
  fetchdata("Yakutsk", dayName[3], degree[3], icons[3]);

  fetchdata("new york", dayName[2], degree[2], icons[2]);
  //
  fetchdata("riyad", dayName[4], degree[4], icons[4]);
});

// let searchcity = JSON.parse(localStorage.getItem("city") || []);

// https://api.openweathermap.org/data/2.5/weather?q=Nairobi&appid=1250c30e7025057655ffaea3ff929e53
// , day, weather, icon
function fetchdata(city, cityname, degree, icon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1250c30e7025057655ffaea3ff929e53`
  )
    .then((resp) => resp.json())
    .then((data) => {
      if (data.message === "city not found") {
        alert("City Not found");
      } else {
        // console.log(data);
        cityname.innerText = data.name;
        let digitdegree = (data.main.temp - 273).toString().slice(0, 2);
        digitdegree = digitdegree.split(".").join("");
        degree.innerText = digitdegree;
        icon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      }
    });
}

// let settings={backgroundColor:"#2774ab",filterBrightness:2,timeOnScreen:100}
// ,u=document.querySelector("*"),s=document.createElement("style"),a=document.createElement("div"),m="http://www.w3.org/2000/svg",g=document.createElementNS(m,"svg"),c=document.createElementNS(m,"circle");document.head.appendChild(s),s.innerHTML="@keyframes swell{to{transform:rotate(360deg)}}",a.setAttribute("style","background-color:"+settings.backgroundColor+";color:"+settings.backgroundColor+";display:flex;align-items:center;justify-content:center;position:fixed;top:0;height:100vh;width:100vw;z-index:2147483647"),document.body.prepend(a),g.setAttribute("style","height:50px;filter:brightness("+settings.filterBrightness+");animation:.3s swell infinite linear"),g.setAttribute("viewBox","0 0 100 100"),a.prepend(g),c.setAttribute("cx","50"),c.setAttribute("cy","50"),c.setAttribute("r","35"),c.setAttribute("fill","none"),c.setAttribute("stroke","currentColor"),c.setAttribute("stroke-dasharray","165 57"),c.setAttribute("stroke-width","10"),g.prepend(c),u.style.pointerEvents="none",u.style.userSelect="none",u.style.cursor="wait",window.onload=(()=>{setTimeout(()=>{u.style.pointerEvents="",u.style.userSelect="",u.style.cursor="",a.remove()},settings.timeOnScreen)});
