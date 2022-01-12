import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Match from './components/Match';
import Header from './components/Header';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;

`

function App() {

  const [page, setPage] = useState()
  return (
    <MainContainer>
    <Match />
    </MainContainer>
    
  );
}

export default App;
