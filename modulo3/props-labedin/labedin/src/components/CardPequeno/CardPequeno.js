import React from 'react';
import styled from "styled-components";

const SmallCardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 56px;


    img {
    width: 36px;
    margin-right: 10px;
    }
`
const DivContato = styled.div`
    display: flex;   

    p {
    margin-left: 8px;
    }


`

function CardPequeno(props) {
    return (
        <SmallCardContainer>
            <img src={ props.imagem } />
            <DivContato>
                <h4>{ props.descricao }</h4>
                <p>{ props.texto }</p>
            </DivContato>
        </SmallCardContainer>
    )
}

export default CardPequeno;