// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// EXERCÍCIO 1

// let valor = 0
// for(let i = 0; i < 5; i++) {
//     valor += i
// }
// console.log(valor)

//RESPOSTA 

// O código está incrementando de 1 em 1 o i e está somando cada incremento com o anterior, por exemplo: 1 + 2 + 3 + 4, ele para no 4 porque a condição é que seja menor que 5. O que será impresso no console é o resultado dessa soma que é 10.

// -------------------------------------- // ---------------------------------------- // -------------------------------------------------------

// EXERCÍCIO 2

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

// a) O que vai ser impresso no console?
// RESPOSTA:

// Será impresso no console:  19, 21, 23, 25, 27, 30

// b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se não, o que poderia ser usado para fazer isso?
//RESPOSTA:

// Talvez o for of seja suficiente para fazer isso, mas a melhor maneira que acho para fazer isso é usando o for, fazendo desse jeito:

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]

// for (let i = 0; i < lista.length; i++) {
//   let elemento = lista[i]
//   console.log(`O indice ${i} pertence ao elemento ${elemento}`)
// }

// --------------------------------------- // -------------------------------------------- // --------------------------------------------------

// EXERCÍCIO 3

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas:"))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

// Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?
// RESPOSTA:
// *
// **
// ***
// ****

// ------------------------------------ // ----------------------------------------------- // --------------------------------------------------

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// EXERCÍCIO 1

// A) 

// const bichinhosUsuario = Number(prompt("Quantos bichinhos de estimação você tem?"))

// if(bichinhosUsuario === 0){
//     console.log("Que pena! você pode adotar um pet! :)")
// }

// RESPOSTA DA LETRA B e LETRA C:

// const nomesAnimaisUsuario = []

// if(bichinhosUsuario > 0){
//     for(let i = 0; i < bichinhosUsuario; i++) {
//         let perguntaNomesAnimais = prompt("Qual o nome dos seus animais?")
//         nomesAnimaisUsuario[i] = perguntaNomesAnimais
        

//     }
//     console.log(nomesAnimaisUsuario)
// }

// ------------------------------------------ // --------------------------------------- // ----------------------------------------------------

// EXERCÍCIO 2

// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// A)

// >>>>> UTILIZANDO O FOR OF <<<<<<

// const imprimeElementosArray = (array) => {
//     for(const elemento of array) {
//         console.log(elemento)
//     }
// }
// imprimeElementosArray(arrayOriginal)

// >>>>> UTILIZANDO O FOR <<<<<<

// for (let i = 0; i < arrayOriginal.length; i++) {
//       let elemento = arrayOriginal[i]
//       console.log(elemento)
// }

// B)

// for (let i = 0; i < arrayOriginal.length; i++) {
//       let elemento = arrayOriginal[i] / 10
//       console.log(`O indice ${i} pertence ao elemento ${elemento} que está dividido por 10.`)
// }

// C)

// let novoArray = []

// for (let i = 0; i < arrayOriginal.length; i++) {
//     const numeroPar = arrayOriginal[i]
//     if(arrayOriginal[i] % 2 === 0){
//         novoArray.push(numeroPar)     
//     }
// }
// console.log(novoArray)

// D)

// for (let i = 0; i < arrayOriginal.length; i++) {
//       let elemento = arrayOriginal[i]
//       console.log(`O indice ${i} pertence ao elemento ${elemento}.`)
// }

// E)

// const maiorEMenorNumero = (arrayOriginal) => {
//     let maiorNumero = -Infinity;
//     let menorNumero = +Infinity
//     for(let numeroDaVez of arrayOriginal) {
//       if(numeroDaVez > maiorNumero) {
//         maiorNumero = numeroDaVez;
//       }
//       else if(numeroDaVez < menorNumero) {
//           menorNumero = numeroDaVez
//       }
//     }
  
//     return console.log(`O maior número é ${maiorNumero} e o menor é ${menorNumero}`)
//   }
//   maiorEMenorNumero((arrayOriginal))

// --------------------------------- // -------------------------------------------------- // -------------------------------------------------

// DESAFIO

// EXERCÍCIO 1

// let numeroEscolhido = Number(prompt("escolha um número"))
// console.log("Vamos jogar!!!")
// let numeroDeTentativas

// for(let i = 0; i !== numeroEscolhido; i++){
//     const acerteNumero = Number(prompt("Tente acertar o número"))
//     console.log(`O número chutado foi: ${acerteNumero}`)
//     if(numeroEscolhido > acerteNumero) {
//         console.log("ERROU. O número escolhido é maior.")
//     }
//     else if(numeroEscolhido < acerteNumero) {
//         console.log("ERROU. O número escolhido é menor")   
//     }
//     else{
//         console.log("ACERTOU!!! Parabéns :D")
//         numeroDeTentativas = (i++ + 1)
//         break
//     }
// }
// console.log(`Você acertou o número no ${numeroDeTentativas} chute`)