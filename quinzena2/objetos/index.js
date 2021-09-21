// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO


// Exercício 1

// O primeiro console.log vai imprimir => Matheus Nachtergaele

// O segundo console.log vai imprimir => Virginia Cavendish

// O terceiro console.log vai imprimir => {canal: "Globo", horario: "14h"}

// ----------------------------------------- // ------------------------------------------------ // --------------------------------------------

// Exercício 2


// a) Será impresso no console:

// {nome: 'Juca', idade: 3, raca: 'SRD'}
// {nome: 'Juba', idade: 3, raca: 'SRD'}
// {nome: 'Jubo', idade: 3, raca: 'SRD'}


// b) Essa sintaxe se chama spread, é uma sintaxe de espalhamento. Ela copia todos os elementos do objeto ou array que é digitado logo após os três pontos, como no exemplo: ...cachorro

// -------------------------------------------- // ------------------------------------------------- // ----------------------------------------

// Exercício 3

// a)

// Será impresso no primeiro console.log: false
// Será impresso no segundo console.log: undefined


// b) 

// Foi impresso esses valores porque no primeiro console.log ele chamou a propriedade backender do objeto pessoa, e no segundo deu undefined porque a propriedade altura no caso não foi definida ainda no objeto.

// ----------------------------------------- // ----------------------------------------------------- // ---------------------------------------

// EXERCÍCIOS DE ESCRITA DE CÓDIGO


// Exercício 1

// a)

// const pessoa = {
//     nome: "Rodrigo",
//     apelidos: ["Ro", "Digo", "Digão"]
// }

// const minhaFuncao = (pessoa) => {
     
//     console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)
        
// }

// (minhaFuncao(pessoa))

// // b)

// const atualizandoPessoa = {
//     ...pessoa,
//     apelidos: ["Apelido 1", "Apelido 2", "Apelido 3"]
// }

// minhaFuncao((atualizandoPessoa))

// ------------------------------------------ // ------------------------------------------ // -------------------------------------------------

// Exercício 2

// a)

// const pessoa1 = {
//     nome: "João",
//     idade: 25,
//     profissao: "Vendedor"
// }

// const pessoa2 = {
//     nome: "Marcelo",
//     idade: 30,
//     profissao: "Engenheiro"
// }

// // b)

// function dadosObjetos(pessoa1, pessoa2) {
//     const array = [pessoa1.nome, pessoa1.nome.length, pessoa1.idade, pessoa1.profissao, pessoa1.profissao.length,
//         pessoa2.nome, pessoa2.nome.length, pessoa2.idade, pessoa2.profissao, pessoa2.profissao.length]
//     return array
// }   

// console.log(dadosObjetos(pessoa1, pessoa2))

// ------------------------------------- // ---------------------------------------------- // --------------------------------------------------

// Exercício 3

// a) 

// const carrinho = []

// // b)

// const fruta1 = {
//     nome: "Banana",
//     disponibilidade: true
// }

// const fruta2 = {
//     nome: "Mamão",
//     disponibilidade: true
// }

// const fruta3 = {
//     nome: "Limão",
//     disponibilidade: true
// }

// // c)

// function recebeObjetoFruta(fruta) {
//     carrinho.push(fruta)
    
// }

// recebeObjetoFruta(fruta1)
// recebeObjetoFruta(fruta2)
// recebeObjetoFruta(fruta3)

// // d)

// console.log(carrinho)