//make a button/submit on the main page to access the trivia "using slider ui?"
//make an eventlistener for the "submit" for when the user types the cocktail name
//make "if" "else" statements for the correct image and incorrect image
// once clicked the user know if they are "correct" or "incorrect" 
//then it will move to the next slide  
//the score will be tracked and kept above the questions on all slides.



let drinks = [
     {
        'drink-url': "drinkimg/bloody.jpeg",
        "contents": ["1 and a half ounces of vodka", "3 ounces of tomato juice", "2 dashes of worcestershire", "3 dashes of tobasco", "garnish with celery"],
        'name-of-drink': 'Bloody Mary'
    },
    {
        'drink-url': "drinkimg/cosmo.jpeg",
        "contents": ["1 and a half ounces of vodka", "2 ounces of cranberry juice", "squeeze 2 lime wedges"],
        "name-of-drink": "cosmopolitan"
    },
    {
        'drink-url': "drinkimg/images.jpeg",
        "contents": ["2 ounces of whiskey", "2 ounces of homemade sour mix", "garnish with cherry"],
        "name-of-drink": "whiskey sour"
    }
]

let score = 0; 

// for (let i = 0; i < drinks.length; i++) this for loop is for the drinks variable for the object within

// drinks.forEach(drinksContent)

// function drinkContent(item)
// document.querySelectorAll("#question-list").textContent + item;

// let questionList = document.querySelectorAll("#question-list")
// for (let i = 0; i < questionList.length; i++) {

// }
let ingredients = document.querySelector(".ingredients")
let pass = 0
let drinkPics = document.querySelector(".cocktail-pic")
function play() {
    // drinks[0]["bloody-mary"]["drink-url"]
    console.log(drinks[0]["drink-url"])
    drinkPics.setAttribute("src", drinks[0]["drink-url"])
    drinks[0]["contents"].forEach(drinkContent => {
        ingredients.innerHTML += `<p> ${drinkContent} </p>`; 
    })

}

let playButton = document.querySelector(".play-button")
playButton.addEventListener("click", play)




