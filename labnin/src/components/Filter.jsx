import React from 'react'
import Saude from '../pages/Saude'
import styled from 'styled-components'
const Imagem = styled.img`
    width: 20%;
`
const Container = styled.div`
    border: 1px solid black;
`
const SepararFiltro = styled.div `
    display: flex;
    justify-content: space-evenly;
    margin-left: 10%;
    margin-right: 10%;
`
const InputMaior=styled.input`
    width: 40%;
    margin-top: 1%;
`
const Maior=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export default class Filter extends React.Component {
   
    render() {

        return (
            <div>
                <SepararFiltro>
                <div>
                <label>Valor Mínimo: </label> 
                <input type='number' placeholder='mínimo filter' value={this.props.min} onChange={this.props.onChangeMin} />
                </div>
              <div>
              <label>Valor Máximo: </label> 
                <input type='number' placeholder='máximo filter' value={this.props.max} onChange={this.props.onChangeMax} />
                
              </div>
                
                <label>
          Ordenar por: 
          <select value={this.props.sort} onChange={this.props.onChangeSort}>
            <option value={'...'}>...</option>
            <option value={'Preco'}>Preço</option>
            <option value={'descricao'}>Descrição</option>
          </select>
        </label>
        </SepararFiltro>
        <Maior>
        <InputMaior type='text' placeholder='Digite aqui qual especialidade você procura' value={this.props.titulo} onChange={this.props.onChangeTitulo} />
        </Maior>
            </div>
        )
    }
}