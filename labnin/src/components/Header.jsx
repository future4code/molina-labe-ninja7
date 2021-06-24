import React from "react"
import styled from "styled-components";

Header  = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #0084ff;
  color: white;
  padding: 0.5%;
  
`
const Ninja = styled.img`
  width: 12%;
  border-radius: 100%;
  margin-right: 2%;
`
const NinjaTexto = styled.div`
  display: flex;
  
`



function Header() {
        return (
            <div>
                <NinjaTexto onClick={this.onClickHome}>
                <Ninja src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c9a63dc4-58ca-4ee5-8f1e-52869fbe9ad8/ddsqdrz-f8df9399-840f-45a8-8135-255a39b097c2.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M5YTYzZGM0LTU4Y2EtNGVlNS04ZjFlLTUyODY5ZmJlOWFkOFwvZGRzcWRyei1mOGRmOTM5OS04NDBmLTQ1YTgtODEzNS0yNTVhMzliMDk3YzIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0._JBC0k_p9sf7I-zLu32D6Kdqywxzjv8qNTjq2CQNn_Y" />
                <h1>Labeninjas</h1>
                </NinjaTexto>
                <button>Quero me cadastrar</button>
            </div>
    
)} 

export default Header

