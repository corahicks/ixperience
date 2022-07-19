class Movie {
  constructor(title, explanation, hint) {
    this.title = title;
    this.explanation = explanation;
    this.hint = hint;
  }
}

const movies = [
  {
    title: "Harry Potter",
    explanation: "This movie is about a dude with a stick...",
    hint: "It's Magic",
  },
  {
    title: "Just Go With It",
    explanation: "This movie is about people who go on holiday...",
    hint: "Adam, Drew and Jennifer",
  },
  {
    title: "Never Back Down",
    explanation:
      "This movie is about two guys with daddy issues who beat each other up...",
    hint: "Kanye West - Stronger",
  },
  {
    title: "Spongebob Squarepants",
    explanation: "This movie is about a rectangle...",
    hint: "It's a cartoon",
  },
  {
    title: "50 First Dates",
    explanation: "This movie is about a chick, she has the worst memory...",
    hint: "50 times...",
  },
  {
    title: "Cars",
    explanation: "In this movie, car go fast...",
    hint: "Kachow",
  },
  {
    title: "Spiderman",
    explanation:
      "In this movie this guy just does not pay his rent, no matter how many times the landlord asks...",
    hint: "Peta-Paka",
  },
  {
    title: "The Wolf of Wall Street",
    explanation:
      "In this movie there's like illegal stuff, lots of money, and a blonde chick...",
    hint: "HAWOOooooooooooo",
  },
  {
    title: "Inception",
    explanation: "In this movie everyone is like sleeping all the time...",
    hint: "Dreams...",
  },
  {
    title: "Peter Pan",
    explanation:
      "In this movie some kids die and an angel escorts them to heaven...",
    hint: "Always flying, cuz he neverlands",
  },
  {
    title: "The Lord Of The Rings",
    explanation: "In this movie some small guys go for a walk...",
    hint: "You will not vacate past this exact position",
  },
];

console.log(movies.length);
//returns the movie explanation
function getRandomMovie() {
  const randomIndex = Math.floor((Math.random() * movies.length) + 1);

  const chosen = movies[randomIndex];
  console.log(chosen);
  console.log(chosen.title)

  const movie = new Movie(chosen.title, chosen.explanation, chosen.hint);

  return movie;
}

const explanationSection = document.getElementById("explanation");
const playButton = document.getElementById("play-btn");

//event listener for play game button
playButton.addEventListener("click", (e) => {
  displayExplanation();
});

const movieChoice = getRandomMovie();

//function to display the explanation
function displayExplanation() {
  console.log(movieChoice.explanation);
  explanationDiv = document.createElement("div");
  explanationDiv.innerHTML = movieChoice.explanation;

  explanationDiv.classList.add("alert");
  explanationDiv.classList.add("alert-secondary");
  explanationDiv.classList.add("mt-2");

  explanationSection.append(explanationDiv);
}

const space = document.getElementById("space");
this.submitButton = document.getElementById("submit-btn");

//event listener for submit button. also collects user's input
submitButton.addEventListener("click", (e) => {
  const guessInput = document.getElementById("guess");
  const guess = guessInput.value;
  console.log("clicking");
  checkGuess(guess);
});

//function use to check the user's answer
function checkGuess(userGuess) {
  console.log("the guess " + userGuess);
  answerDiv = document.createElement("div");

  console.log(movieChoice.title);

  if (userGuess == movieChoice.title) {
    let correct = "You're Right! You are good at this! ";
    answerDiv.innerHTML = correct;
    answerDiv.classList.add("alert");
    answerDiv.classList.add("alert-success");
    answerDiv.classList.add("mt-2");
    space.append(answerDiv);
  } else {
    let incorrect = "Wrong! It is harder than it looks.";
    answerDiv.innerHTML = incorrect;
    answerDiv.classList.add("alert");
    answerDiv.classList.add("alert-danger");
    answerDiv.classList.add("mt-2");
    space.append(answerDiv);
  }
}

const hintSection = document.getElementById("hint-section");
const hintButton = document.getElementById("hint-btn");

//event listener for hint button
hintButton.addEventListener("click", (e) => {
  displayHint();
});

//function to display hint
function displayHint() {
  hintDiv = document.createElement("div");
  hintDiv.innerHTML = movieChoice.hint;

  hintDiv.classList.add("alert");
  hintDiv.classList.add("alert-secondary");
  hintDiv.classList.add("mt-2");

  hintSection.append(hintDiv);
}
