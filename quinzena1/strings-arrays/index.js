// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// Exercício 1

// let array
// console.log('a. ', array) // Vai aparecer no console => a. undefined


// array = null
// console.log('b. ', array) // Vai aparecer no console => b. null


// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length) // Vai aparecer no console => c. 11


// let i = 0
// console.log('d. ', array[i]) // Vai aparecer no console => d. 3


// array[i+1] = 19
// console.log('e. ', array) // Vai aparecer no console => e. (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13] a posição 1 do array que antes era o número 4 passou a ser 19.


// const valor = array[i+6]
// console.log('f. ', valor) // Vai aparecer no console => f. 9 a variável valor recebeu o número 9 que está na posição 6 do array.

//----------------------------------------------------------------------------------------------------------------------------------------------

// Exercício 2


// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
// Vai aparecer no console => SUBI NUM ÔNIBUS EM MIRROCOS 27

//----------------------------------------------------------------------------------------------------------------------------------------------

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// Exercício 1

// const nomeUsuario = prompt("Digite o seu nome")
// const emailUsuario = prompt("Digite o seu email")

// console.log(`O e-mail ${emailUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeUsuario}!`)

//----------------------------------------------------------------------------------------------------------------------------------------------

// Exercício 2

// const comidasFavoritas = ["Churrasco", "Sushi", "Pizza", "Lasanha", "Hamburguer"]

// a)
// console.log(comidasFavoritas)

// b)

// console.log(`Essas são minhas comidas favoritas:
//     ${comidasFavoritas[0]}
//     ${comidasFavoritas[1]}
//     ${comidasFavoritas[2]}
//     ${comidasFavoritas[3]}
//     ${comidasFavoritas[4]}
// `)

// c)

// const comidaUsuario = prompt("Qual a sua comida preferida?")

// comidasFavoritas[0+1] = comidaUsuario

// console.log(comidasFavoritas)

//----------------------------------------------------------------------------------------------------------------------------------------------

// Exercício 3

// a)
// let listaDeTarefas = []

// b) 

// const tarefa1 = prompt("Digite a primeira tarefa")
// const tarefa2 = prompt("Digite a segunda tarefa")
// const tarefa3 = prompt("Digite a terceira tarefa")

// listaDeTarefas.push(tarefa1, tarefa2, tarefa3)

// c)

// console.log(listaDeTarefas)

// d)

// const tarefaRealizada = prompt("Digite o índice da tarefa que já foi realizada de 0 a 2")

// e)

// listaDeTarefas.splice(tarefaRealizada, 1)

// f)

// console.log(listaDeTarefas)

//----------------------------------------------------------------------------------------------------------------------------------------------

// DESAFIO

// Exercício 1

// const fraseUsuario = prompt("Digite uma frase")

// const novoArray = fraseUsuario.split(" ")

// console.log(novoArray) 

// Exercício 2

// const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

// console.log("O item Abacaxi está na posição" ,frutas.indexOf("Abacaxi"))
// console.log("O tamanho do array é", frutas.length)