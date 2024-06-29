function solution(strArr) {
    return strArr.map((e, i) => {
        return i % 2 == 0 ? e.toLowerCase() : e.toUpperCase()
    })
}

console.log(solution(["AAA", "BBB", "CCC", "DDD"]))