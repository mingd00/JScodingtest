// 객체를 이용해 구현
function solution(array) {
    var answer = 0;
    let info = {}
    array.forEach(e => {
        if (!(e in info)) info[e] = 0
        info[e] += 1
    })

    // 최댓값 찾기
    const maxVal = Math.max(...Object.values(info))
    let res = []

    // entries로 키, 값 묶은 배열로 변환
    Object.entries(info).forEach(e => {
        if (e[1] == maxVal) {
            res.push(e[0])
        }
    })

    if (res.length == 1) answer = parseInt(res[0])
    else answer = -1
    return answer;
}

// 맵을 이용해 구현
function solution2(array) {
    var answer = 0;
    let info = new Map()
    array.forEach(e => {
        if (!(info.has(e))) info.set(e, 0)
        info.set(e, info.get(e) + 1)
    })

    // 최댓값 찾기
    const maxVal = Math.max(...Array.from(info.values()))
    let res = []

    // entries로 키, 값 묶은 배열로 변환
    info.forEach((v, i) => {
        if (v == maxVal) {
            res.push(i)
        }
    })

    if (res.length == 1) answer = parseInt(res[0])
    else answer = -1
    return answer;
}


console.log(solution([1, 2, 3, 3, 3, 4]))
console.log(solution2([1, 2, 3, 3, 3, 4]))