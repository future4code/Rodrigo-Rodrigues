import React from "react";
import axios from "axios";
import styled from "styled-components";

export default class AddTrackToPlaylist extends React.Component{



    state = {
        inputTrack: '',
        inputArtist: '',
        inputUrl: '',
        trackList: []
    }

    changeInputTrack = (event) => {
        this.setState({inputTrack: event.target.value})
    }

    changeInputArtist = (event) => {
        this.setState({inputArtist: event.target.value})
    }

    changeInputUrl = (event) => {
        this.setState({inputUrl: event.target.value})
    }


    addTrack = (id) => {
        let URL = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`

        let body = {
            name: this.state.inputTrack,
            artist: this.state.inputArtist,
            url: this.state.inputUrl
        }

        let authorization = {
          headers: {
            Authorization: "rodrigo-rodrigues-joy"
          }
        }

        axios.post(URL, body, authorization)
        .then((response) => {
          this.setState({inputTrack:"", inputArtist:'', inputUrl:''})
          alert("Música adicionada com sucesso!")
        })
        .catch((error) => {alert(error)})
      }

    render() {

        return (

            <div>
                <h3>Adiciona Musica</h3>

                <input 
                placeholder="Nome da música" 
                value={this.state.inputTrack} 
                onChange={this.changeInputTrack} />

                <input 
                placeholder="Nome do artista" 
                value={this.state.inputArtist} 
                onChange={this.changeInputArtist} />

                <input 
                placeholder="Link da música" 
                value={this.state.inputUrl} 
                onChange={this.changeInputUrl} />

                <button onClick={this.addTrack}>Adicionar</button>

            </div>
        )
    }
}