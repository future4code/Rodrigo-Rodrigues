import axios from 'axios';
import React from 'react';

export default class App extends React.Component {
  state = {
    labenusers: [],
    inputNome:'',
    inputEmail: ''
  }
  componentDidMount() {
  this.pegaUsuario ()
  }

  pegaUsuario = () => {
  axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
  { 
    headers:{
      Authorization: "rodrigo-rodrigues-joy"
    }

  })
  .then((res) => {
    this.setState({ labenusers: res.data })
    console.log(res.data)
  })
  .catch((err) => {
    console.log(err.response.data)
  })
}

mudaNome = (e) => {
  this.setState({inputNome: e.target.value });
};

mudaEmail = (e) => {
  this.setState({inputEmail: e.target.value });
};

criarUsuario = () => {
  const URL =
    "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

  const body = {

      name: this.state.inputNome,
      email: this.state.inputEmail
  };
  const headers = {
    headers: {Authorization: "rodrigo-rodrigues-joy"}
  }

  axios
  .post(URL, body, headers)
  .then((res) => {
    console.log('')
    this.pegaUsuario();
  })
  .catch((err) => {
    console.log(err.response.data);
  });

}

  render () {
    const lista = this.state.labenusers.map((user)=>{
      return <p key={user.id}>{user.name}</p>
    })
    return (
      <div>
        
      
        <input 
        placeholder={'Nome'}
        value = {this.state.inputNome}
        onChange = {this.mudaNome}
        />
      

        
        <input
        placeholder = {'Email'}
        value = {this.state.inputEmail}
        onChange = {this.mudaEmail}
        />
        
       <button onClick={this.criarUsuario}>Enviar</button>
       <button>Trocar de Tela</button>
       {lista}

      </div>
    );
  }

}
