let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let display = document.querySelector(".display");

btn.addEventListener("click", () => {
  display.innerHTML = "";

  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}`)
    .then((result) => result.json())
    .then((data) => {
      let meals = data["meals"];
      // console.log(meals);

      meals.forEach((element) => {
        console.log(element);

        let html = `<div>
        <h1>${element["strMeal"]} </h1>
        <img src=${element["strMealThumb"]}>
        <p><span>Category</span> : ${element["strCategory"]}</p>
        <p><span>Origin</span> : ${element["strArea"]}</p>
        <p><span>Description</span> : ${element["strInstructions"]}</p>
        <p><a href=${element["strYoutube"]}>Watch Video</a></p>
        </div>`;

        display.innerHTML += html;
      });
    })
    .catch((err) => alert("error"));
});