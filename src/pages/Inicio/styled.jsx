import styled from "styled-components";

export const Main = styled.main`
height: 100vh;
display: flex;

`


export const Section = styled.section`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
background: linear-gradient(to right, #0C1223, #221a4a);

`

export const BoxInicio = styled.div`
width: 70vw;
height: 80vh;
display: flex;
flex-direction: column;
justify-content: center;


h1{
  width: 100%;
  font-size: 55px;
  color: white;
  margin-bottom: 15px;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: normal;
}
h2{
  width: 100%;
  font-size: 25px;
  color: white;
  margin-bottom: 60px;
  font-family: "Poppins", sans-serif;
  font-weight: 100;
  font-style: normal;
}
`
export const StyledSpan1 = styled.span`
color: #EF4B97;
`

export const StyledSpan2 = styled.span`
  color: #16EFB1;
`;

export const BoxIcones = styled.div`
width: 15vw;
display: flex;
justify-content: space-between;

img{
  width: 2.3vw;
}
`