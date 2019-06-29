"use strict";

var arr = [1, 5, 2, 3, 8, 10, 12, 13, 18, 21];
var arrMap = arr.map(function (value) {
  return value * 2;
});
var arrMapWithIndex = arr.map(function (value, index) {
  return value * index;
});
var sum = arr.reduce(function (total, current) {
  return total + current;
});
var filtro = arr.filter(function (value) {
  return value % 2 === 0;
});
var find = arr.find(function (search) {
  return search === 11;
});
console.log(arrMap);
console.log(arrMapWithIndex);
console.log(sum);
console.log(filtro);
console.log(find);
