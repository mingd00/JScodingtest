let numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
// 오름차순
numbers = numbers.sort((a, b) => a - b)
// 내림차순
numbers_reverse = numbers.sort((a, b) => (a - b) * -1)
console.log(numbers)
console.log(numbers_reverse)
