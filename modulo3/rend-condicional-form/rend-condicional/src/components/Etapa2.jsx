import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export default class Etapa2 extends React.Component{
  render(){
    
    return(
      <Container>
        <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
        <p>5. Qual curso?</p>
        <input type="text" />
        <p>6. Qual unidade de ensino?</p>
        <input type="text" />

      </Container>
    );
  }
}
