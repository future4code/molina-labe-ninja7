import React from 'react'
import axios from 'axios'

const headers = {
    headers: {
        Authorization: "e857c53a-24f4-4fb0-801b-ff6226302fca"
    }
}
export default class Saude extends React.Component {
    state={
        inputTitulo: '',
        inputDrescricao:'',
        inputPreco:'',
        inputPagamentos:'',
        inputData:'',
        array:[]
    }
    onChangeTitulo=(event)=>{
        this.setState({inputTitulo:event.target.value})
    }
    onChangeDescricao=(event)=>{
        this.setState({inputDrescricao:event.target.value})
    }
    onChangePreco=(event)=>{
        this.setState({inputPreco:event.target.value})
    }
    onChangePagamentos=(event)=>{
        this.setState({inputPagamentos:event.target.value})
    }
    onChangeData=(event)=>{
        this.setState({inputData:event.target.value})
    }
    componentDidMount(){
        this.getAllJobs()
    }
    getAllJobs = () => {
        const url = 'https://labeninjas.herokuapp.com/jobs'

        axios.get(url, headers)
            .then((res) => {
                console.log(res.data.jobs)
                
            })
            .catch((err) => {
               console.log(err.response)
            })
    }
    createJob = () => {
        const url= 'https://labeninjas.herokuapp.com/jobs'
        const body={
            title:this.state.inputTitulo,
            description:this.state.inputDrescricao,
            price: this.state.inputPreco,
            paymentMethods:[this.state.inputPagamentos],
            dueDate:this.state.inputData
        }
        axios.post(url,body,headers)
        .then((res)=>{
                console.log(res.data.jobs)
        })
        .catch((err) => {
            console.log(err.response.data)
        })
    }
    render() {
        return (
            <div>
                <h1>saude</h1>
                <label>Tipo de trabalho</label>
                <input onChange={this.onChangeTitulo} value={this.state.inputTitulo}/>
                <label>Descreva sobre ele </label>
                <input onChange={this.onChangeDescricao} value={this.state.inputDrescricao}/>
                <label>Preço</label>
                <input type='number' onChange={this.onChangePreco} value={this.state.inputPreco}/>
                <label>Métodos de pagamentos</label>
                <input onChange={this.onChangePagamentos} value={this.state.inputPagamentos}/>
                <label>Data para expirar</label>
                <input onChange={this.onChangeData} type='date' value={this.state.inputData}/>
                <button onClick={this.createJob}>Adicionar</button>
            </div>
        )
    }
}