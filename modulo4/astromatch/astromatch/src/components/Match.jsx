import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Header from './Header';

const ContainerMatch = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  width: 32vw;
  height: 88vh;
  border: 2px solid black;
  border-radius: 8px;
  
`
const ContainerImageProfile = styled.div`
  overflow: hidden;
  width: 98%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  span{
    font-size: 2rem;
    font-weight: bold;
  }

`
const PhotoProfile = styled.img`
  width: 100%;
  height: 100%;

`
const DivButtonsFooter = styled.div`
  display: flex; 
  align-items: flex-start;
  justify-content: space-around;

`

export default function Match(props) {

  const [profile, setProfile] = useState({})
  const [chooseProfile, setChooseProfile] = useState([])

  const getProfile = () => {
     axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Rodrigo-Rodrigues/person
     `)
    .then((response) =>{
      setProfile(response.data.profile)
      console.log(response.data.profile.name)

    }).catch((error) => {
      console.log(error)
    })
  }
  
  useEffect(() =>{ 
    getProfile()
  }, [])
  
  console.log(profile)

  
  const chooseProfileFunction = async (escolha) => {
    const body = {
      id: `${profile.id}`,
      choice: escolha
    }
    await axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rodrigo-rodrigues/choose-person", body)

    .then((response) => {
      getProfile()

    }).catch((error) => {
      console.log(error)
    })

    
  }

  return (
    <ContainerMatch>
      <Header />

      <ContainerImageProfile>

          <PhotoProfile src={profile.photo}/>

        </ContainerImageProfile>
        <p> {profile.name}, {profile.age}</p>
        <p>{profile.bio}</p>
        <DivButtonsFooter>
        <button onClick={() => chooseProfileFunction(false)}>Deslike</button>
        <button onClick={() => chooseProfileFunction(true)}>Like</button>
        </DivButtonsFooter>
    </ContainerMatch>
      

  );
}


