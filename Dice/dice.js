const displayResultSum = document.querySelector("#result-sum");
const displayResultArr = document.querySelector("#result-arr");
const diceChoice = document.querySelector("#dice");
const rollButton = document.querySelector("#roll");
const throwsBox = document.querySelector("#throws");

// getting the values from dice choice
function getValues() {
    sides = Number(diceChoice.value);
    return sides;
};

function getThrows() {
    throws = Number(throwsBox.value); // froms always return strings
    return throws;
};

// Create a random number based on diceChoice
function randomSide(sides, throws) {
    const arr = [];
    for (let i = 1; i <= throws; i++) {
        random = Math.floor(Math.random() * sides) + 1;
        arr.push(random);
    }
    return arr;
};

// find out the sum of the array items
function add(arr) {
    for (const el of arr) {
        sum += arr[i];
    }
    return sum;
};

// roll Button
function roll() {
    getValues();
    getThrows();
    const arr = randomSide(sides, throws);
    const sum = add(arr);
    displayResultSum.textContent = sum;
    displayResultSum.textContent = arr.join(", ");
};

// event listener for roll Button and dice choice.
rollButton.addEventListener("click", roll);




