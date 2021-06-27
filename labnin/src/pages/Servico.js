import React from 'react'
import axios from 'axios'
import { url } from '../contants/constant'
import Cadastro from './Cadastro'
import styled from 'styled-components'
import Filter from '../components/Filter'
import Carrinho from '../components/Carrinho'
const Imagem = styled.img`
    width: 20%;
`
const AlinharBotao=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Botao=styled.button`
    margin: 1%;
    width: 25%;
    padding: 1%;
    border-radius: 5%;
    color: #13293D;
    background-color: rgb(223, 219, 240);
`
const Main=styled.div`
    background-color: #F5F4FC;
`
const Texto = styled.h1`
    text-align: center;
`
const Container = styled.div`
    border: 1px solid black;
    margin:2%;
    padding: 1%;
    background-color: rgb(223, 219, 240);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`
const SepararContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`
const headers = {
    headers: {
        Authorization: "e857c53a-24f4-4fb0-801b-ff6226302fca"
    }
}
export default class Servico extends React.Component{
    state = {
        tela: 'servico',
        array: [],
        arrayServicos: [],
        clickTaken: false,
        max: 10000,
        min: 0,
        titulo: '',
        sort: '',
    }
    onClickCarrinho=()=>{
        this.setState({tela:'carrinho'})
    }
    onChangeSort=(event)=>{
        this.setState({sort:event.target.value})
    }
    onClickTela = () => {
        this.setState({ tela: 'cadastro' })
    }
    componentDidMount() {
        this.getAllJobs()
    }
    getAllJobs = () => {
        axios.get(`${url}/jobs`, headers)
            .then((res) => {
                console.log('get', res.data.jobs)
                this.setState({ clickTaken: true })
                this.setState({ array: res.data.jobs })
                const Lista = this.state.array.map((dados) => {
                    if (dados.title === 'Assistência técnica') {
                        const copiaArrayServiços = [...this.state.arrayServicos, dados]
                        this.setState({ arrayServicos: copiaArrayServiços })
                    }
                })
            })
            .catch((err) => {
                console.log('erro', err.response)
            })
    }
    onChangeMin=(event)=>{
        this.setState({min:event.target.value})
    }
    onChangeMax=(event)=>{
        this.setState({max:event.target.value})
    }
    onChangeTitulo=(event)=>{
        this.setState({titulo:event.target.value})
    }
    updateJob = (id) => {

        const body = {
            taken: this.state.clickTaken
        }
        axios.post(`${url}/jobs/${id}`, body, headers)
            .then(() => {
                alert('Seu pedido foi adicionado ao carrinho')
            }).catch((err) => {
                console.log('erro', err.response.data)
            })
    }
    filtro=()=>{
        return this.state.arrayServicos
        .filter((price)=>this.state.max ? price.price <= this.state.max :true)
        .filter((price)=>this.state.max ? price.price >= this.state.min :true)
        .filter((price)=>this.state.titulo ? price.description.includes(this.state.titulo) :true)
        .sort((a, b) => this.state.sort === 'Preco' ? a.price - b.price : 
        this.state.sort==='descricao' && a.description.localeCompare(b.description) 
            )
    }
    render(){
        const lista = this.filtro()
        const servico=lista.map((dado)=>{
                return(
                    <Container>
                    <Imagem src="https://images.emojiterra.com/google/android-11/512px/1f977.png" />
                    <h4>Descrição: {dado.description}</h4>
                    <h4>R${dado.price},00</h4>
                    <h4>Forma de Pagamento: {dado.paymentMethods}</h4>
                    <button onClick={()=>this.updateJob(dado.id)} >Contrate</button>
                </Container>
                )
        })
        return(
            <div>
                {this.state.tela === 'cadastro' ? <Cadastro /> :
                this.state.tela==='carrinho' ?  <Carrinho />:
                <Main>
                    <Texto>Assistência Técnica</Texto>
                    <Filter                                  min={this.state.min}
                                                            max={this.state.max}
                                                            titulo={this.state.titulo}
                                                            onChangeMax={this.onChangeMax}
                                                            onChangeMin={this.onChangeMin}
                                                            onChangeTitulo={this.onChangeTitulo}
                                                            onChangeSort={this.onChangeSort}
                                                            sort={this.state.sort} />
                    <SepararContainer>
                    {servico}
                    </SepararContainer>

                    <Texto>É um profissional de serviço? Se cadastre aqui!</Texto>
                    <AlinharBotao>
                        <Botao onClick={this.onClickTela}>Cadastro</Botao>
                        <Botao onClick={this.onClickCarrinho}>Carrinho</Botao>
                    </AlinharBotao>
                    
                </Main>}
            </div>
        )
    }
}