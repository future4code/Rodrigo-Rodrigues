// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// EXERCÍCIO 1

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// A) Explique o que o código faz. Qual o teste que ele realiza? 

// B) Para que tipos de números ele imprime no console "Passou no teste"? 

// C) Para que tipos de números a mensagem é "Não passou no teste"?

// RESPOSTAS DAS LETRAS A, B, C...

// O código pede ao usuário para digitar um número, caso o número que o usuário digitou seja par, o código imprime no console "Passou no teste.", caso o número seja ímpar ele imprime no console "Não passou no teste."

// ------------------------------------ // ----------------------------------------- // --------------------------------------------------------

// EXERCÍCIO 2

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break;
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)


// A) Para que serve o código acima?

// O código serve para automatizar e dar respostas dependendo da resposta que ele recebe do usuário. Ele pede ao usuário para escolher uma fruta e se ele digita alguma das frutas que tem nos cases do código ele da o preço que corresponde a fruta, porém se o usuário digita uma fruta que não tem nos cases ele da uma mensagem padrão que é o default.

// B) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?

// O preço da fruta  Maçã  é  R$  2.25

// C) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

// O preço da fruta  Pêra  é  R$  5

// --------------------------------------------- // ----------------------------------------- // -----------------------------------------------

// EXERCÍCIO 3

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// A) O que a primeira linha está fazendo?

// Está pedindo para o usuário digitar um número pelo prompt e transformando essa string em number.

// B) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?

// Se ele digitar o número 10 vai aparecer "Esse número passou no teste", e se digitar o número -10 não irá aparecer nenhuma mensagem

// C) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

// Sim, haverá um erro porque a variável let mensagem está dentro do bloco de código da condição if e ela deveria estar fora desse bloco de código, deveria estar no escopo global ou então em um bloco de código de uma condição else para que se o usuário digitar um número negativo só apareça ela, e nesse caso teria que apagar o ultimo console.log do código.

// ---------------------------------------- // ---------------------------------------------- // -----------------------------------------------

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// EXERCÍCIO 1

// A) / B)

// const idadeUsuario = Number(prompt("Qual a sua idade?"))

// C)

// if(idadeUsuario >= 18){
//     console.log("Você pode dirigir")
// }
// else{
//     console.log("Você não pode dirigir")
// }

// ----------------------------------------- // ----------------------------------------------- // ---------------------------------------------

// EXERCÍCIO 2

// const turnoAluno = prompt("Que turno do dia você estuda? Digite M (matutino) , V (Vespertino) ou N (Noturno)")


// if(turnoAluno.toUpperCase() === "M"){
//     console.log("Bom dia!")
// }
// else if(turnoAluno.toUpperCase() === "V"){
//     console.log("Boa tarde!")
// }
// else{
//     console.log("Boa noite!")
// }

// ---------------------------------------- // ---------------------------------------------- // -----------------------------------------------

// Exercício 3

// const turnoAluno = prompt("Que turno do dia você estuda? Digite M (matutino) , V (Vespertino) ou N (Noturno)")

// switch (turnoAluno.toUpperCase()) {
//   case "M":
//     console.log("Bom dia!")
//     break;
//   case "V":
//     console.log("Boa tarde!")
//     break;
//   case "N":
//     console.log("Boa noite!")
//     break;
//   default:
//     console.log("Turno não encontrado. Digite M, V ou N.")
//     break;
// }

// -------------------------------------- // ------------------------------------------------ // -----------------------------------------------

// EXERCÍCIO 4

// const generoFilme = prompt("Qual o gênero do filme?")
// const valorIngresso = Number(prompt("Qual o valor do ingresso?"))

// if(generoFilme === "fantasia" && valorIngresso < 15){
//     console.log("Bom filme!")
// }
// else {
//     console.log("Escolha outro filme :(")
// }

// -------------------------------------- // ----------------------------------------------- // ------------------------------------------------

// DESAFIOS

// EXERCÍCIO 1

// const generoFilme = prompt("Qual o gênero do filme?")
// const valorIngresso = Number(prompt("Qual o valor do ingresso?"))


// if(generoFilme === "fantasia" && valorIngresso < 15){
//     console.log("Bom filme!")
//     const lanche = prompt("Qual lanchinho você vai querer?")
//         if(lanche === "pipoca"){
//         console.log(`Aproveite a sua ${lanche} :)`)}
//         else{
//             console.log(`Aproveite o seu ${lanche} :)`)
//         }
// }
// else {
//     console.log("Escolha outro filme :(")
// }

// ------------------------------- // --------------------------------------------------- // ---------------------------------------------------

// EXERCÍCIO 2

// const nomeUsuario = prompt("Qual o seu nome?")
// let tipoJogo = prompt("Qual o tipo de jogo? IN (internacional), e DO (doméstico)")
// let etapaJogo = prompt("Qual etapa do jogo? SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final")
// let categoriaJogo = Number(prompt("Qual a categoria do jogo?  pode ser as opções 1, 2, 3 ou 4;"))
// let quantidadeIngressos = Number(prompt("Quantos ingressos você vai querer?"))
// let ingNacionalOuInternacional = "nacional"
// let precoIngresso
// let precoFinal


// if(etapaJogo.toUpperCase() === "SF"){
//     if(categoriaJogo === 1){
//         precoIngresso = 1320
//         etapaJogo = "Semi final"
//     } 
//     else if(categoriaJogo === 2){
//         precoIngresso = 880
//         etapaJogo = "Semi final"
//     } 
//     else if(categoriaJogo === 3){
//         precoIngresso = 550
//         etapaJogo = "Semi final"
//     }
//     else if(categoriaJogo === 4){
//         precoIngresso = 220
//         etapaJogo = "Semi final"
//     }
// }
// else if(etapaJogo.toUpperCase() === "DT"){
//     if(categoriaJogo === 1){
//         precoIngresso = 660
//         etapaJogo = "Decisão do 3º lugar"
//     } 
//     else if(categoriaJogo === 2){
//         precoIngresso = 440
//         etapaJogo = "Decisão do 3º lugar"
//     } 
//     else if(categoriaJogo === 3){
//         precoIngresso = 330
//         etapaJogo = "Decisão do 3º lugar"
//     }
//     else if(categoriaJogo === 4){
//         precoIngresso = 170
//         etapaJogo = "Decisão do 3º lugar"
//     }
// }
// else if(etapaJogo.toUpperCase() === "FI"){
//     if(categoriaJogo === 1){
//         precoIngresso = 1980
//         etapaJogo = "Final"
//     } 
//     else if(categoriaJogo === 2){
//         precoIngresso = 1320
//         etapaJogo = "Final"
//     } 
//     else if(categoriaJogo === 3){
//         precoIngresso = 880
//         etapaJogo = "Final"
//     }
//     else if(categoriaJogo === 4){
//         precoIngresso = 330
//         etapaJogo = "Final"
//     }
// }

// switch(tipoJogo.toUpperCase()){
//     case "IN":
//     precoIngresso = precoIngresso * 0.2439
//     ingNacionalOuInternacional = "Internacional"
//     break
// }

// precoFinal = quantidadeIngressos * precoIngresso

// ingressoNacional = 
// `Nome: ${nomeUsuario}\n
// Tipo de jogo: ${ingNacionalOuInternacional}\n
// Etapa do jogo: ${etapaJogo}\n
// Categoria: ${categoriaJogo}\n
// Quantidade de ingressos: ${quantidadeIngressos}\n
// Valor do ingresso: R$ ${precoIngresso}\n
// Valor total: R$ ${precoFinal}`

// ingressoInternacional =  
// `Nome: ${nomeUsuario}\n
// Tipo de jogo: ${ingNacionalOuInternacional}\n
// Etapa do jogo: ${etapaJogo}\n
// Categoria: ${categoriaJogo}\n
// Quantidade de ingressos: ${quantidadeIngressos}\n
// Valor do ingresso: U$ ${precoIngresso}\n
// Valor total: U$ ${precoFinal}`

// if(tipoJogo.toUpperCase() === "DO"){
//     console.log(ingressoNacional)
// }
// else{
//     console.log(ingressoInternacional)
// }
