const numbers = [1, 2, 3, 4, 5]
// 배열 기반으로 연산
// 100 + sum(numbers)
const ret = numbers.reduce((total, e) => total + e, 100)
console.log(ret)
