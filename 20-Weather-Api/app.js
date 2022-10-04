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
  } else {
    fetchdata("Mogadishu", dayName[0], degree[0], icons[0]);
  }
  // london
  fetchdata("london", dayName[0], degree[0], icons[0]);
  // berlin
  fetchdata("Doha", dayName[1], degree[1], icons[1]);
  fetchdata("Yakutsk", dayName[3], degree[3], icons[3]);
  fetchdata("new york", dayName[2], degree[2], icons[2]);
  fetchdata("riyad", dayName[4], degree[4], icons[4]);
});

function fetchdata(city, cityname, degree, icon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1250c30e7025057655ffaea3ff929e53`
  )
    .then((resp) => resp.json())
    .then((data) => {
      if (data.message === "city not found") {
        alert("City Not found");
      } else {
        cityname.innerText = data.name;
        let digitdegree = (data.main.temp - 273).toString().slice(0, 2);
        digitdegree = digitdegree.split(".").join("");
        degree.innerText = digitdegree;
        icon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      }
    });
}

document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("#loader").style.visibility = "visible";
  } else {
    document.querySelector("#loader").style.display = "none";
    document.querySelector("body").style.visibility = "visible";
  }
};
