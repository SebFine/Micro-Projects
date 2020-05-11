// general button and key selectors
const submitBtn = document.querySelector("#submitBtn");
const key = document.querySelectorAll(".key");

// function for checking the validation of input
function isValidPassword(password, username) {
    
    if (password.length < 8 || 
        password.includes(" ") || 
        password.includes(username)
    ) {
        return false;
    }
    return true;
};

// changes based on the validation result.
function check() {
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
    const info = document.querySelector("#info");

    if (isValidPassword(password, username)) {
        key.forEach(element => {
            element.classList.add("green");
            element.classList.remove("red");
        })
        info.classList.add("none");
    } else {
        key.forEach(element => {
            element.classList.add("red");
            element.classList.remove("green");
        })
        info.classList.remove("none");
    }
};

submitBtn.addEventListener("click", check);

// Enter key functionality
key.forEach(element => {
    element.addEventListener("keyup", function (event) {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            submitBtn.click();
        }
    });
});