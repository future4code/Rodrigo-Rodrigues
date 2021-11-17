import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import FotoPerfil from './components/images/foto-perfil.jpg';
import LogoAlert from './components/images/logo-alert.png';
import LogoAutoglass from './components/images/logo-autoglass.png';
import IconEmail from './components/images/icon-email.png';
import IconEndereco from './components/images/icon-endereco.png';
import styled from "styled-components";

// const AppDiv = styled.div`
// *{
//   padding: 0;
//   margin: 0;
//   box-sizing: border-box;
 
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-top: 30px;
// `

// const PageSectionContainer = styled.div`
//   width: 40vw;
//   margin: 15px 0;
//   h3 {
//     text-align: center;
//     margin-bottom: 20px;
//   }
//   h2 {
//     display: flex;
//     justify-content: center;
//     margin-bottom: 20px;
//   }

// `

// const PageSectionContainerContato = styled.div` 
//   width: 40vw;
    
// `

function App() {
  return (
    <div className="App">
      <div className="PageSectionContainer">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={FotoPerfil} 
          nome="Rodrigo Carlos Rodrigues" 
          descricao="Oi, eu sou o Rodrigo! Sou estudante do curso de Desenvolvimento Web Full-Stack da escola de programação Labenu, e do curso de Análise e Desenvolvimento de Sistemas da Universidade Estácio de Florianópolis."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="PageSectionContainerContato">
        <CardPequeno 
          imagem={IconEmail}
          descricao="Email:"
          texto="rodriigo.rc@gmail.com"

        />
      </div>

      <div className="PageSectionContainerContato">
        <CardPequeno 
          imagem={IconEndereco}
          descricao="Endereço:"
          texto="Rua Joaquim Felício dos Santos 387"

        />
      </div>

      <div className="PageSectionContainer">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={LogoAutoglass} 
          nome="Autoglass" 
          cargo="Vendedor Técnico"
          descricao="Principais atividades: Venda e instalação de vidros e peças automotivas. Atendimento ao cliente dentro dos padrões de qualidade, avaliação de danos e vistoria de seguradores, envio de proposta de produtos e serviços e controle de estoque de peças. Atingimento de metas individuais acima da média." 
        />
        
        <CardGrande 
          imagem={LogoAlert}
          nome="Alert Brasil" 
          cargo="Atendente de Suporte Técnico"
          descricao="Principais atividades: Contato ativo para resolução de casos relacionados à suporte técnico. Utilização de roteiros e scripts nas ligações para reter ou recuperar clientes. Registro de informações nos sistemas de gestão e controle de planilhas em Excel. Atingimento constante das metas e bons feedbacks nas escutas realizadas pela supervisão." 
        />
      </div>

      <div className="PageSectionContainer">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
