const removeFromArray = function(myArray, ...toRemove) {
return myArray.filter(val => !toRemove.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;
