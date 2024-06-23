const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split(" ");

function main() {
    console.log(input)
}

if (require.main === module) {
    main()
}