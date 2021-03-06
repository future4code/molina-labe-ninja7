import React from 'react'
import axios from 'axios'
import { url } from '../contants/constant'
import Saude from './Saude'
import Tecnologia from './Tecnologia'
import Servico from './Servico'
import styled from 'styled-components'
const Imagem = styled.img`
    width: 20%;
    border-radius: 100%;
`
const Descrever = styled.input`
    height: 10vh;
    width: 50%;
    margin-bottom: 1%;
`
const Cadastros = styled.h1`
    text-align: center;
`
const AlinharBotao=styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
const Botao=styled.button`
    margin: 1%;
    padding: 1%;
    border-radius: 5%;
    color: #13293D;
    background-color: rgb(223, 219, 240);
    width: 100%;
`
const Main=styled.div`
    background-color: #F5F4FC;
`
const SepararInputs = styled.div`
    margin: 2%;

`

const Adicionar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 20%;
    margin-left: 20%;
`

const InputFlex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    margin-right: 30%;
    margin-left: 30%;
    padding: 2%;
    margin-top: 3%;
    margin-bottom: 3%;
    background-color: rgb(223, 219, 240);
`

const headers = {
    headers: {
        Authorization: "e857c53a-24f4-4fb0-801b-ff6226302fca"
    }
}
export default class Cadastro extends React.Component {
    state = {
        inputTitulo: '',
        inputDrescricao: '',
        inputPreco: '',
        inputPagamentos: '',
        inputData: '',
        array: [],
        arrayServicos: [],
        arraySaude: [],
        arrayTecnologia: [],
        irParaTela: 'cadastro'
    }

    onChangeTitulo = (event) => {
        this.setState({ inputTitulo: event.target.value })
    }
    onChangeDescricao = (event) => {
        this.setState({ inputDrescricao: event.target.value })
    }
    onChangePreco = (event) => {
        this.setState({ inputPreco: event.target.value })
    }
    onChangePagamentos = (event) => {
        this.setState({ inputPagamentos: event.target.value })
    }
    onChangeData = (event) => {
        this.setState({ inputData: event.target.value })
    }
    componentDidMount() {
        this.getAllJobs()
    }
    getAllJobs = () => {
        axios.get(`${url}/jobs`, headers)
            .then((res) => {
                console.log('get', res.data.jobs)
                this.setState({ array: res.data.jobs })
                const Lista = this.state.array.map((dados) => {
                    if (dados.title === 'Assist??ncia t??cnica') {
                        const copiaArrayServi??os = [...this.state.arrayServicos, dados]
                        this.setState({ arrayServicos: copiaArrayServi??os })
                    } else if (dados.title === 'Sa??de') {
                        const copiaArraySaude = [...this.state.arraySaude, dados]
                        this.setState({ arraySaude: copiaArraySaude })

                    } else if (dados.title === 'Tecnologia') {
                        const copiaArrayTecnologia = [...this.state.arrayTecnologia, dados]
                        this.setState({ arrayTecnologia: copiaArrayTecnologia })

                    }
                })
            })
            .catch((err) => {
                console.log('erro get', err.response)
            })
    }
    createJob = () => {
        const body = {
            title: this.state.inputTitulo,
            description: this.state.inputDrescricao,
            price: Number(this.state.inputPreco),
            paymentMethods: [this.state.inputPagamentos],
            dueDate: this.state.inputData
        }
        axios.post(`${url}/jobs`, body, headers)
            .then((res) => {
                this.getAllJobs()
                this.setState({ inputTitulo: '' })
                this.setState({ inputDrescricao: '' })
                this.setState({ inputPreco: '' })
                this.setState({ inputPagamentos: '' })
                this.setState({ inputData: '' })
                this.setState({ irParaTela: 'cadastrado' })
            })
            .catch((err) => {
                console.log(err.response.data)
            })
    }
    onClickServico = () => {
        this.setState({ irParaTela: 'servico' })
    }
    onClickSaude = () => {
        this.setState({ irParaTela: 'saude' })
    }
    onClickTecnologia = () => {
        this.setState({ irParaTela: 'tecnologia' })
    }
    render() {
        console.log('array', this.state.array)
        console.log('array servi??os', this.state.arrayServicos)
        console.log('array Saude', this.state.arraySaude)
        console.log('array tecnologia', this.state.arrayTecnologia)
        console.log(this.state.irParaTela)
        const lista = this.state.arrayServicos.map((dados) => {
            return (
                <div>
                    <h1>{dados.title}</h1>
                </div>
            )
        })
        return (
            <Main>
                
                    {this.state.irParaTela === 'servico' ? <Servico /> :
                        this.state.irParaTela === 'saude' ? <Saude /> :
                            this.state.irParaTela === 'tecnologia' ? <Tecnologia arrayTecnologia={this.state.arrayTecnologia} /> :
                                
                                
                                    <div>
                                        <div><Cadastros>Bora Cadastrar?</Cadastros></div>
                                        <div>
                                            
                                                <InputFlex>
                                                <SepararInputs>
                                                    <label>Servi??o Prestado: </label>
                                                    <select onChange={this.onChangeTitulo} value={this.state.inputTitulo}   >
                                                        <option onChange={this.onChangeTitulo} value='Assist??ncia t??cnica' >Assist??ncia t??cnica</option>
                                                        <option onChange={this.onChangeTitulo} value='Sa??de' >Sa??de</option>
                                                        <option onChange={this.onChangeTitulo} value='Tecnologia'>Tecnologia</option>
                                                    </select>
                                                    </SepararInputs>
                                                    <SepararInputs>
                                                    <label>Pre??o: </label>
                                                    <input placeholder='Pre??o' onChange={this.onChangePreco} value={this.state.inputPreco} />

                                                    </SepararInputs>
                                                   
                                               
                                                    <SepararInputs>
                                                    <label>Metodo de Pagamento</label>
                                                    <input placeholder='M??todos de pagamento' onChange={this.onChangePagamentos} value={this.state.inputPagamentos} />
                                                    </SepararInputs>
                                                    
                                                    <SepararInputs>
                                                        <label>Data para expirar:</label>

                                                        <input placeholder='data para expirar' pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" onChange={this.onChangeData} type='date' value={this.state.inputData} />
                                                    </SepararInputs>

                                               
                                            

                                            <Descrever placeholder='descreva sobre ele' onChange={this.onChangeDescricao} value={this.state.inputDrescricao} />
                                            <button onClick={this.createJob}>Adicionar</button>
                                            </InputFlex>
                                        </div>
                                    </div> }
                               
                                   { this.state.irParaTela === 'cadastrado' && <Adicionar>
                                        <Imagem src='https://image.shutterstock.com/image-vector/cute-happy-ninja-smiling-his-600w-359792546.jpg' />
                                        <h1>Parab??ns seu cadastro foi realizado com sucesso, agora v??
                                            para tela em que se cadastrou e vai estar l??!
                                        </h1>
                                        <AlinharBotao>
                                            <Botao onClick={this.onClickSaude}>Sa??de</Botao>
                                            <Botao onClick={this.onClickServico}>Assist??ncia T??cnica</Botao>
                                            <Botao onClick={this.onClickTecnologia}>Tecnologia</Botao>
                                        </AlinharBotao>

                                    </Adicionar>    }
                                    
                                    


               
            </Main>
        )
    }
}