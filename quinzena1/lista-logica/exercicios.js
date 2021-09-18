// Exemplos

// Exercício 0A
function soma() {
    // escreva seu código aqui
    const num1 = prompt('Digite o primeiro número')
    const num2 = prompt('Digite o segundo número')
  
    console.log(Number(num1) + Number(num2))
  }
  
  // Exercício 0B
  function imprimeMensagem() {
    // escreva seu código aqui
    const mensagem = prompt('Digite sua mensagem')
  
    console.log(mensagem)
  }
  
  // ---------------------------------------------------
  // Exercícios
  
  // Exercício 1
  function calculaAreaRetangulo() {
    // escreva seu código aqui
  
    const altura = prompt("Digite a altura")
    const largura = prompt("Digite a largura")
  
    const areaDoRetangulo = Number(altura) * Number(largura)
    console.log(areaDoRetangulo)
  }
  
  // Exercício 2
  function imprimeIdade() {
    // escreva seu código aqui
  
    const anoAtual = Number(prompt("Digite o ano em que estamos"))
    const anoNascimento = Number(prompt("Digite o seu ano de nascimento"))
  
    const idade = anoAtual - anoNascimento
    console.log(idade)
  }
  
  // Exercício 3
  function calculaIMC() {
    // escreva seu código aqui
    
    const peso = Number(prompt("Digite o seu peso em Kg"))
    const altura = Number(prompt("Digite a sua altura em metros"))
  
    const imc = peso / (altura * altura)
    console.log(imc)
  }
  
  // Exercício 4
  function imprimeInformacoesUsuario() {
    // escreva seu código aqui
  
    const nome = prompt("Digite seu nome")
    const idade = prompt("Digite a sua idade")
    const email = prompt("Digite o seu email")
  
    console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
  }
  
  // Exercício 5
  function imprimeTresCoresFavoritas() {
    // escreva seu código aqui
  
    const cor1 = prompt("Digite a primeira cor")
    const cor2 = prompt("Digite a segunda cor")
    const cor3 = prompt("Digite a terceira cor")
  
    const coresFavoritas = [cor1, cor2, cor3]
    console.log(coresFavoritas)
  }
  
  // Exercício 6
  function retornaStringEmMaiuscula() {
    // escreva seu código aqui
  
    const palavra = prompt("Digite uma palavra")
    const palavraMaiuscula = palavra.toUpperCase()
  
    console.log(palavraMaiuscula)
  }
  
  // Exercício 7
  function calculaIngressosEspetaculo() {
    // escreva seu código aqui
  
    const valorEspetaculo = Number(prompt("Digite o valor total do espetáculo"))
    const valorIngresso = Number(prompt("Digite o valor de cada ingresso"))
  
    const ingressosNecessarios = valorEspetaculo / valorIngresso
    console.log(ingressosNecessarios)
  }
  
  // Exercício 8
  function checaStringsMesmoTamanho() {
    // escreva seu código aqui
  
    const palavra1 = prompt("Digite uma palavra")
    const palavra2 = prompt("Digite outra palavra")
  
    const checkPalavra1 = palavra1.length
    const checkPalavra2 = palavra2.length
  
    console.log(checkPalavra1 === checkPalavra2)
  }
  
  // Exercício 9
  function checaIgualdadeDesconsiderandoCase() {
    // escreva seu código aqui
    
    const palavra1 = prompt("Digite uma palavra")
    const palavra2 = prompt("Digite outra palavra")
  
    const checkPalavra1 = palavra1.toUpperCase()
    const checkPalavra2 = palavra2.toUpperCase()
  
    console.log(checkPalavra1 === checkPalavra2)
  
  }
  
  // Exercício 10
  function checaRenovacaoRG() {
    // escreva seu código aqui
    
    let anoAtual =  prompt("qual ano atual")
    let nascimento = prompt("sua data de nascimento")
    let anoEmissao = prompt("ano da emissao da carteira")
    let idade = anoAtual - nascimento
    let anoRG = anoAtual - anoEmissao 
    console.log((idade <= 20 && anoRG >= 5 ) || ((idade > 20 && idade < 50) && anoRG >= 10) || (idade >= 50 && anoRG >= 15))
    }
  
  // Exercício 11
  function checaAnoBissexto() {
    // escreva seu código aqui
    const ano = Number(prompt("Digite um ano"))
    
    const multiplos400 = ano % 400 === 0
    const multiplos4 = ano % 4 === 0
    const multiplos100 = ano % 100 === 0
  
    console.log(multiplos400 === multiplos4 === multiplos100)
  
  }
  
  // Exercício 12
  function checaValidadeInscricaoLabenu() {
    // escreva seu código aqui
  
    const idade = prompt("Você tem mais de 18 anos?")
    const escolaridade = prompt("Você tem ensino médio completo?")
    const disponibilidadeHorario = prompt("Você tem disponibilidade durante o horário do curso?")
  
    const verificarIdade = idade === "sim" 
    const verificarEscolaridade = escolaridade === "sim"
    const verificarHorario = disponibilidadeHorario === "sim"
    console.log(verificarIdade === verificarEscolaridade === verificarHorario)
  }