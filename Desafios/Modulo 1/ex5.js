const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr;

console.log(x);
console.log(y);

const soma = (...params) => params.reduce((total, atual) => total + atual);

console.log(soma(1, 2, 3, 4, 5, 6));
console.log(soma(1, 2));
