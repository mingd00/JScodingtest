function solution(array) {
    return array.sort((a, b) => (a - b))[(Math.floor((array.length + 1) / 2)) - 1]
}

console.log(solution([9, -1, 0]))