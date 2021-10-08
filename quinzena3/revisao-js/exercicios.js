// EXERCÍCIO 01
function inverteArray(array) {
  
  const arrayInvertido = []

  for(let i = array.length-1; i >= 0; i-- ){
    arrayInvertido.push(array[i])
    
  }
  console.log(arrayInvertido)
  return arrayInvertido
}
// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {

  const arrayNumerosParesElevados = []
  for(let i = 0; i < array.length; i++){
    if(array[i] % 2 === 0){
      array[i] = array[i] ** 2  
      arrayNumerosParesElevados.push(array[i])
    }
  }
  console.log(arrayNumerosParesElevados)  
  return arrayNumerosParesElevados
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {

  const arrayNumerosPares = []
  for(let i = 0; i < array.length; i++){
    if(array[i] % 2 === 0){
       arrayNumerosPares.push(array[i])
    }
  }
  console.log(arrayNumerosPares)  
  return arrayNumerosPares
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  
  let maiorNumero = -Infinity;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > maiorNumero) {
      maiorNumero = array[i];
    }
  }
  console.log(`O maior número é ${maiorNumero}`)
  return maiorNumero;
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  console.log(`A quantidade de elementos do array é ${array.length}`)
  return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const arrayDeBooleanos = []

  const booleano1 = true 
  const booleano2 = false 
  const booleano3 = !booleano2 // V
  const booleano4 = !booleano3 // F

  const elemento1 = booleano1 && booleano2 && !booleano4
  const elemento2 = (booleano1 && booleano2) || !booleano3
  const elemento3 = (booleano2 || booleano3) && (booleano4 || booleano1)
  const elemento4 = !(booleano2 && booleano3) || !(booleano1 && booleano3)
  const elemento5 = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)

  arrayDeBooleanos.push(elemento1,elemento2,elemento3,elemento4,elemento5)
  console.log(arrayDeBooleanos)
  return arrayDeBooleanos

}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  let numerosPares = []
  for(let i = 0; i < n; i++){
    i % 2 === 0
    numerosPares.push(i*2)
  }
  console.log(numerosPares)
  return numerosPares
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {

  if(a === b && a === c && b === c){
    return 'Equilátero'
  }
  else if((a === b && a !== c) || (a === c && a !== b)){
    return 'Isósceles'
  }
  else{
    return 'Escaleno'
  }

}
// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  
  let resultado = {maiorNumero: 0, maiorDivisivelPorMenor: false, diferenca: 0}
  let menorNumero
  if(num1 >= num2){
    menorNumero = num2
    resultado.maiorNumero = num1
    resultado.diferenca = num1 - num2
  }
  else if(num1 <= num2) {
    menorNumero = num1
    resultado.maiorNumero = num2
    resultado.diferenca = num2 - num1
  }
  if(resultado.maiorNumero % menorNumero === 0){
    resultado.maiorDivisivelPorMenor = true

  }
  return resultado    

}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  
}

// EXERCÍCIO 11
function ordenaArray(array) {
  
  for (let last = array.length-1; last > 0; last --) {
    for (let i = 0; i < last; i++) {
      if(array[i] > array[i+1]){
        [array[i], array[i+1]] = [array[i+1], array[i]]
      }
    }
  }
  console.log(array)
  return array
}

// EXERCÍCIO 12
function filmeFavorito() {
 let filme = {}
  filme.nome = "O Diabo Veste Prada"
  filme.ano = 2006
  filme.diretor = "David Frankel"
  filme.atores = ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]

  console.log(filme)
  return filme
}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
  let filme = {}
  filme.nome = "O Diabo Veste Prada"
  filme.ano = 2006
  filme.diretor = "David Frankel"
  filme.atores = ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]

  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}


// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

  
}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
