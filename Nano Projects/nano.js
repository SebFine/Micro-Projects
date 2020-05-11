// average value of an array
const arr = [75, 76, 80, 95, 100];

function averageValueArr(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    let avg = sum / arr.length;
    return avg;
};

// check if sentence is a pangram
const example1 = "The five boxing wizards jump quickly.";
const example2 = "The five boxing wizards jump quick.";
const example3 = "The five boxing wizards jump quickly.";
const alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function isPangram(sentence) {

    alpha.forEach(element => {
        if (sentence.toLowerCase().includes(element)) {
            return true;
        } else {
            return false;
        }
    });
};