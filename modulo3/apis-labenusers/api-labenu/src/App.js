import axios from 'axios';
import React from 'react';

export default class App extends React.Component {
  state = {
    labenusers: [],
    inputNome:'',
    inputEmail: ''
  }
  componentDidMount() {
  this.getUsuario ()
  }

  mudaNome = (e) => {
    this.setState({inputNome: e.target.value });
  };

  mudaEmail = (e) => {
    this.setState({inputEmail: e.target.value });
  };

  getUsuario = () => {
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
 
  postUsuario = () => {
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
      this.getUsuario();
    })
    .catch((err) => {
      console.log(err.response.data);
    });

  }

  deleteUsuario = (id) => {
    
    axios.delete(
      `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
      {
        headers:{
          Authorization: "rodrigo-rodrigues-joy"
        }
      }
    )
    .then(() => {
      alert("Usuário apagado com sucesso!");
      this.getUsuario();
    })
    .catch((err) => {
      console.log(err.response.data)
    })
  }

  render () {
    const lista = this.state.labenusers.map((user)=>{
      return (
        <li>
          <span key={user.id}>{user.name}</span> <button onClick={() => this.deleteUsuario(user.id)}>X</button>
        </li>
      )
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
        
       <button onClick={this.postUsuario}>Enviar</button>
       <button>Trocar de Tela</button>
       {lista}

      </div>
    );
  }

}
