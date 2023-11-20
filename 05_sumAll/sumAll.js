const sumAll = function(numOne, numTwo) {
    if ((numOne < 0) || (numTwo < 0) || 
    (Number.isInteger(numOne) === false) || (Number.isInteger(numTwo) === false)){
        return "ERROR";
    } else if (numOne > numTwo) {
        let greaterNum = numOne;
        let lessorNum = numTwo;
    } else {
        let greaterNum = numTwo;
        let lessorNum = numOne;
    }

    let greaterNum = 0;
    let lessorNum = 0;
    let totalSum = 0;

    for (let i = lessorNum; i <= greaterNum; i++) {
        totalSum += i;
    }

    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
