
import React from 'react'
import styled from 'styled-components'
import './app.css'

const Bananinha = styled.div`
display: flex;
justify-content: space-around;
background-color: transparent;
width: 100vw;
margin-top: 15px;
`
const ImgNinja = styled.div`
height: 45px;
display: flex;
max-width: 50vw;

`
const Botoes = styled.div`
display: flex;

`
const Botao1 = styled.button`
background-color: #F72163;
border: 0px;
border-radius: 5px;
padding: 4px;
color: white;
margin-right: 10px;
`
const Botao2 = styled.button`
background-color: #F72163;
border: 0px;
border-radius: 5px;
padding: 4px;
color: white;
`

  const Header = () => {
  return (
    <Bananinha>
        <ImgNinja>
        <img src="" alt="" />
        </ImgNinja>

      <Botoes>
        <Botao1 className="Headerb">ANUNCIE</Botao1>
        <Botao2 className="Headerb">ENCONTRE</Botao2>
      </Botoes>
      
    </Bananinha>
  )
  
  
}

export default Header

