function solution(my_string, overwrite_string, s) {
    let target = my_string.split('')
    target.splice(s, overwrite_string.length, ...overwrite_string)
    const answer = target.join('')
    return answer;
}

console.log(solution("He11oWor1d", "lloWorl", 2))
