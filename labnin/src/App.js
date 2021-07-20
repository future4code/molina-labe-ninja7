import React from 'react'
import styled from 'styled-components'
import Saude from './pages/Saude'
import Servico from './pages/Servico'
import Tecnologia from './pages/Tecnologia'
import Carrinho from './components/Carrinho'

import Filter from './components/Filter'

const Body = styled.div`
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  display: grid;
  
`
const RedesSociais = styled.img`
  width: 2%;
  margin:0.5%;
`
const Imagem = styled.img`
  width: 30%;
`
const ImagemIcones = styled.img`
  width: 139px;
`
const Main = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 3%;
  background-color: #F5F4FC;
  color: #13293D;
  padding: 1%;
`
const Icones = styled.div`
  display: flex;
  justify-content: space-around;
 `
const Footer = styled.div`
    text-align: center;
    background-color: #13293D;
    color:white;
    margin-top:0%;
    padding: 0%;
 `
 const Header1  = styled.div`
   display: flex;
    justify-content: space-around;
    background-color: #13293D;
   
    padding: 0.5%;
   
  `
  const Ninja = styled.img`
    width: 8%;
    border-radius: 100%;
    margin-right: 2%;
  `
 const NinjaTexto = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #13293D;
    color: white;
    padding: 1%;
   
  `
export default class App extends React.Component {
  state = {
    tela: 'principal',
  }
  onClickTelaSaude = () => {
    this.setState({ tela: 'saude' })
  }
  onClickTelaTecnologia = () => {
    this.setState({ tela: 'tecnologia' })
  }
  onClickTelaServico = () => {
    this.setState({ tela: 'servico' })
  }
  onClickHome=()=>{
    this.setState({tela:'principal'})
  }
  onClickCarrinho=()=>{
    this.setState({tela:'carrinho'})
  }
  render() {
    return (
      <Body>

    
           <NinjaTexto>
            
           <Ninja onClick={this.onClickHome} src="data:image/jpeg;base64,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"/>
           <h1>Labeninjas</h1>
           <button onClick={this.onClickCarrinho}>Carrinho</button>
          
           </NinjaTexto>
            
      

        {this.state.tela === 'saude' ? <Saude /> :
          this.state.tela === 'tecnologia' ? <Tecnologia /> :
            this.state.tela === 'servico' ? <Servico /> :
            this.state.tela==='carrinho' ? <Carrinho/>:
            <div>
                
              <Main>
                <div>
                  <h1>Conectando quem precisa com quem sabe fazer</h1>
                  <h1>Vem conhecer um pouco de nossos serviços!</h1>
                  <Icones>
                    <div onClick={this.onClickTelaSaude}>
                      <ImagemIcones src="https://site-clientes-assets-production.getninjas.com.br/images/icons/saude.svg" />
                      <h4>Saúde</h4>
                    </div>
                    <div onClick={this.onClickTelaTecnologia}>
                      <ImagemIcones src="https://site-clientes-assets-production.getninjas.com.br/images/icons/design-e-tecnologia.svg" />
                      <h4>Tecnologia</h4>
                    </div>
                    <div onClick={this.onClickTelaServico}>
                      <ImagemIcones src="https://site-clientes-assets-production.getninjas.com.br/images/icons/assistencia-tecnica.svg" />
                      <h4>Assistência técnica</h4>
                    </div>

                  </Icones>
                </div>
                <Imagem src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2a51ad96-d8b7-4df3-bf68-828d473c84ef%2Flabeninjas2.png?table=block&id=5269d1e7-6031-402f-b326-fa0ed68bc43f&spaceId=f97190af-c9c2-4592-9ae2-6311b6b728de&width=740&userId=ad5ed72e-da77-403d-b1c4-6bbb86da6e67&cache=v2" />
              </Main>

            </div>
        }
        <Footer>
          <h2>Gostou da gente? Segue a gente nas redes sociais!</h2>
          <RedesSociais src="https://image.flaticon.com/icons/png/512/87/87390.png" />
          <RedesSociais src="https://image.flaticon.com/icons/png/512/49/49351.png" />
        </Footer>
      </Body>
    )
  }
}