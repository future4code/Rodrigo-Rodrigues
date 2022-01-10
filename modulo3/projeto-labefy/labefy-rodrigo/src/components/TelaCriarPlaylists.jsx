import React from 'react';
import axios from 'axios'
import styled from 'styled-components'

const CreateButton = styled.button`
  font-weight: bold;
  background-color: #BDECA6;
  margin-left: 10px;
  height: 4vh;
  width: 8vw;
  border-radius: 10px;
  :hover{
    font-weight: bold;
    color: #F5F5F5;
    background-color: #1ed760;
  }
`

class TelaCriarPlaylists extends React.Component {

  state = {
    inputText: ""
  }

  changeInputText = (event) => {
    this.setState({inputText: event.target.value})
  }

  createPlaylist = () => {
    let URL = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

    let body = {
        "name": this.state.inputText 
    }
    let authorization = {
      headers: {
        Authorization: "rodrigo-rodrigues-joy"
      }
    }

    axios.post(URL, body, authorization)
    .then((response) => {
      this.setState({inputText:""})
      alert("Playlist criada com sucesso!")
    })
    .catch((error) => {
        alert(error)
    })
  }


  render(){
  return (


     <div>
        <h3>Criar Playlist</h3>
        <div>
            <input placeholder="Nome da Playlist" value={this.state.inputText} onChange={this.changeInputText} />
            <CreateButton onClick={this.createPlaylist}>Criar playlist</CreateButton>
        </div>
      </div>
  )}
}

export default TelaCriarPlaylists 