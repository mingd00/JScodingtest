function solution(my_string, queries) {
    target_string = my_string.split('')
    queries.forEach(([s, e]) => {
        reverse_string = target_string.slice(s, e + 1).reverse()
        target_string.splice(s, e - s + 1, ...reverse_string)
    })
    return target_string.join('')
}

console.log(solution("rermgorpsam", [[2, 3], [0, 7], [5, 9], [6, 10]]))