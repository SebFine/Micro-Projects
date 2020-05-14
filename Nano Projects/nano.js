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
const example4 = "aab bss jfjdkdkdj aj woief dsaiopap pioauf jfwan rnepipuqz fhspdah The five boxing wizards jump quickly."
const arr2 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function isPangram(sentence) {

    const input = sentence.toLowerCase();
    let res = 0;
    arr2.forEach(element => {
        if (input.includes(element)) {
            res += 1;
        }
    });
    if (res === arr2.length) {
        return true;
    } else {
        return false;
    }
};

// getCard challenge - get a random card
function pick(arr) {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

function getCard() {
    const valueArr = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "D", "K", "A"];
    const suitArr = ["clubs", "spades", "hearts", "diamonds"];

    const card = {
        value: pick(valueArr),
        suit: pick(suitArr),
    }
    return card;
}

// testing and understanding scope

function test() {
    let ding = 12;
    let ding2 = 43

    function test2 () {
        console.log(ding);

        function test3 () {
            console.log(ding2);
        };
        test3();
    }; 
    test2();
};