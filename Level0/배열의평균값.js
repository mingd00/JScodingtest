function solution(numbers) {
    var answer = numbers.reduce((total, e) => total + e, 0) / numbers.length
    return answer
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))