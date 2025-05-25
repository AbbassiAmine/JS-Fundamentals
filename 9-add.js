function add(a, b) {
    return a + b;
}

const firstArg = process.argv[2];
const secondArg = process.argv[3];
const num1 = Number(firstArg);
const num2 = Number(secondArg);

if (Number.isInteger(num1) && Number.isInteger(num2)) {
    console.log(add(num1, num2));
} else {
    console.log(NaN);
}