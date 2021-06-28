
import React from 'react'
import styled from 'styled-components'
import './app.css'

const Bananinha = styled.div`
display: flex;
justify-content: space-around;
background-color: transparent;
width: 100vw;
height: 60px;
margin-top: 15px;
`
const ImgNinja = styled.div`
width: 400px;
height: 60px;
display: flex;
`
const Logo = styled.img `
height:120px;
margin-left: 50px;

`
const Botoes = styled.div`
display: flex;
margin-top: 15px;
`
const Botao1 = styled.button`
background-color: #eb4a60;
padding: 5px;
max-height: 40px;
border: none;
border-radius: 5px;
color: white;
margin-right: 10px;
`
const Botao2 = styled.button`
background-color: #eb4a60;
padding: 5px;
max-height: 40px;
border: none;
border-radius: 5px;
color: white;
`

  const Header = () => {
  return (
    <Bananinha>
        
        <Logo src="https://scontent.frec21-1.fna.fbcdn.net/v/t1.6435-0/p180x540/209067444_938932993567172_8076062809591119778_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=730e14&_nc_ohc=OV9fQ7Eji_0AX8wR1uj&_nc_ht=scontent.frec21-1.fna&tp=6&oh=44c12cca5962e1179d0d2bf5b5aade18&oe=60DE8731" alt=""/>
        

      <Botoes>
        
        <Botao1 className="Headerb">ANUNCIE</Botao1>
        <Botao2 className="Headerb">ENCONTRE</Botao2>
      </Botoes>
      
    </Bananinha>
  )
  
  
}

export default Header

