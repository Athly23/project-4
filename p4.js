//make a button/submit on the main page to access the trivia "using slider ui?"
//make an eventlistener for the "submit" for when the user types the cocktail name
//make "if" "else" statements for the correct image and incorrect image
// once clicked the user know if they are "correct" or "incorrect"
//then it will move to the next slide
//the score will be tracked and kept above the questions on all slides.

let drinks = [
  {
    "drink-url": "drinkimg/bloody.jpeg",
    contents: [
      "1 and a half ounces of vodka",
      "3 ounces of tomato juice",
      "2 dashes of worcestershire",
      "3 dashes of tobasco",
      "Garnish with celery"
    ],
    "name-of-drink": "Bloody Mary"
  },
  {
    "drink-url": "drinkimg/cosmo.jpeg",
    contents: [
      "1 and a half ounces of vodka",
      "2 ounces of cranberry juice",
      "Squeeze 2 lime wedges"
    ],
    "name-of-drink": "cosmopolitan"
  },
  {
    "drink-url": "drinkimg/images.jpeg",
    contents: [
      "2 ounces of whiskey",
      "2 ounces of homemade sour mix",
      "Garnish with cherry"
    ],
    "name-of-drink": "whiskey sour"
  },
  {
    "drink-url": "drinkimg/margarita.jpeg",
    contents: [
      "2 ounces of tequila",
      "1 ounces of cointreau",
      "1 ounces of lime juice",
      "Salted rim",
      "Garnish with lime wedge"
    ],
    "name-of-drink": "Margarita"
  },
  {
    "drink-url": "drinkimg/gimlet.jpeg",
    contents: [
      "2 ounces of vodka or gin",
      "1/2 ounces of simple syrup",
      "1/2 ounces of fresh lime juice",
      "Garnish with lime twist"
    ],
    "name-of-drink": "Gimlet"
  },
  {
    "drink-url": "drinkimg/saltydog.jpeg",
    contents: [
      "2 ounces of vodka",
      "4 ounces of grapefruit juice",
      "Salted rim",
      "Garnish with grapefruit twist"
    ],
    "name-of-drink": "Salty Dog"
  },
  {
    "drink-url": "drinkimg/nysour.jpeg",
    contents: [
      "2 ounces of Rye whiskey or bourbon",
      "3/4 ounces of simple syrup",
      "1 ounces of lime juice",
      "1/2 ounces of Red wine layered on top",
      "Garnish with Luxardo cherries"
    ],
    "name-of-drink": "New York Sour"
  },
  {
    "drink-url": "drinkimg/manhattan.jpeg",
    contents: [
      "6 ounces of Rye whiskey",
      "3 ounces of Sweet Vermouth",
      "2 dashes of Angostura bitters",
      "Garnish with cherry"
    ],
    "name-of-drink": "Manhattan"
  },
  {
    "drink-url": "drinkimg/paloma.jpeg",
    contents: [
      "2 ounces of Tequila",
      "1/2 ounces of fresh lime juice",
      "Top with grapefruit soda",
      "garnish with a dried grapefruit slice"
    ],
    "name-of-drink": "Paloma"
  },
  {
    "drink-url": "drinkimg/sidecar.jpeg",
    contents: [
      "2 ounces of VSOP",
      "1 ounces of Grand Marnier",
      "3/4 ounces of fresh lemon juice",
      "Sugar rim"
    ],
    "name-of-drink": "Sidecar"
  }
];

let score = 0;

// for (let i = 0; i < drinks.length; i++) this for loop is for the drinks variable for the object within

// drinks.forEach(drinksContent)

// function drinkContent(item)
// document.querySelectorAll("#question-list").textContent + item;

// let questionList = document.querySelectorAll("#question-list")
// for (let i = 0; i < questionList.length; i++) {

// }
let ingredients = document.querySelector(".ingredients");
let pass = 0;
let drinkPics = document.querySelector(".cocktail-pic");
let submitButton = document.querySelector("#form");
let frontPage = document.querySelector(".front-page");
let container = document.querySelector(".question-container");

let roundCount = 0;
let nextButton = document.querySelector(".next");
function newQuestion() {
  roundCount += 1;
  drinks[roundCount]["drink-url"];
  drinkPics.setAttribute("src", drinks[roundCount]["drink-url"]);
  ingredients.empty();
  drinks[roundCount]["contents"].forEach(drinkContent => {
    ingredients.innerHTML += `<p> ${drinkContent} </p>`;
  });
}
nextButton.addEventListener("click", newQuestion);

function play(e) {
  e.preventDefault();
  drinks[roundCount]["drink-url"];
  // console.log(drinks[0]["drink-url"])
  drinkPics.setAttribute("src", drinks[roundCount]["drink-url"]);
  drinks[roundCount]["contents"].forEach(drinkContent => {
    ingredients.innerHTML += `<p> ${drinkContent} </p>`;
  });
  frontPage.classList.toggle("hidden");
  submitButton.classList.toggle("hidden");
  container.classList.toggle("hidden");
  nextButton.classList.toggle("hidden");
}

function handleSubmit(e) {
  e.preventDefault();
}

let playButton = document.querySelector(".play-button");
playButton.addEventListener("click", play);

submitButton.addEventListener("submit", handleSubmit);
