"use strict";

var array = function array() {
  return [1, 2, 3];
};

var string = function string() {
  return 'string';
};

var objeto = function objeto() {
  return {
    tipoRetorno: 'objeto',
    tipoFuncao: 'Arraw Funciton'
  };
};

console.log(array());
console.log(string());
console.log(objeto());
