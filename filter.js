const numbers = [1, 2, 3, 4, 5, 6, 1];
// 짝수 반환
const ret = numbers.filter(e => e % 2 == 0)
console.log(ret)

// 3보다 큰 수 반환(해당 조건에 만족하는 첫 번째 요소)
const ret2 = numbers.find(e => e > 3);
console.log(ret2)

const index = numbers.indexOf(1);
console.log(index)