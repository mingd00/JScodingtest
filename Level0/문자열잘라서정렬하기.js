function solution(myString) {
    return myString.split('x').sort().filter(e => e != 0)
}

console.log(solution("axbxcxdx"))