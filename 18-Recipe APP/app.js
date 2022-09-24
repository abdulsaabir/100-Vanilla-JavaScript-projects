let searchinput = document.getElementById("searchin");
let searchBox = document.querySelector(".searchBox");
let logo = document.querySelector(".logo");
let mealid = document.getElementById("mealid");
let foottitle = document.getElementById("foodtitle");
let favicon = document.querySelector(".icon");
let favfood = document.querySelector(".fav-container");
(function () {
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
})();

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
  // console.log(newFavorites);
  favorites.push(newFavorites);
  // favorites.splice(5);
  localStorage.setItem("favfood", JSON.stringify(favorites));
  console.log(favorites);
  // if(favfood.childElementCount > 4)

  favfood.innerHTML += `  <ul class="fav-container">
    <!-- image 1 -->
    <li>
        <img src="${img}" alt="">
            <p> ${foodname}</p>
        </img>
    </li>`;
});
