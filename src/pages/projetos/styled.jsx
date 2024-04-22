import styled from "styled-components";

export const Main = styled.main`
height: 100vh;
display: flex;
 
@media (max-width: 500px) {
  flex-direction: column;
}
`
export const Projetos = styled.h2`
height: 7vh;
color: white;
font-size: 35px;
display: flex;
justify-content: center;
font-family: "Poppins", sans-serif;
font-weight: 700;
font-style: normal;
margin-bottom: 5%;
`


export const Section = styled.section`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
display: flex;
flex-direction: column;
background: linear-gradient(to right, #0C1223, #221a4a);
`

export const BoxProjetos = styled.section`
width: 65vw;
height: 50vh;
display: flex;
justify-content: space-between;
`

export const BoxCard1 = styled.div`
width: 17vw;
border: solid 1px pink;
border-radius: 25px;
background-color: #d6d6d6;
display: flex;
flex-direction: column;
justify-content: space-between;
box-shadow: 10px 0px 0px 0px #EF4B97;

img{
  width: 100%;
  height: 20vh;
  border-radius: 25px 25px 0 0;
}


&:hover{
cursor: pointer;
transform: scale(1.1);
}
`

export const BoxCard2 = styled.div`
width: 17vw;
border: solid 1px pink;
border-radius: 25px;
background-color: #d6d6d6;
box-shadow: 10px 0px 0px 0px #16EFB1;



&:hover{
cursor: pointer;
transform: scale(1.1);
}
`

export const BoxCard3 = styled.div`
width: 17vw;
border: solid 1px pink;
border-radius: 25px;
background-color: #d6d6d6;
box-shadow: 10px 0px 0px 0px #FFC700;

&:hover{
cursor: pointer;
transform: scale(1.1);
}
`

export const Texto = styled.p`
width: 17vw;
height: 30vh;
border: solid red;
display: flex;
justify-content: center;
font-family: "Poppins", sans-serif;
font-weight: 600;
font-style: normal;
`

export const StyledSpan = styled.span`
color: #EF4B97;
`