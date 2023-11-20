const sumAll = function(numOne, numTwo) {
    let greaterNum = 0;
    let lessorNum = 0;
    if ((numOne < 0) || (numTwo < 0) || 
    (Number.isInteger(numOne) === false) || (Number.isInteger(numTwo) === false)){
        return "ERROR";
    } else if (numOne > numTwo) {
        greaterNum = numOne;
        lessorNum = numTwo;
    } else {
        greaterNum = numTwo;
        lessorNum = numOne;
    }

    let totalSum = 0;

    for (let i = lessorNum; i <= greaterNum; i++) {
        totalSum += i;
    }

    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
