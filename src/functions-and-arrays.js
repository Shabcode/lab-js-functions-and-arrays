// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(n1,n2) {
    if(n1>n2) {
        return n1;
    } else if(n2>n1) {
        return n2;
    } else {
        return n1;
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(wordArray) {
    let previousWord = "";
    if(!wordArray || wordArray.length === 0) {
        return null;
    }
    for (i in wordArray) {
        if (wordArray[i].length>previousWord.length) {
            previousWord = wordArray[i];
        }
    }
    return previousWord;
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numArr) {
    let sum = 0;
    for (i in numArr) {
        sum += numArr[i];
    }
    return sum;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(avgArr) {
    if (!avgArr || avgArr.length === 0) {
        return 0;
    }
    return sumNumbers(avgArr) / avgArr.length;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(inputArray, filterWord) {
    if(!inputArray || inputArray.length===0) {
        return null;
    }
    for (i in inputArray) {
        if (inputArray[i]===filterWord) {
            return true;
        }
    }
    return false;
}

