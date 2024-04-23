import styled from "styled-components";

export const Main = styled.main`
height: 100vh;
display: flex;
 
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
border-radius: 25px;
background-color: #d6d6d6;
display: flex;
flex-direction: column;
align-items: center;
box-shadow: 10px 0px 0px 0px #EF4B97;

img{
  width: 100%;
  height: 22vh;
  border-radius: 25px 25px 0 0;
}
`


export const BoxCard2 = styled.div`
width: 17vw;
border-radius: 25px;
background-color: #d6d6d6;
display: flex;
flex-direction: column;
align-items: center;
box-shadow: 10px 0px 0px 0px #16EFB1;

img{
  width: 100%;
  height: 22vh;
  border-radius: 25px 25px 0 0;
}
`

export const BoxCard3 = styled.div`
width: 17vw;
border-radius: 25px;
background-color: #d6d6d6;
display: flex;
flex-direction: column;
align-items: center;
box-shadow: 10px 0px 0px 0px #FFC700;
border: 2px solid ;

img{
  width: 100%;
  height: 22vh;
  border-radius: 25px 25px 0 0;
}


`

export const Texto = styled.p`
  width: 12vw;
  height: 15vh;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-style: normal;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1.3rem;
   margin-top: 3rem;
 
  a {
    text-decoration: none;
    color: #ee1caf;
  }
`;

export const StyledSpan1 = styled.span`
color: #EF4B97;

`

export const StyledSpan2 = styled.span`
color: #16EFB1;

`

export const StyledSpan3 = styled.span`
color: #FFC700;

`