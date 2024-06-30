function solution(my_string) {
    const s = my_string.split(' ')
    let ans = +s[0]

    for (let i = 1; i < s.length; i += 2) {
        if (s[i] == '+') ans += +s[i + 1]
        else ans -= +s[i + 1]
    }
    return ans
}

console.log(solution("3 + 4 + 7 - 3 - 1"))