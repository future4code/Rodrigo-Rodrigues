import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const ContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;


`
const ContainerImages = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  
`

const ImageTinder = styled.img`
  width: 12vw;
  
`

const ImageMatch = styled.img`
  width: 2vw;
`


export default function Header() {
  return (
    <ContainerHeader>

      <ContainerImages>
        <div>
          <ImageTinder src='/assets/tinder.jpg' />
        </div>
        <div>
          <ImageMatch src='/assets/icontinder.jpg' />
        </div>
        
      </ContainerImages>

    </ContainerHeader>
      

  );
}
