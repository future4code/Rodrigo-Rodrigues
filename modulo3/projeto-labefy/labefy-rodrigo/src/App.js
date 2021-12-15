import React from 'react';
import styled from 'styled-components';
import TelaCriarPlaylists from './components/TelaCriarPlaylists';
import TelaListaDePlaylists from './components/TelaListaDePlaylists';
import AddTrackToPlaylist from './components/AddTrackToPlaylist';

const ShowButton = styled.button`
  font-weight: bold;
  background-color: #BDECA6;
  margin-left: 10px;
  height: 4vh;
  width: 14vw;
  border-radius: 10px;
  :hover{
    font-weight: bold;
    color: #F5F5F5;
    background-color: #1ed760;
  }

`
class App extends React.Component {
  state  = {
    showPlaylists: false
  }

    changeConditionalOFList =  () => {
      this.state.showPlaylists ? this.setState({showPlaylists: false}) : this.setState({showPlaylists: true})
      }
           

  render(){

    let showList = <h1>Página de erro</h1> 
    if(this.state.showPlaylists){
      showList = <TelaListaDePlaylists />
    }else{
      showList= ""
    }

    return (
      <div>
        <TelaCriarPlaylists />
        <br/><hr />
        <br/><ShowButton onClick={this.changeConditionalOFList}>Mostrar/Esconder Playlists</ShowButton>
        {showList}
      </div>

  );
  }
}

export default App;