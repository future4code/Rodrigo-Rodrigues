import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export default class Etapa3 extends React.Component{
  render(){
    
    return(
      <Container>
        <Form action="">
          <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
          <p>5. Por que você não terminou um curso de graduação?</p>
          <input type="text" />
          <p>6. Você fez algum curso complementar?</p>
          <select name="cursos" id="cursos">
            <option value="nenhum">Nenhum</option>
            <option value="curso-tecnico">Curso técnico</option>
            <option value="curso-de-ingles">Curso de inglês</option>
          </select>  
        </Form>

      </Container>
    );
  }
}
