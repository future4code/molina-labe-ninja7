import React from 'react'
import axios from 'axios'
import { url } from '../contants/constant'
import Cadastro from './Cadastro'

export default class Saude extends React.Component {
    state = {
        tela: 'saude'
    }
    onClickTela = () => {
        this.setState({ tela: 'cadastro' })
    }
    render() {

        return (
            <div>
                {this.state.tela === 'cadastro' ? <Cadastro /> : <div>
                    <h1>saude</h1>
                    <button onClick={this.onClickTela}>Cadastro</button>
                </div>}
            </div>

        )
    }
}