const size = process.argv[2];
const num = Number(size);

if (Number.isInteger(num) && num > 0) {
    let output = "";
    for (let i = 0; i < num; i++) {
        output += "X".repeat(num) + (i < num - 1 ? "\n" : "");
    }
    console.log(output);
} else if (!Number.isInteger(num) || num === 0 || size === "") {
    console.log("Missing size");
}