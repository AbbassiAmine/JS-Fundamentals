const argumentPassed = process.argv.length-2;

if (argumentPassed == 0) {
    console.log("No argument");
} 

else if (argumentPassed == 1) { 
    console.log("Argument found");
}

else {
    console.log("Arguments found");
}


