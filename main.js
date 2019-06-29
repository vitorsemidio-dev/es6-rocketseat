const usuario = {
    nome: 'Emidio',
    idade: 22,
    universidade: 'UERJ'
}

const { nome, ...restoObj } = usuario;

console.log(nome);
console.log(restoObj);


const arr = [1,2,3,4,5];
const [ a, b, ...restoArr ] = arr;
console.log(a);
console.log(b);
console.log(restoArr); 


function soma (...params) {
    return params.reduce((total, current) => total + current);
}

console.log(soma(1));
console.log(soma(1, 5, 10, 2));
console.log(soma(1, 1, 1, 8, 9, 6, 14));




const arr1 = [1,2,3]
const arr2 = [4,5,6]
const arr3 = [...arr1, ...arr2];

console.log(arr1)
console.log(arr2)
console.log(arr3)

const idade = 22;
const curso = 'Ciencia da Computacao';

const aluno1 = {
    nome: 'Emidio',
    idade,
    universidade: 'UERJ',
    curso
}

const aluno2 = {...aluno1, nome: 'Levi', universidade: 'UFMG'}

function apresentacaoAluno({nome, idade, universidade, curso}) {
    return `Olah! Meu nome eh ${nome} e tenho ${idade} anos. Estou cursando ${curso} na ${universidade}`
}

console.log(apresentacaoAluno(aluno1));
console.log(apresentacaoAluno(aluno2));