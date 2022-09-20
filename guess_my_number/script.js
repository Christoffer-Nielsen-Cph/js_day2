// Guess my number JS file

// Find DOM elements
const guessButton = document.querySelector("button.check")
const guessInputBox = document.querySelector("input.guess")
const guessMessage = document.querySelector(".message")
const scoreText = document.querySelector(".score")
const highScoreText = document.querySelector(".highscore")
const correctNumber = document.querySelector(".number")
const againButton = document.querySelector("button.again")


// Helper functions

const nextNumber = (n) => Math.ceil((Math.random()*n));

// Declare variables
let secretNumber = nextNumber(20)
let score = 20;
let highScore = 0;



const evaluateGuess = () => {
    switch (true)
    {
        case guessInputBox.value > secretNumber:
            score--
            scoreText.innerText = score
            guessMessage.innerText = "Your guess is too high!!!"
            break;
        case guessInputBox.value < secretNumber:
            score--
            scoreText.innerText = score
            guessMessage.innerText = "Your guess is too low!!!"
            break;
        default:
            if(highScore < score){
                highScore = score;
            }
            highScoreText.innerText = highScore
            document.body.style.backgroundColor = "green"
            correctNumber.innerText = secretNumber
            guessMessage.innerText = "You guessed the number!!!"
    }

}

// Define events

againButton.addEventListener("click", () => {
    score = 20
    scoreText.innerText = 20
    document.body.style.backgroundColor = "rgb(34,34,34)"
    secretNumber = nextNumber(20)
    guessMessage.innerText = "Go again!!!"
    correctNumber.innerText = "?"
    guessInputBox.value = ""
})

guessButton.addEventListener("click",evaluateGuess)



