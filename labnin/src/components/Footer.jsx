import React from "react"
import "./app.css"
import styled from "styled-components"

{/* <Footer>
            <h2>Gostou da gente? Segue a gente nas redes sociais!</h2>
            <RedesSociais src="https://image.flaticon.com/icons/png/512/87/87390.png" />
            <RedesSociais src="https://image.flaticon.com/icons/png/512/49/49351.png" />
          </Footer> */}

const Rodape = styled.div`
    text-align: center;
    background-color: #27363C;
    color:white;
    margin-top:0%;
    height: 197px;
    width: 100vw;
       `

const RedesSociais = styled.img `
  width: 2%;
  margin:0.5%;
`


const Footer = () => {
    return (
        <Rodape>

            <h2>Se liga nas nossas redes sociais</h2>
            <RedesSociais className="RedesSociais" src="https://site-clientes-assets-production.getninjas.com.br/images/icons/youtube.png"/>
            <RedesSociais className="RedesSociais" src="https://site-clientes-assets-production.getninjas.com.br/images/icons/facebook.png"/>
            <RedesSociais className="RedesSociais" src="https://site-clientes-assets-production.getninjas.com.br/images/icons/instagram.png"/>
            <RedesSociais className="RedesSociais" src="https://site-clientes-assets-production.getninjas.com.br/images/icons/twitter.png"/>
        </Rodape>
    )
}

export default Footer 