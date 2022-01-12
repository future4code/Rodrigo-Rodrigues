import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Header from './Header';

const ContainerMatch = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: center;
  width: 32vw;
  height: 88vh;
  border: 2px solid black;

`

export default function Match(props) {

  const [pictures, setPictures] = useState({})

  const getPictures = () => {
    axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rodrigues/person`)
    .then((response) =>{
      setPictures(response.data)
      console.log(response.data.profile.name)

    }).catch((error) => {
      console.log(error)
    })
  }
  
  useEffect(() =>{ 
    getPictures()
  }, [pictures])
  return (
    <ContainerMatch>
        <Header></Header>
    </ContainerMatch>
      

  );
}


