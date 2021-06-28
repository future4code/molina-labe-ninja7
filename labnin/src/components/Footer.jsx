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
            <RedesSociais src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"/>
            <RedesSociais src="https://image.flaticon.com/icons/png/512/174/174857.png"/>
            <RedesSociais src="https://imagensemoldes.com.br/wp-content/uploads/2020/04/Facebook-PNG.png"/>
        </Rodape>
    )
}

export default Footer 