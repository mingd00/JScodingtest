function solution(my_strings, parts) {
    // map 메서드의 콜백 함수에서 반환된 값들이 모여 새로운 배열을 만듦
    return parts.map(([s, e], i) => {
        return my_strings[i].substring(s, e + 1)
    }).join('')
}

console.log(solution(["progressive", "hamburger", "hammer", "ahocorasick"], [[0, 4], [1, 2], [3, 5], [7, 7]]))