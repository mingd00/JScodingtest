const fs = require("fs");
// 백준 베출시 path 경로 /dev/stdin으로 변경
const input = fs.readFileSync("../input.txt").toString().trim().split(" ");

function main() {
    console.log(input)
}

if (require.main === module) {
    main()
}