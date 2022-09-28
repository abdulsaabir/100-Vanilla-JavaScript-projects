let searchinput = document.getElementById("searchin");
let searchBox = document.querySelector(".searchBox");
let logo = document.querySelector(".logo");
let mealid = document.getElementById("mealid");
let foottitle = document.getElementById("foodtitle");
let favicon = document.querySelector(".icon");
let favfood = document.querySelector(".fav-container");
let getRandomFood = document.querySelector(".start");
window.addEventListener("DOMContentLoaded", () => {
  updateFav();
});

// when the page load add random food to the page
getRandomFood.addEventListener("click", () => {
  getRandom();
  favicon.classList.remove("fa-solid");
  favicon.classList.add("fa-regular");
});c  
//  function of get random food
function getRandom() {
  //  take data from public api
  fetch("https:www.themealdb.com/api/json/v1/1/random.php")
    .then((res) => res.json())
    .then((data) => displayFoods(data));
  // store into local array
  const displayFoods = (foods) => {
    foods.meals.forEach((meal) => {
      mealid.src = `${meal.strMealThumb}`;
      foottitle.textContent = meal.strMeal;
      // console.log(meal);
      let mealtitle = document.querySelector(".mealtitle");
      mealtitle.textContent = "Random Meal";
    });
  };
}

getRandom();
//  search box
searchBox.addEventListener("click", (e) => {
  e.preventDefault();
  searchinput.classList.toggle("showSearch");
});
// prepare local storage to add the favorites food
let favorites = JSON.parse(localStorage.getItem("favfood")) || [];

//  add to the favorites button
favicon.addEventListener("click", (e) => {
  // get the name and src of this favorited food throug traversing DOM
  let text = e.target.nextSibling.parentElement;
  let picture = e.target.parentElement.previousElementSibling;
  let img = picture.querySelector("#mealid");
  img = img.src;
  let foodname = text.innerText;

  // split the first 2 names only
  var names = foodname.split(" ");
  foodname = names[0] + " " + names[1];

  // foodname = foodname.join("");

  // declare object to store the new favorite food
  let newFavorites = {
    favName: foodname,
    favSrc: img,
  };

  // distanguish wethere it's add favorites or remove
  if (favicon.classList.contains("fa-regular")) {
    // add the fav to begginng and just save 4 fav foods only
    favorites.unshift(newFavorites);
    favorites.splice(4);
    localStorage.setItem("favfood", JSON.stringify(favorites));
    // fuction adds food to the local storage
    updateFav();
    // change the btn into favorite full
    favicon.classList.add("fa-solid");
    favicon.classList.remove("fa-regular");
  } else {
    // it means remove  then remove it
    favicon.classList.remove("fa-solid");
    favicon.classList.add("fa-regular");
    removefav();
  }
});

// function add favorite food to the local storage
function updateFav() {
  if (localStorage.getItem("favfood") === null) {
    console.log("empty");
  } else {
    favfood.innerHTML = "";
    let foods = JSON.parse(localStorage.getItem("favfood"));
    // console.log(foods);
    foods.forEach((food) => {
      favfood.innerHTML += `  <ul class="fav-container">
        <!-- image 1 -->
        <li>
            <img src="${food.favSrc}" alt="">
                <p> ${food.favName}</p>
            </img>
        </li>`;
    });
  }
}

// fuction remove favorite food from local storage
function removefav() {
  favorites = JSON.parse(localStorage.getItem("favfood"));
  favorites.shift();
  console.log(favorites);
  localStorage.setItem("favfood", JSON.stringify(favorites));

  // updateFav();
}
function use2namesonly(name) {
  let couonter = 0;
  for (let i = 0; i < name.length; i++) {
    if (name[i] === " ") {
      if (couonter === 1) {
        break;
      }
      couonter++;
    }
    return name[i];
    i++;
  }
  return name;
}
