"use strict";

var usuario = {
  nome: 'Emidio',
  idade: 22,
  endereco: {
    cidade: 'Rio de Janeiro',
    estado: 'RJ'
  } // #1

};
var nomeUsuario = usuario.nome;
var idadeUsuario = usuario.idade;
var cidadeUsuario = usuario.endereco.cidade;
console.log(nomeUsuario, idadeUsuario, cidadeUsuario); // #2

var nome = usuario.nome;
var idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome);
console.log(idade, cidade);

mostrarNome = function mostrarNome(usuario) {
  return usuario.nome;
};

mostrarNome2 = function mostrarNome2(_ref) {
  var nome = _ref.nome;
  return nome;
};

console.log(mostrarNome(usuario));
console.log(mostrarNome2(usuario));
