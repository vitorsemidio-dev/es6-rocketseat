// REST

const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr;

console.log(x);
console.log(y);

const soma = (...params) => params.reduce((total, atual) => total + atual);

console.log(soma(1, 2, 3, 4, 5, 6));
console.log(soma(1, 2));



// SPREAD
const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil'
    }
}



const usuario2 = { ...usuario, nome: 'Gabriel' }

const { endereco } = usuario ;
const newEndereco = { ...endereco, cidade: 'Lontras' }
const usuario3 = { ...usuario, endereco: newEndereco }


console.log(usuario2);
console.log(usuario3);