function solution(A, B) {
    target = [...A]
    let cnt = 0
    if (A == B) return 0
    for (i = 0; i < A.length; i++) {
        if (target.join('') == B) return cnt
        t = target.pop()
        target.unshift(t)
        cnt += 1
    }
    return -1
}

console.log(solution("hello", "ohell"))
