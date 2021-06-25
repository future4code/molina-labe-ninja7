import React from 'react'
import Saude from '../pages/Saude'
import styled from 'styled-components'
const Imagem = styled.img`
    width: 20%;
`
const Container = styled.div`
    border: 1px solid black;
`
export default class Filter extends React.Component {
   
    render() {

        return (
            <div>
                <input type='number' placeholder='mínimo filter' value={this.props.min} onChange={this.props.onChangeMin} />
                <input type='number' placeholder='máximo filter' value={this.props.max} onChange={this.props.onChangeMax} />
                <input type='text' placeholder='Digite aqui qual especialidade você procura' value={this.props.titulo} onChange={this.props.onChangeTitulo} />
                <label>
          Ordenar por
          <select value={this.props.sort} onChange={this.props.onChangeSort}>
            <option value={'...'}>...</option>
            <option value={'Preco'}>Preço</option>
            <option value={'descricao'}>Descrição</option>
          </select>
        </label>
            </div>
        )
    }
}