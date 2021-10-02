/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    // let cartasJogador = []
    // let cartasComputador = []
    
    // if(confirm("Bem-vindo(a) ao jogo de Blackjack!" + "\n" + "Quer iniciar uma nova rodada?")) {
    
    //    let cliqueOk = false
    
    //    while(!cliqueOk){
    //       cartasJogador.push(comprarCarta())
    //       cartasJogador.push(comprarCarta())
    //       cartasComputador.push(comprarCarta())
    //       cartasComputador.push(comprarCarta())
    //       if((cartasJogador[0].valor === 11 && cartasJogador[1].valor === 11) ||
    //          (cartasComputador[0].valor === 11 && cartasComputador[1].valor === 11)){
             
    //          cartasJogador = []
    //          cartasComputador = []
    //       }
    //       else{
    //          cliqueOk = true
    //       }   
    //    }
    
    
    // let comprarMaisCartas = true
    
    // while(comprarMaisCartas){
    //    let texto = ""
    //    let pontos = 0
    
    //    for(let carta of cartasJogador){
    //       texto += carta.texto + " "
    //       pontos += carta.valor
    //    }
    //    if(pontos > 21){
    //       comprarMaisCartas = false
    //    }
    //    else{
    //       let confirmComprarMaisCartas = confirm(`Suas cartas são ${texto}. A carta revelada do computador é ${cartasComputador[0].texto}.` + "\n" + "Deseja comprar mais uma carta?")
          
    //       if(confirmComprarMaisCartas === true){
    //          cartasJogador.push(comprarCarta())
    //       }
    //       else{
    //          comprarMaisCartas = false
    //       }
    //    }
    // }
    
    // let pontosJogador = 0
    // let pontosComputador = 0
    // let textoJogador = ""
    // let textoComputador = ""
    
    // for(let carta of cartasComputador){
    //    pontosComputador += carta.valor
    //    textoComputador += carta.texto + " "
    // }   
       
    // for (let carta of cartasJogador){
    //    pontosJogador += carta.valor
    //    textoJogador += carta.texto + " "
    // }
    
    
    // if(pontosJogador <= 21){
    //    while(pontosComputador < pontosJogador && pontosComputador <= 21){
    //       cartasComputador.push(comprarCarta())
    //       pontosComputador = 0
    //       textoComputador = ""
    //       for (let carta of cartasComputador){
    //          pontosComputador += carta.valor
    //          textoComputador += carta.texto + " "
    //       }
    //    }
    // }
    
    // let resultado = ""
    
    // if (pontosJogador > pontosComputador && pontosJogador <= 21){
    //    resultado = "O usuário ganhou!"
    // } 
    // else if(pontosComputador > pontosJogador && pontosComputador <= 21){
    //    resultado = "O computador ganhou!"
    // } 
    // else if(pontosComputador > 21 && pontosJogador <= 21){
    //    resultado = "O usuário ganhou!"
    // } 
    // else if(pontosJogador > 21 && pontosComputador <= 21){
    //    resultado = "O computador ganhou!"
    // } 
    // else{
    //    resultado = "Empate!"
    // }
    
     
    //  alert(`Usuario - Cartas: ${textoJogador} - Pontuação: ${pontosJogador}` + 
    //    "\n" + 
    //    `Computador - Cartas: ${textoComputador} - Pontuação: ${pontosComputador}` + 
    //    "\n" + 
    //    resultado
    // )
    
    // }
    // else {
    //    alert("O jogo acabou.")
    // }
    
