const displayResult = document.querySelector("#result");
const diceChoice = document.querySelector("#dice");
const rollButton = document.querySelector("#roll");

// Create a random number based on diceChoice
function random(num) {
    let result = Math.floor(Math.random()*num)+1;
    return result;
}

// getting the values from dice choice
function getValues() {
    let num = Number(diceChoice.value);
    return num;
}

// roll Button
function roll() {
    random(num);
    displayResult.textContent = result;
    console.log("button works")
}

// event listener for roll Button and dice choice.
rollButton.addEventListener("click", roll);
diceChoice.addEventListener("change", getValues);

// Anzahl der würfe

// Ausgabe des ERgebnisses als summe und als Einzelwürfe