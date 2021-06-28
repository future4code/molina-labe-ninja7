import React from 'react'
import styled from 'styled-components'
import Saude from './pages/Saude'
import Servico from './pages/Servico'
import Tecnologia from './pages/Tecnologia'
import Header from './components/Header'
import NavBar from './components/NavBar'
import './components/app.css'
import Footer from './components/Footer'

const Body = styled.div`
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  display: grid;
  
`
const Linha = styled.p`
color: black;
max-width: 100vw;
`
const QuemSomos = styled.h1`
font-size: 12px;
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
              <Linha>________________________________________________________________________________________________________________________</Linha>
              <Main>
                <div>
                  {/* <h1>Conectando quem precisa com quem sabe fazer</h1>
                  <h1>Vem conhecer um pouco de nossos serviços!</h1> */}
                  <Icones>
                    <div onClick={this.onClickTelaSaude}>
                      <ImagemIcones className="Cardimagem" src="http://paiva1-labeninja.surge.sh/static/media/consultoria.d2641770.png" />
                      <h4>Saúde</h4>
                    </div>
                    <div onClick={this.onClickTelaTecnologia}>
                      <ImagemIcones className="Cardimagem" src="http://paiva1-labeninja.surge.sh/static/media/webdesign.2716ed47.png" />
                      <h4>Tecnologia</h4>
                    </div>
                    <div onClick={this.onClickTelaServico}>
                      <ImagemIcones className="Cardimagem" src="http://paiva1-labeninja.surge.sh/static/media/suporte.fee53cf4.png" />
                      <h4>Assistência técnica</h4>
                    </div>

                  </Icones>
                </div>
              <QuemSomos>GetNinjas é a maior plataformade <br/> contratação de serviços do Brasil.<br/> Conectamos Profissionais de todo<br/> o Brasil com pessoas solicitando serviço, <br/>atendendo com qualidade, <br/>facilidade e rapidez todos os<br/> tipos de necessidade.</QuemSomos>
              </Main>

            </div>
        }
          <Footer/>
      </Body>
    )
  }
}