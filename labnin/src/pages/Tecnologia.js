import React from 'react'
import axios from 'axios'
import { url } from '../contants/constant'
import Cadastro from './Cadastro'
import styled from 'styled-components'
import Filter from '../components/Filter'
const Imagem = styled.img`
    width: 20%;
`
const Container = styled.div`
    border: 1px solid black;
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

export default class Tecnologia extends React.Component{
    state = {
        tela: 'tecnologia',
        array: [],
        arrayTecnologia: [],
        clickTaken: false,
        max: 10000,
        min: 0,
        titulo: '',
        sort: ''
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
                    if (dados.title === 'Tecnologia') {
                        const copiaArrayServiços = [...this.state.arrayTecnologia, dados]
                        this.setState({ arrayTecnologia: copiaArrayServiços })
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
                alert('Aguarda um instante você será redirecionado para a página de login')
            }).catch((err) => {
                console.log('erro', err.response.data)
            })
    }
    filtro=()=>{
        return this.state.arrayTecnologia
        .filter((price)=>this.state.max ? price.price <= this.state.max :true)
        .filter((price)=>this.state.max ? price.price >= this.state.min :true)
        .filter((price)=>this.state.titulo ? price.description.includes(this.state.titulo) :true)
        .sort((a, b) => this.state.sort === 'Preco' ? a.price - b.price : 
            this.state.sort==='descricao' && a.description> b.description 
            )
    }
    render(){
        const lista = this.filtro()
        const tecnologia=lista.map((dado)=>{
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
                {this.state.tela === 'cadastro' ? <Cadastro /> : <div>
                    <h1>Tecnologia</h1>
                    <Filter                                 min={this.state.min}
                                                            max={this.state.max}
                                                            titulo={this.state.titulo}
                                                            onChangeMax={this.onChangeMax}
                                                            onChangeMin={this.onChangeMin}
                                                            onChangeTitulo={this.onChangeTitulo}
                                                            onChangeSort={this.onChangeSort}
                                                            sort={this.state.sort} />
                    <SepararContainer>
                    {tecnologia}
                    </SepararContainer>

                    <h2>É um profissional de serviço? Se cadastre aqui!</h2>
                    <button onClick={this.onClickTela}>Cadastro</button>
                </div>}
            </div>
        )
    }
}