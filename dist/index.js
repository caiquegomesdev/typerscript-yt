"use strict";
let age = 5;
const firstName = 'Gomes';
const isValid = true;
let idk = 5;
idk = '12';
idk = true;
const ids = [1, 2, 3, 4, 5];
const booleans = [true, false, true, false];
const names = ["Jorge", "francisco"];
//Tupla
const person = ['Gomes', 5];
//lista de Tuplas
const people = [
    [1, 'Gomes'],
    [2, 'Francisco'],
    [3, 'Jorge']
];
//intersections
const productId = '1';
//Enum (UM VALOR QUE SEMPRE VAI SER ATRIBUIDO A OUTRO VALOR)
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction["Left"] = "Esquerda";
})(Direction || (Direction = {}));
const direction = Direction.Up;
//Type Assertions
const productName = 'Bone';
//let itemID = productName as string;
let itemId = productName;
console.log(direction);
