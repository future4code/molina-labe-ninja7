import React from 'react'
import axios from 'axios'
import { url } from '../contants/constant'
import Cadastro from './Cadastro'
import styled from 'styled-components'
import Filter from './Filter'
import Carrinho from './Carrinho'
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
export default class Saude extends React.Component {
    state = {
        tela: 'saude',
        array: [],
        arraySaude: [],
        clickTaken: false,
        max: 10000,
        min: 0,
        titulo: '',
        sort: '',
        array1:[]
    }
    onClickCarrinho=()=>{
        this.setState({tela:'carrinho'})
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
                    
                    if (dados.title === 'Saúde') {
                        const copiaArraySaude = [...this.state.arraySaude, dados]
                        this.setState({ arraySaude: copiaArraySaude })
                        const copia = [...this.state.array1,dados.description]
                        this.setState({array1:copia})
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
    filtro = () => {
       
        return this.state.arraySaude
            .filter((price) => this.state.max ? price.price <= this.state.max : true)
            .filter((price) => this.state.max ? price.price >= this.state.min : true)
            .filter((price) => this.state.titulo ? price.description.includes(this.state.titulo) : true)
            .sort((a, b) => this.state.sort === 'Preco' ? a.price - b.price : 
            this.state.sort==='descricao' ? a.description> b.description : b.description > a.description
            )       
    }
   
    onChangeSort=(event)=>{
        this.setState({sort:event.target.value})
    }
    render() {
        
        console.log('descricao', this.state.array1.sort())
        console.log('taken', this.state.clickTaken)
        
        /*
        const listaSaude = this.state.arraySaude.map((dado) => {
            return (
                <Container>
                    <Imagem src="https://images.emojiterra.com/google/android-11/512px/1f977.png" />
                    <h4>Descrição: {dado.description}</h4>
                    <h4>R${dado.price},00</h4>
                    <h4>Forma de Pagamento: {dado.paymentMethods}</h4>
                    <button onClick={() => this.updateJob(dado.id)} >Gostei desse</button>
                </Container>
            )
        })*/
        const lista = this.filtro()
        console.log('lista',lista)
        const saude=lista.map((dado)=>{
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
        return (
            <div>
                {this.state.tela === 'cadastro' ? <Cadastro /> :
                this.state.tela==='carrinho' ?  <Carrinho arraySaude={this.state.arraySaude}/>:
                <div>
                    <h1>saude</h1>
                    <Filter arraySaude={this.state.arraySaude} min={this.state.min}
                                                            max={this.state.max}
                                                            titulo={this.state.titulo}
                                                            onChangeMax={this.onChangeMax}
                                                            onChangeMin={this.onChangeMin}
                                                            onChangeTitulo={this.onChangeTitulo}
                                                            onChangeSort={this.onChangeSort}
                                                            sort={this.state.sort} />
                    <SepararContainer>
                    {saude}
                    </SepararContainer>

                    <h2>É um profissional da saúde? Se cadastre aqui!</h2>
                    <button onClick={this.onClickTela}>Cadastro</button>
                    <button onClick={this.onClickCarrinho}>Carrinho</button>
                </div>}
               
            </div>

        )
    }
}