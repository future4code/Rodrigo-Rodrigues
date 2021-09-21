// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// Exercício 1

// a) 

// vai ser impresso no console:
// 10
// 50

// b)

// Não irá aparecer nada no console.

//--------------------------------//----------------------------------------------------------//------------------------------------------------

// Exercício 2

// a)

// Essa função está verificando se na resposta do usuário possui a palavra "cenoura", sendo true para se houver a palavra e false se não houver a palavra

// b)

// A saída no console vai ser true para as 3 entradas.


//-------------------------------------------//---------------------------------------------------//--------------------------------------------

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// Exercício 1

// a)
/* 
function meusDados() {
    console.log("Eu sou Rodrigo, tenho 25 anos, moro em Florianópolis e sou estudante.")

}

meusDados() */

// b)
/* 
function meusDados(nome, idade, cidade, profissao) {

    const resposta = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`
    return resposta 

}

console.log(meusDados("Rodrigo", 25, "Florianópolis", "Estudante")) */

//--------------------------------//----------------------------------------------------------------//------------------------------------------

// Exercício 2

// a) 
/* 
function somaDoisNumeros(numero1, numero2) {
    const resultado = numero1 + numero2
    return resultado

}

console.log(somaDoisNumeros(5, 10)) */

// b)

/* function retornaUmBooleano(numero1, numero2) {
    const resultado = numero1 >= numero2
    return resultado

}

console.log(retornaUmBooleano(14, 10)) */

// c)

/* function verificarNumeroPar(numeroPar) {
    const resultado = numeroPar % 2 === 0
    return resultado

}

console.log(verificarNumeroPar(10)) */

// d)

/* function verificarMensagem(mensagem) {
    const resultado = `Essa é a mensagem em letras maiúsculas: ${mensagem.toUpperCase()} e o tamanho dela é: ${mensagem.length}.`
    return resultado
}

console.log(verificarMensagem("exemplo de mensagem")) */

// ------------------------------------- // ---------------------------------------------- // --------------------------------------------------


// Exercício 3


/* const numeroUsuario1 = Number(prompt("Digite o primeiro número"))
const numeroUsuario2 = Number(prompt("Digite o segundo número"))

function somarNumeros(numeroUsuario1, numeroUsuario2) {
    
    const soma = numeroUsuario1 + numeroUsuario2
    return soma
}
    const resultadoSoma = somarNumeros(numeroUsuario1, numeroUsuario2)
    console.log("Números inseridos:", numeroUsuario1,"e", numeroUsuario2)
    console.log("soma", resultadoSoma)

function subtrairNumeros(numeroUsuario1, numeroUsuario2) {
    
    const subtracao = numeroUsuario1 - numeroUsuario2
    return subtracao
}
    const resultadoSubtracao = subtrairNumeros(numeroUsuario1, numeroUsuario2)
    console.log("subtração:", resultadoSubtracao)

function multiplicarNumeros(numeroUsuario1, numeroUsuario2) {

    const multiplicacao = numeroUsuario1 * numeroUsuario2
    return multiplicacao
}
    const resultadoMultiplicacao = multiplicarNumeros(numeroUsuario1, numeroUsuario2)
    console.log("multiplicação:", resultadoMultiplicacao)

function dividirNumeros(numeroUsuario1, numeroUsuario2) {
    
    const divisao = numeroUsuario1 / numeroUsuario2
    return divisao
}
    const resultadoDivisao = dividirNumeros(numeroUsuario1, numeroUsuario2)
    console.log("divisão:", resultadoDivisao) */

//------------------------------ // -------------------------------------------------- // ------------------------------------------------------

// DESAFIO

// Exercício 1

// a)

 /* const imprimirMensagem = (mensagem) => {
    const imprimir = mensagem
    console.log(imprimir) 
}
 */
// b)

/* const somar = (valor1, valor2) => {
    const soma = valor1 + valor2
    imprimirMensagem(soma)
}
somar(2,4) */

//-------------------------------------------- // ------------------------------------------------ // ------------------------------------------

// Exercício 2

/* function teoremaPitagoras(catetoA, catetoB) {
    const somaCatetos = (catetoA ** 2) + (catetoB ** 2)
    const hip = somaCatetos ** (1/2)
    return hip
}

console.log(teoremaPitagoras(4,3))
 */