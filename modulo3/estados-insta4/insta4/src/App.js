import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {

  state = {

    posts:[
      {
        nomeUsuarioPost: "Paulinha",
        fotoUsuarioPost: "https://picsum.photos/12/15",
        fotoPost: "https://picsum.photos/200/150"
      },

      {
        nomeUsuarioPost: "Carol",
        fotoUsuarioPost: "https://picsum.photos/50/51",
        fotoPost: "https://picsum.photos/200/151"
      },

      {
        nomeUsuarioPost: "Laura",
        fotoUsuarioPost: "https://picsum.photos/50/52",
        fotoPost: "https://picsum.photos/200/152"
      }
        
    ],
    valorInputUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""
    
  }
  
  adicionarPost = (event) => {
    event.preventDefault()
    const novoPost = {
      nomeUsuarioPost: this.state.valorInputUsuario,
      fotoUsuarioPost: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    };

    const novoPostCopia = [...this.state.posts, novoPost];

    this.setState({posts: novoPostCopia});
    this.setState({
      valorInputUsuario: "",
      valorInputFotoUsuario: "",
      valorInputFotoPost: ""
    });

  }
  onChangeUsuario = (event) => {

    this.setState({valorInputUsuario: event.target.value});

  }

  onChangeFotoUsuario = (event) => {

    this.setState({valorInputFotoUsuario: event.target.value});

  }

  onChangeFotoPost = (event) => {

    this.setState({valorInputFotoPost: event.target.value});

  }
  


  render() {
    
    const arrayComponentesPost = this.state.posts.map((post) => {
      return <Post 
      nomeUsuario={post.nomeUsuarioPost} 
      fotoUsuario={post.fotoUsuarioPost} 
      fotoPost={post.fotoPost} 
      />
      
    })

    return (
      <MainContainer>
        <form>
          <input
            value={this.state.valorInputUsuario}
            onChange={this.onChangeUsuario}
            placeholder={"Nome"}
          />

          <input
            value={this.state.valorInputFotoUsuario}
            onChange={this.onChangeFotoUsuario}
            placeholder={"Foto perfil"}
          />

          <input
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeFotoPost}
            placeholder={"Foto do post"}
          />

          <button onClick={this.adicionarPost}>Enviar</button>

        </form>

        {arrayComponentesPost}
      </MainContainer>
      
    );
  }
}

export default App;
