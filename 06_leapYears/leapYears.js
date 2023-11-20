const leapYears = function(year) {
// if year % 4 === 0 it is a leap year, but for years that are century years, century years % 400 === 0, for it to be a leap year
    if (year % 100 === 0 && year % 400 === 0) {
        return true;
    } else if (year % 100 != 0 && year % 4 === 0) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
