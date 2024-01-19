let age: number = 5
const firstName: string = 'Gomes'
const isValid:boolean = true
let idk: any = 5

idk = '12'
idk = true

const ids: number[] = [1,2,3,4,5]
const booleans: boolean[] = [true, false, true, false] 
const names: string[] = ["Jorge", "francisco"]

//Tupla
const person: [string, number] = ['Gomes', 5]

//lista de Tuplas
const people: [number,string][] = [
    [1, 'Gomes'],
    [2, 'Francisco'],
    [3, 'Jorge']
]
//intersections
const productId: string | number | boolean = '1'

//Enum (UM VALOR QUE SEMPRE VAI SER ATRIBUIDO A OUTRO VALOR)
enum Direction {
    Up = 1,
    Down = 2,
    Left ='Esquerda'
}
const direction = Direction.Up

//Type Assertions
const productName: any = 'Bone'
//let itemID = productName as string;
let itemId = <string>productName

console.log(direction)