let obj = { a: 1, b: 2, c: 3, d: 2 };
const dic = [{ index: 1, name: 'red' }, { index: 2, name: 'green' }, { index: 3, name: 'yellow' }];

const ret = dic.filter(v => v.index > 1);
ret.forEach(i => console.log(i))

const ret2 = dic.find(v => v.name == 'green');
console.log(ret2)

const ret3 = dic.findIndex(v => v.name == 'green');
console.log(ret3)

