// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// EXERCÍCIO 1

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })


// A) O que vai ser impresso no console?

// Vai ser impresso cada elemento do array, que no caso é um objeto com as propriedades "nome" e "apelido", vai ser impresso o índice de cada elemento e também vai ser impresso o array inteiro logo abaixo de cada elemento impresso no console.

// ----------------------------------------- // ----------------------------------------------- // ---------------------------------------------

// EXERCÍCIO 2


// const usuarios = [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" },
// ]

// const novoArrayB = usuarios.map((item, index, array) => {
//    return item.nome
// })

// console.log(novoArrayB)


// A) O que vai ser impresso no console?

// Vai ser impresso um novo array com 3 elementos que vai ser apenas o valor da propriedade "nome" de cada objeto do array.
// ['Amanda Rangel', 'Laís Petra', 'Letícia Chijo']

// -------------------------------------------- // ------------------------------------------- // ----------------------------------------------

// EXERCÍCIO 3


// const usuarios = [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" },
// ]

// const novoArrayC = usuarios.filter((item, index, array) => {
//    return item.apelido !== "Chijo"
// })

// console.log(novoArrayC)


// A) O que vai ser impresso no console?

// Vai ser impresso um array com dois objetos que será: 
// [{nome: "Amanda Rangel", apelido: "Mandi"},
// {nome: "Laís Petra", apelido: "Laura"}]

// ---------------------------------------------------- // ------------------------------------------ // ---------------------------------------

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// EXERCÍCIO 1

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

 // A)  Crie um novo array que contenha apenas o nome dos doguinhos

//  function retornarNomesDogs(dog){
//     return dog.nome
// }

// const nomesDogs = pets.map(retornarNomesDogs)
// console.log(nomesDogs)

// B) Crie um novo array apenas com os cachorros salsicha

// const arrayDogsSalsicha = pets.filter((item) => {
//     return item.raca === "Salsicha"
// })

// console.log(arrayDogsSalsicha)

// C) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"

// const arrayDogsPoodles = pets.filter((item) => {
//     return item.raca === "Poodle"
// })

// const arrayNomesPoodles = arrayDogsPoodles.map((item) => {
//     nomePoodle = item.nome
//     return `Você ganhou um cupom de desconto de 10% para tosar o/a ${nomePoodle}!`

// })

// console.log(arrayNomesPoodles)

// ------------------------------------------ // ------------------------------------------------ // -------------------------------------------

// EXERCÍCIO 2

// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
// ]


// A) Crie um novo array que contenha apenas o nome de cada item

// function retornarNomesProdutos(produto){
//     return produto.nome
// }

// const nomesProdutos = produtos.map(retornarNomesProdutos)
// console.log(nomesProdutos)

// B) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

// const aplicandoDesconto = produtos.map((item) => {
// 	const nomes = item.nome
// 	const preco = (item.preco *0.95).toFixed(2)
// 	return { nomes, preco }
// })

// console.log(aplicandoDesconto)

// C) Crie um novo array que contenha apenas os objetos da categoria Bebidas

// const arrayDeBebidas = produtos.filter((item) => {
//     return item.categoria === "Bebidas"
// })

// console.log(arrayDeBebidas)

// D) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

// const arrayComPalavraYpe = produtos.filter((item) => {
//     return item.nome.includes("Ypê") === true
// })

// console.log(arrayComPalavraYpe)


// E) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

// const verificarArrayComPalavraYpe = produtos.filter((item) => {
//     return item.nome.includes("Ypê") === true
// })

// const imprimirArrayFraseYpeAlterada = verificarArrayComPalavraYpe.map((item) => {
//     return `Compre ${item.nome} por ${item.preco}`
// })

// console.log(imprimirArrayFraseYpeAlterada)