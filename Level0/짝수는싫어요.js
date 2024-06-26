function solution(n) {
    var answer = Array.from({ length: n }, (v, i) => i + 1).filter(e => e % 2 == 1)
    return answer;
}

function solution2(n) {
    var answer = []
    for (let i = 1; i <= n; i += 2) answer.push(i)
    return answer;
}

console.log(solution([9, -1, 0]))
console.log(solution([9, -1, 0]))

