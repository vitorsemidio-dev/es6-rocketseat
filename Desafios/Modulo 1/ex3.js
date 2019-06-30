const arr = [1, 2, 3, 4, 5];
const partI = arr.map((item) => item + 10);


const usuario = { nome: 'Diego', idade: 23 };
const mostraIdade = ({idade}) => idade;
const partII = mostraIdade(usuario);



const nome = 'Diego';
const idade = 23;

const mostraUsuario = (nome, idade = 18) => ({nome, idade});
const partIII = mostraUsuario(nome, idade);
const partIII2 = mostraUsuario(nome);



const promise = () => new Promise((resolve, reject) => resolve('Rocketseat'));
const partIV = promise();

console.log(partI);
console.log(partII);
console.log(partIII);
console.log(partIII2);
console.log(partIV);