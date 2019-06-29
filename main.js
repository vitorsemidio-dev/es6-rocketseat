const arr = [1, 5, 2, 3, 8, 10, 12, 13, 18, 21]


const arrMap = arr.map((value) => value * 2);
const arrMapWithIndex = arr.map((value, index) => value * index);
const sum = arr.reduce((total, current) => total + current);
const filtro = arr.filter((value) => value % 2 === 0);
const find = arr.find((search) => search === 11);

console.log(arrMap);
console.log(arrMapWithIndex);
console.log(sum);
console.log(filtro);
console.log(find);