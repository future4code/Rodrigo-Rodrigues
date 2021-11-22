import React from 'react'
import styled from 'styled-components'


const MainContainer = styled.div`
  display: flex;
  justify-content: center;

`
const ContainerLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  border: 1px solid black;
  background-color: #e9e9e9;
  width: 44vw;
  height: 84vh;
  margin-top: 6vh;
  
`
const ContentArea = styled.div`  
  padding-left: 10px;
  padding-bottom: 16px;
  max-width: 520px;
  
  div{
    padding: 10px 0;
  }
  p{
    word-break: break-all;

  }
  span{
    font-weight: bold;
  }

`

const Form = styled.form`
  display: flex;
  align-items: center;
  
`

const InputUsuario = styled.input`
  margin-left: 6px;
  width: 10vw;
  padding: 5px;
  border-radius: 8px;

`
const InputMensagem = styled.input`
  margin-left: 6px;
  width: 24vw;
  padding: 5px;
  border-radius: 8px;
`

const BotaoEnviar = styled.button`
  margin-left: 6px;
  width: 6vw;
  padding: 5px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 14px;

  :hover{
    font-weight: bold;
    color: #f5f5f5;
    background-color: #00bb2d;
    transition: all ease 0.3s;
  }
  

`

class App extends React.Component{

  state = {

    mensagens:[
      {
        nomeUsuario: "",
        mensagemUsuario: ""
      },

    ],
    valorInputNomeUsuario: "",
    valorInputMensagemUsuario: ""

  }

  adicionaMensagem = (event) => {
    event.preventDefault()
    const novaMensagem ={
      nomeUsuario: this.state.valorInputNomeUsuario,
      mensagemUsuario: this.state.valorInputMensagemUsuario
    };

    const copiaMensagem = [...this.state.mensagens,novaMensagem];

    this.setState({ mensagens: copiaMensagem });
    this.setState({
      valorInputNomeUsuario: "",
      valorInputMensagemUsuario: ""
    })
  };

  onChangeInputNome = (event) => {
    this.setState({ valorInputNomeUsuario: event.target.value });
  };

  onChangeInputMensagem = (event) => {
    this.setState({ valorInputMensagemUsuario: event.target.value });
  };

    
  render() {
    
    const arrayMensagensMap = this.state.mensagens.map((mensagem) => {
      return (
        <div> 
          <p> <span>{mensagem.nomeUsuario}</span> {mensagem.mensagemUsuario}</p> 
        </div>
      )
    })

    return (
      <MainContainer>
        <ContainerLayout>
          <ContentArea>
            {arrayMensagensMap}
          </ContentArea>  
          <Form>
            <InputUsuario 
            value={this.state.valorInputNomeUsuario}
            onChange={this.onChangeInputNome}
            placeholder={"Nome Usuário"}
            />

            <InputMensagem 
              value={this.state.valorInputMensagemUsuario}
              onChange={this.onChangeInputMensagem}
              placeholder={"Mensagem"}
            />

            <BotaoEnviar onClick={this.adicionaMensagem}>Enviar</BotaoEnviar>
          </Form>
            
        </ContainerLayout>
        
      </MainContainer>
    );
  }
}

export default App;

