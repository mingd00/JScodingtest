function solution(n) {
    var answer = Math.floor(n / 7) + (n % 7 > 0 ? 1 : 0)
    // var answer = Math.ceil(n / 7)
    return answer
}

function solution2(n) {
    var answer = 0;
    p = 6
    while (true) {
        if (p % n != 0) {
            p += 6
            continue
        }
        answer = p / 6
        break
    }
    return answer;
}

function solution3(slice, n) {
    var answer = Math.ceil(n / slice)
    return answer
}

console.log(solution(7))
console.log(solution2(10))
console.log(solution3(7, 10))