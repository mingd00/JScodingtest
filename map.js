const numbers = [1, 2, 3, 4, 5]
// 함수를 기반으로 새로운 배열 생성
const ret = numbers.map(e => e * e)
console.log(ret)

let b = []
for (let a of numbers) {
    b.push(a * a)
}
console.log(b)