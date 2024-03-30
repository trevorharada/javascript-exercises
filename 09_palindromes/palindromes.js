const palindromes = function (x) {
    let a = x.toLowerCase().replace(/[^a-z0-9]/g, '');
    let arr = a.split('').reverse().join('');
    if (arr == a) {
        return true;
    } else {
        return false;
    }
};

// find a way to make everything lowercase
//find a way to remove non words
//find a way to join the string into one word, no spaces 
//find a way to compare new string to original string


// Do not edit below this line
module.exports = palindromes;
