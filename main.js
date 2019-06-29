const usuario = {
    nome: 'Emidio',
    idade: 22,
    endereco: {
        cidade: 'Rio de Janeiro',
        estado: 'RJ'
    }
}

// #1
const nomeUsuario = usuario.nome;
const idadeUsuario = usuario.idade;
const cidadeUsuario = usuario.endereco.cidade;
console.log(nomeUsuario, idadeUsuario, cidadeUsuario);


// #2
const { nome } = usuario;
const { idade, endereco: { cidade } } = usuario;
console.log(nome);
console.log(idade, cidade);



mostrarNome = (usuario) => usuario.nome;
mostrarNome2 = ({nome}) => nome;
console.log(mostrarNome(usuario));
console.log(mostrarNome2(usuario));