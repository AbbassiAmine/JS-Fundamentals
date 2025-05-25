function factorial(n) {
    if (n === 0 || isNaN(n)) {
        return 1;
    }
    return n * factorial(n - 1);
}

const arg = process.argv[2];
const num = Number(arg);

if (Number.isInteger(num) && num >= 0) {
    console.log(factorial(num));
} else if (!Number.isInteger(num)) {
    console.log(1);
}
