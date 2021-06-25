
// import React from "react"
// import styled from "styled-components";

//      Header  = styled.div`
//   display: flex;
//   justify-content: space-around;
//   background-color: red ;
//   padding: 50px;
  
// `
// const Ninja = styled.img`
//   width: 500px;
//   border-radius: 100%;
//   margin-right: 2%;
// `
// const NinjaTexto = styled.div`
//   display: flex;
  
// `

// function Header() {
//         return (
//         <div>
//             <NinjaTexto>
//                {/* onClick={this.onClickHome}> */}
//             <Ninja src="https://i.pinimg.com/originals/85/61/db/8561db18287b2a845dd11a972d802afb.png" alt="imagem de um ninja"/>
//             <button>Quero me cadastrar</button>
//             <h1>Labeninjas</h1>
//             </NinjaTexto>
            
//         </div>

import React from 'react'
import styled from 'styled-components'
import './app.css'

const Bananinha = styled.div`
display: flex;
justify-content: space-around;
background-color: transparent;
max-width: 100vw;

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
        <img src="http://paiva1-labeninja.surge.sh/static/media/nome-labeninja.fedf63e9.png" alt="" />
        </ImgNinja>

      <Botoes>
        <Botao1 className="Headerb">ANUNCIE</Botao1>
        <Botao2 className="Headerb">ENCONTRE</Botao2>
      </Botoes>
      
    </Bananinha>
  )
  
  
}

export default Header

// import React from "react"
// import styled from "styled-components";

// Header  = styled.div`
//   display: flex;
//   justify-content: space-around;
//   background-color: #0084ff;
//   color: white;
//   padding: 0.5%;
  
// `
// const Ninja = styled.img`
//   width: 12%;
//   border-radius: 100%;
//   margin-right: 2%;
// `
// const NinjaTexto = styled.div`
//   display: flex;
  
// `



// function Header() {
//         return (
//             <div>
//                 <NinjaTexto onClick={this.onClickHome}>
//                 <Ninja src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c9a63dc4-58ca-4ee5-8f1e-52869fbe9ad8/ddsqdrz-f8df9399-840f-45a8-8135-255a39b097c2.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M5YTYzZGM0LTU4Y2EtNGVlNS04ZjFlLTUyODY5ZmJlOWFkOFwvZGRzcWRyei1mOGRmOTM5OS04NDBmLTQ1YTgtODEzNS0yNTVhMzliMDk3YzIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0._JBC0k_p9sf7I-zLu32D6Kdqywxzjv8qNTjq2CQNn_Y" />
//                 <h1>Labeninjas</h1>
//                 </NinjaTexto>
//                 <button>Quero me cadastrar</button>
//             </div>

    
// )} 

// export default Header

