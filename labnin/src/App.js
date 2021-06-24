import React from 'react'
import styled from 'styled-components'
import Saude from './pages/Saude'
import Servico from './pages/Servico'
import Tecnologia from './pages/Tecnologia'
import Header from './components/Header'
import Filter from './components/Filter'
const Body = styled.div`

  display: grid;
  grid-auto-rows: 90px 1fr 107px;
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
  render() {
    return (
      <Body>
     <Header/>
        {this.state.tela === 'saude' ? <Saude /> :
          this.state.tela === 'tecnologia' ? <Tecnologia /> :
            this.state.tela === 'servico' ? <Servico /> : <div>

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