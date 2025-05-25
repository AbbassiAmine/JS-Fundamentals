const firstArgument = process.argv[2];
const num = Number(firstArgument);


if (Number.isInteger(num)) {
    console.log("My number :" + num)
    
} else {
    console.log("Not a number")
}