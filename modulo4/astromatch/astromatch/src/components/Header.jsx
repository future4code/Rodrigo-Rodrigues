import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;


`
const ImageTinder = styled.img`
    width: 12vw;
`
const ImageMatch = styled.img`
    width: 2vw;
`
const DivTinder = styled.div`
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
`
const DivMatch = styled.div`
    margin-right: 8px;
    
`
export default function Header() {
  return (
    <ContainerHeader>
        <DivTinder>
        <ImageTinder src='/assets/tinder.jpg' />
        </DivTinder>

        <DivMatch>
        <ImageMatch src='/assets/icontinder.jpg' />
        </DivMatch>
        
    </ContainerHeader>
      

  );
}


