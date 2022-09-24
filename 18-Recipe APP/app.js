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

getRandomFood.addEventListener("click", () => {
  getRandom();
  favicon.style.display = "inline-block";
});
function getRandom() {
  fetch("https:www.themealdb.com/api/json/v1/1/random.php")
    .then((res) => res.json())
    .then((data) => displayFoods(data));

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

searchBox.addEventListener("click", (e) => {
  e.preventDefault();
  searchinput.classList.toggle("showSearch");
});
let favorites = JSON.parse(localStorage.getItem("favfood")) || [];

favicon.addEventListener("click", (e) => {
  let text = e.target.nextSibling.parentElement;
  let picture = e.target.parentElement.previousElementSibling;
  let img = picture.querySelector("#mealid");
  img = img.src;
  let foodname = text.textContent;
  let newFavorites = {
    favName: foodname,
    favSrc: img,
  };

  favorites.unshift(newFavorites);
  favorites.splice(4);
  localStorage.setItem("favfood", JSON.stringify(favorites));
  // console.log(favorites);

  <i class="fa-solid fa-heart"></i>
  <i class="fa-regular icon fa-heart"></i>

  // updating favorites food

  updateFav();
  favicon.style.color = "red";

  setTimeout(() => {
    favicon.style.color = "black";
  }, 300);
  setTimeout(() => {
    favicon.style.display = "none";
  }, 400);
});

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
