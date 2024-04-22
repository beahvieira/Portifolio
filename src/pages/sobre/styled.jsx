import styled from "styled-components";

export const Main = styled.main`
height: 100vh;
display: flex;
@media (max-width: 500px) {
  flex-direction: column;
}
`

export const Section = styled.section`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
background: linear-gradient(to right, #0C1223, #221a4a);
`

export const SobreMim = styled.section`
width: 55vw;
height: 90vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;

`

export const Sobre = styled.h2`
height: 7vh;
color: white;
font-size: 35px;
display: flex;
justify-content: center;
font-family: "Poppins", sans-serif;
font-weight: 700;
font-style: normal;
`

export const Texto1 = styled.p`
height: 20vh;
color: white;
font-size: 23px;
display: flex;
justify-content: center;
font-family: "Poppins", sans-serif;
font-weight: 300;
font-style: normal;

`
export const Texto2 = styled.p`
height: 20vh;
color: white;
font-size: 23px;
display: flex;
justify-content: center;
font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-style: normal;

`

export const Habilidade = styled.h2`
height: 7vh;
color: white;
font-size: 35px;
display: flex;
justify-content: center;
font-family: "Poppins", sans-serif;
font-weight: 700;
font-style: normal;
`

export const Icons = styled.div`
width: 30vw;
display: flex;
align-items: center;
justify-content: space-around;

img:hover {
  cursor: pointer;
  transform: scale(1.1);
}
`