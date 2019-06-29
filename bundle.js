"use strict";

var usuario = {
  nome: 'Emidio'
};
var arr = [1, 2, 3];
usuario.nome = 'abc';
arr[1] = 10;
console.log(usuario, arr);

function teste(x) {
  var y = 2;

  if (x > 5) {
    console.log(x, y);
  }
}

teste(10);
