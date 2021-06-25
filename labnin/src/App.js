import React from 'react'
import styled from 'styled-components'
import Saude from './pages/Saude'
import Servico from './pages/Servico'
import Tecnologia from './pages/Tecnologia'
import Header from './components/Header'
import NavBar from './components/NavBar'

const Body = styled.div`
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  display: grid;
  
`
const Linha = styled.p`
color: black;
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
        <NavBar/>
        <Header/>

        {this.state.tela === 'saude' ? <Saude /> :
          this.state.tela === 'tecnologia' ? <Tecnologia /> :
            this.state.tela === 'servico' ? <Servico /> : <div>
              <Linha>_______________________________________________________________________________________________________________________________</Linha>
              <Main>
                <div>
                  {/* <h1>Conectando quem precisa com quem sabe fazer</h1>
                  <h1>Vem conhecer um pouco de nossos serviços!</h1> */}
                  <Icones>
                    <div onClick={this.onClickTelaSaude}>
                      <ImagemIcones src="http://paiva1-labeninja.surge.sh/static/media/consultoria.d2641770.png" />
                      <h4>Saúde</h4>
                    </div>
                    <div onClick={this.onClickTelaTecnologia}>
                      <ImagemIcones src="http://paiva1-labeninja.surge.sh/static/media/webdesign.2716ed47.png" />
                      <h4>Tecnologia</h4>
                    </div>
                    <div onClick={this.onClickTelaServico}>
                      <ImagemIcones src="http://paiva1-labeninja.surge.sh/static/media/suporte.fee53cf4.png" />
                      <h4>Assistência técnica</h4>
                    </div>

                  </Icones>
                </div>
                <Imagem src="http://paiva1-labeninja.surge.sh/icone-ninja3.png" />
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