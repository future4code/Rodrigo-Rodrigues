import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Match from './components/Match';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  margin: 0;
  padding: 0;
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;

`

function App() {

  return (
    <MainContainer>
      <Match />
    </MainContainer>
    
  );
}

export default App;
