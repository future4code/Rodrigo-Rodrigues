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

export default class Etapa1 extends React.Component{
  render(){
    
    return(
        <Container>
            <Form action=""> 
                <h1>ETAPA 1 - DADOS GERAIS</h1>
                <p>1. Qual o seu nome?</p>
                <input type="text" />
                <p>2. Qual a sua idade?</p>
                <input type="text" />
                <p>3. Qual o seu email?</p>
                <input type="text" />
                <p>4. Qual a sua escolaridade?</p>
                <select name="escolaridade" id="escolaridade">
                    <option value="ensino-medio-incompleto ">Ensino médio incompleto</option>
                    <option value="ensino-medio-completo">Ensino médio completo</option>
                    <option value="ensino-superior-incompleto">Ensino superior incompleto</option>
                    <option value="ensino-superior-completo">Ensino superior completo</option>
                </select> 
            </Form> 
        </Container>
      
    );
  }
}
