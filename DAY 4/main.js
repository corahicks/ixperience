const numberInput = document.getElementById("num-input");
const submitButton = document.getElementById("submit-btn");
const cardBody = document.getElementById("card-body");

submitButton.addEventListener("click", (event) => {
  //getting the input value of the number submitted
  const number = numberInput.value;
  const resultDiv = document.createElement("div");

  //generates a random integer from 0 to 10
  let randomNumber = Math.floor(Math.random() * 11);
  if (number == randomNumber) {
    let correct = "Yay, you guess the correct Number!";
    resultDiv.innerHTML = correct;
    cardBody.append(resultDiv);
    resultDiv.classList.add("alert");
    resultDiv.classList.add("alert-success");
    resultDiv.classList.add("mt-4");
    console.log("yay, generated number: " + randomNumber);
  } else {
    let incorrect = "Nope, try again!";
    resultDiv.innerHTML = incorrect;
    cardBody.append(resultDiv);
    resultDiv.classList.add("alert");
    resultDiv.classList.add("alert-danger");
    resultDiv.classList.add("mt-4");
    console.log("this is generated number: " + randomNumber);
  }
});
