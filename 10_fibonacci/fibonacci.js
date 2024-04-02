const fibonacci = function(n) {
let a = 1;
let b =1;
if (n < 0) {
    return "OOPS";
} else {
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
};
};

// Do not edit below this line
module.exports = fibonacci;
