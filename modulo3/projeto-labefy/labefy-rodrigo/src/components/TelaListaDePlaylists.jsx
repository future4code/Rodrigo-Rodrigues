import React from 'react';
import axios from 'axios'
import styled from 'styled-components'

const PlaylistItem = styled.p`
    margin-bottom: 50px;
    margin-left: 10px;
`

const ShowTracksButton = styled.button`
   font-weight: bold;
    background-color: #BDECA6;
    margin-left: 10px;
    height: 4vh;
    width: 13vw;
    border-radius: 10px;
    :hover{
        font-weight: bold;
        color: #F5F5F5;
        background-color: #1ed760;
    }
`
const DeleteButton = styled.button`
    font-weight: bold;
    background-color: #BDECA6;
    margin-left: 10px;
    height: 4vh;
    width: 9vw;
    border-radius: 10px;
    :hover{
        font-weight: bold;
        color: #F5F5F5;
        background-color: #FF0000;
    }
`

class TelaListaDePlaylists extends React.Component {

    state = {
        playlists: [],
        idPlaylist: ""
    }

    componentDidMount() {
        this.getPlaylists()
        console.log("Playlists exibidas na tela")
    }

    getPlaylists = () =>{

        let URL= "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        let authorization = {
            headers: {
                authorization: "rodrigo-rodrigues-joy"
            }
        }
        axios.get(URL, authorization)
        .then((response) => {
            this.setState({playlists: response.data.result.list})
        })
        .catch((error) => {
            console.log(error.response.data)
        })
    }

    deletePlay = (id) => {

        axios.delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
          {
            headers:{
              Authorization: "rodrigo-rodrigues-joy"
            }
          }
        )
        .then((res) => {
          alert("Playlist apagada com sucesso!")
          this.getPlaylists();
        })
        .catch((err) => {
          console.log(err.response.data)
        })
    }


    render() {

        let playListsMap = this.state.playlists.map((playlist)=>{
            return(

                <PlaylistItem>
                    <strong> Nome:</strong> {playlist.name} 
                    <ShowTracksButton>Mostrar tracks da playlist</ShowTracksButton>
                    <DeleteButton onClick={() => this.deletePlay(playlist.id)}>Apagar Playlist</DeleteButton>
                </PlaylistItem>

            )
        })

        return(
            <div key={playListsMap.id}>
                <h2>Quantidade de playlists: {playListsMap.length}</h2>

                <p> {playListsMap} </p>
            </div>
        )
    }

}
export default  TelaListaDePlaylists 