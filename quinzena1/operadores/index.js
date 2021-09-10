EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

1.
// bool1 = true / bool2 = false / bool3 = !bool2 = true

let resultado = bool1 && bool2
console.log("a. ", resultado)
// RESULTADO = false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 
// RESULTADO = false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)
// RESULTADO = true

console.log("d. ", typeof resultado)
// RESULTADO = Boolean

//--------------------------------------------------------------------------------------------------------------

RESPOSTA DAS QUESTÕES 2 E 3

// Como o prompt sempre retorna uma string por padrão, o que vai acontecer é que irá concatenar o primeiro número com o segundo número. Por exemplo se o usuário digitar 10 o primeiro número e 20 o segundo número o console irá retornar "1020" ao invés de 30. Para isso devemos colocar o Number() antes do prompt, desta forma:


let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

//--------------------------------------------------------------------------------------------------------------


EXERCÍCIOS DE ESCRITA DE CÓDIGO

1.

const idade = Number(prompt("Qual sua idade?")) 
const idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo?")) 

console.log("Sua idade é maior do que a do seu amigo?", idade > idadeAmigo)
console.log("A diferença da sua idade e a de seu amigo é", idade - idadeAmigo)

//--------------------------------------------------------------------------------------------------------------

2.

let numeroPar = Number(prompt("Digite um número par"))
console.log("O resto da divisão por 2 desse número é", numeroPar = numeroPar %= 2)
// Notei que sempre que o usuário digitar qualquer número par e for fazer o resto da divisão desse número par por 2, o resultado sempre será 0. De forma contrária, se o usuário digitar qualquer número ímpar, o resto da divisão por 2 sempre será 1.

//--------------------------------------------------------------------------------------------------------------

3.

let idade = Number(prompt("Qual a sua idade em anos?"))

console.log("Sua idade em meses é", idade = idade *= 12)
console.log("Sua idade em dias é", idade = idade *= 365)
console.log("Sua idade em horas é", idade = idade *= 365 * 24)

//--------------------------------------------------------------------------------------------------------------

4.

let numero1 = Number(prompt("Digite um número"))
let numero2 = Number(prompt("Digite outro número"))


console.log("O primeiro número é maior que o segundo?", numero1 > numero2)
console.log("O primeiro número é igual ao segundo?", numero1 === numero2)
console.log("O primeiro número é divisível pelo segundo?", numero1 % numero2 ===0)
console.log("O segundo número é divisível pelo primeiro?", numero2 % numero1 ===0)