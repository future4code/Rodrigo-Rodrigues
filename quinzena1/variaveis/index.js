// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

1. 

let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)

// O console irá imprimir:

// 10
// 10 , 5


2. 

let a = 10
let b = 20
let c
c = a
b = c
a = b

console.log(a, b, c)

// O console irá imprimir:

// 10 , 10 , 10

3. 
 
let horasTrabalhoDia = prompt("Quantas horas você trabalha por dia?") 
let valorRecebidoDia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`) // Vai devolver pro usuário o resultado do valor recebido por dia, dividido pelas horas trabalhadas e ter o valor de quanto ganha por hora.


// EXERCÍCIOS DE ESCRITA DE CÓDIGO


1. 

let nome // Eu tinha colocado const por se tratar do nome mas ai descobri que a variavel const precisa ter um valor atribuido a ela, se ela não tiver consta como erro de syntax no console.
let idade  
console.log(typeof nome) // O console imprimiu undefined porque nenhum valor foi atribuido, portanto esta indefinido.
console.log(typeof idade) // O console imprimiu undefined porque nenhum valor foi atribuido, portanto esta indefinido.
let nome = prompt("Qual o seu nome?") // Exemplo: Rodrigo
let idade = prompt("Qual a sua idade?") // Exemplo: 26
alert(`Olá ${nome}, você tem ${idade} anos.`) // O alert irá retornar: Olá Rodrigo, você tem 26 anos.
// Nesse caso o typeof das duas variaveis são string porque tudo que retorna do prompt é uma string

const nome = "Rodrigo"
let idade = 26

console.log(typeof nome) // Já nesse caso o console irá retornar string
console.log(typeof idade) // E aqui irá retornar number


2.

let roupaAzul = prompt("A cor da sua roupa é azul?")
let corCabelo = prompt("A cor do seu cabelo é preto?")
let futebol = prompt("Você gosta de futebol?")

console.log(`A cor da sua roupa é azul? ${roupaAzul}! A cor do seu cabelo é preto? ${corCabelo}! ,Você gosta de futebol? ${futebol}!`)


3.

let a = 10
let b = 25
let c 
c = a
a = b
b = c

console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

