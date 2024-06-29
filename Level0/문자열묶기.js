function solution(strArr) {
    m = new Map()
    strArr.forEach(e => {
        // m.has(e.length) ? m.set(e.length, m.get(e.length) + 1) : m.set(e.length, 1)
        m.set(e.length, (m.get(e.length) || 0) + 1)
    })
    return Math.max(...m.values())
}

console.log(solution(["a", "bc", "d", "efg", "hi"]))