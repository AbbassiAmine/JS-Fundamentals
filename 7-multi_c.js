
const firstArgument = process.argv[2];
const num = Number(firstArgument);

if (Number.isInteger(num) && num > 0) {
    let output = "";
    for (let i = 0; i < num; i++) {
        output += "C is fun\n";
    }
    console.log(output.trim());
} else if (!Number.isInteger(num)) {
    console.log("Missing number of occurrences");
}


/* 
const firstArgument = process.argv[2];
const num = Number(firstArgument);


if (Number.isInteger(num)) {
    for(let i=0;i<num;i++){
        console.log("C is fun")
    }
} 

else {
    console.log("Missing number of occurrences")
} */