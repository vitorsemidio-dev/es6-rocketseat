"use strict";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var usuario = {
  nome: 'Emidio',
  idade: 22,
  universidade: 'UERJ'
};

var nome = usuario.nome,
    restoObj = _objectWithoutProperties(usuario, ["nome"]);

console.log(nome);
console.log(restoObj);
var arr = [1, 2, 3, 4, 5];
var a = arr[0],
    b = arr[1],
    restoArr = arr.slice(2);
console.log(a);
console.log(b);
console.log(restoArr);

function soma() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, current) {
    return total + current;
  });
}

console.log(soma(1));
console.log(soma(1, 5, 10, 2));
console.log(soma(1, 1, 1, 8, 9, 6, 14));
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [].concat(arr1, arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3);
var idade = 22;
var curso = 'Ciencia da Computacao';
var aluno1 = {
  nome: 'Emidio',
  idade: idade,
  universidade: 'UERJ',
  curso: curso
};

var aluno2 = _objectSpread({}, aluno1, {
  nome: 'Levi',
  universidade: 'UFMG'
});

function apresentacaoAluno(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade,
      universidade = _ref.universidade,
      curso = _ref.curso;
  return "Olah! Meu nome eh ".concat(nome, " e tenho ").concat(idade, " anos. Estou cursando ").concat(curso, " na ").concat(universidade);
}

console.log(apresentacaoAluno(aluno1));
console.log(apresentacaoAluno(aluno2));
