import React from 'react'
import styled from 'styled-components'
import './app.css'

const Navegacao = styled.div`
height: 5vw;
background-color: #0E2948;
display: flex;
`
const Botoes = styled.div`
display: flex;
justify-content: space-between;
`
const Home = styled.h3`
display: flex;
margin-left: 60vw;
color: white;
`
const Carrinho = styled.h3`
display: flex;
margin-left: 3vw;
color: white;
`
const Cadastrar = styled.h3`
display: flex;
margin-left: 3vw;
color: white;
`

const NavBar = () => {
    return (
        <Navegacao>
                <Home      className="Home">HOME</Home>
                <Carrinho  className="Home">CARRINHO</Carrinho>
                <Cadastrar className="Home">CADASTRAR</Cadastrar>
            
        </Navegacao>
    )
}

export default NavBar