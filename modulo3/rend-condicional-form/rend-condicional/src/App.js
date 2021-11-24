import React from 'react'
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import EtapaFinal from './components/EtapaFinal';
import styled from "styled-components"

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`
const Botao = styled.button`
  margin-top: 4vh;

`

export default class App extends React.Component{
  state = {
    etapa: 1,
  };

  renderizarEtapa = () => {
    switch (this.state.etapa){
      case 1:
      return <Etapa1 />;
      break;
      case 2:
      return <Etapa2 />;
      break;
      case 3:
      return <Etapa3 />;
      break;
      case 4:
      return <EtapaFinal />;
      break;
    }
  }

  irParaProximaEtapa = () => {
    this.setState({etapa: this.state.etapa +1})
  }
  render(){
 
    return(
      <MainContainer>
        
        {this.renderizarEtapa()}
        {this.state.etapa <4 && <Botao onClick={this.irParaProximaEtapa}>Próxima etapa</Botao> }

      </MainContainer>
    );
  }
}
