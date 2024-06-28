function solution(my_string, n) {
    var answer = '';
    [...my_string].forEach(e => {
        answer += e.repeat(n)
    })
    return answer;
}

console.log(solution("hello", 3))