import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyled = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`

export const Header = styled.header`
border-right: solid 1px white;
width: 15vw;
background-color: #0C1223;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
font-family: "Poppins", sans-serif;
font-weight: 400;
font-style: normal;

`

export const BoxLogo = styled.div`
width: 15vw;
height: 40vh;
display: flex;
align-items: center;
flex-direction: column;
color: #ffffff;

img{
  width: 8vw;
  height: 19vh;
  border-radius: 50%;
  margin-top: 15px;
  margin-bottom: 20px;
}
h2{
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-style: normal;
}
h3{
  font-family: "Poppins", sans-serif;
  font-weight: 200;
  font-style: normal;
}


`

export const BoxMenu = styled.nav`
width: 15vw;
height: 50vh;


li{
  list-style: none;
  height: 8vh;
  display: flex;
  font-size: 20px;
  align-items: center;
  justify-content: center;
  border-bottom: solid 1px white;
  transition: background-color 0.3s ease;
  cursor: pointer;
 
}
li:hover {
    background-color: #EF4B97;
  }


li:nth-child(1){
  border-top: solid 1px white;
}

a{
  color: white;
  text-decoration: none;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}


`
