const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
]


const arrIdades = usuarios.map(({idade}) => idade);
console.log(arrIdades);

const filter = usuarios.filter(( {idade, empresa} ) => idade > 18 && empresa === 'Rocketseat');
console.log(filter);

const find = usuarios.find(({empresa}) => empresa === 'Google');
console.log(find);

const dobroIdadeMenorCinquenta = usuarios
    .map(({nome, idade, empresa}) => {
        idade *= 2;
        return {nome, idade, empresa};
    })
    .filter(({idade}) => idade < 50);
console.log(dobroIdadeMenorCinquenta)