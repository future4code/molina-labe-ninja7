import React from 'react'
import { url } from '../contants/constant'
import axios from 'axios'
import styled from 'styled-components'
import Saude from '../pages/Saude'
import Servico from '../pages/Servico'
import Tecnologia from '../pages/Tecnologia'
const Main=styled.div`
    background-color: #F5F4FC;
`
const Botao=styled.button`
    margin: 1%;
    width: 25%;
    padding: 1%;
    border-radius: 5%;
    background-color: #13293D;
    color: white;
`
const SepararBotao= styled.div`
    display: flex;
    justify-content: center;
`
const CarrinhoCompra=styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
    margin-right:20%;
    margin-left: 20%;
    margin-top: 2%;
    padding: 1%;
    background-color: rgb(223, 219, 240);


`
const SepararValor=styled.div`
    display: flex;
    justify-content: space-between;
    margin-right:20%;
    margin-left: 20%;
    margin-top: 1%;
`
const Titulo = styled.h2`
    text-align: center;
`
const Icone = styled.img`
    width: 8%;
    height: 8vh;
`
const headers = {
    headers: {
        Authorization: "e857c53a-24f4-4fb0-801b-ff6226302fca"
    }
}

export default class Carrinho extends React.Component {
    state = {
        clickTaken: true,
        array: [],
        arrayPreco: [],
        trocaTela:'carrinho'
    }
    onClickTelaSaude = () => {
        this.setState({ trocaTela: 'saude' })
      }
      onClickTelaTecnologia = () => {
        this.setState({ trocaTela: 'tecnologia' })
      }
      onClickTelaServico = () => {
        this.setState({trocaTela: 'servico' })
      }
    updateJob = (id) => {
        const body = {
            taken: this.state.clickTaken
        }
        axios.post(`${url}/jobs/${id}`, body, headers)
            .then(() => {
                alert('Seu pedido foi retirado do carrinho')
                this.getAllJobs()
                this.setState({ clickTaken: false })
            }).catch((err) => {
                console.log('erro', err.response.data)
            })
    }
    componentDidMount() {
        this.getAllJobs()

    }
    getAllJobs = () => {
        axios.get(`${url}/jobs`, headers)
            .then((res) => {
                console.log('get', res.data.jobs)
                this.setState({ clickTaken: false })
                this.setState({ array: res.data.jobs })
               
            })
            .catch((err) => {
                console.log('erro', err.response)
            })
    }
    ClickFinalizar=()=>{
        alert('Sua compra foi realizada com sucesso!')
        this.setState({clickTaken:false})
    }
    render() {
        let soma = 0
        const array3 = this.state.array
        let preco
        const novo = array3.filter((c) => {


            return c.taken
        }).map((c) => {
            return c.price
        })
        for (let i = 0; i < novo.length; i++) {
            soma += novo[i]
        }

        const carrinho = this.state.array.map((Taken) => {

            if (Taken.taken) {
                return (
                    <CarrinhoCompra>
                        <h2>{Taken.description}</h2>
                        <h2>Preço: R${Taken.price}</h2>
                        <Icone src='data:image/png;base64,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' onClick={() => this.updateJob(Taken.id)}/>
                    </CarrinhoCompra>
                )
            }

        })
       
        return (
            <div>
                {this.state.trocaTela==='saude' ? <Saude/>:
                this.state.trocaTela==='servico'? <Servico/>:
                this.state.trocaTela==='tecnologia'? <Tecnologia/>:
                <Main>
                {carrinho}
                <SepararValor>
                <h2>Valor Total: R${soma},00</h2>
                <Botao onClick={this.ClickFinalizar}>Contratar serviços</Botao>
                </SepararValor>
                
                <Titulo>Deseja adicionar mais algum dos serviços abaixo?</Titulo>
                <SepararBotao>
                <Botao onClick={this.onClickTelaServico} >Assistência Técnica</Botao>
                <Botao onClick={this.onClickTelaSaude}>Saúde</Botao>
                <Botao onClick={this.onClickTelaTecnologia}>Tecnologia </Botao>
                </SepararBotao>
               
                </Main>
                }
                
            </div>
        )
    }
}