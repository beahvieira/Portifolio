import Header from "../../components/header/Header";
import * as S from "./styled"
import insta from "../../assets/instagram.png"
import git from "../../assets/github.png"
import linkedin from "../../assets/linkedin.png"


export default function Inicio() {
  return (
    <S.Main>
      <Header />
      <S.Section>
        <S.BoxInicio>
          <h1>
            Olá mundo,<br />
            Eu me chamo <S.StyledSpan1>Beatriz</S.StyledSpan1> e<br />
            eu sou uma <S.StyledSpan2>Desenvolvedora<br />
              Front-End.</S.StyledSpan2>
          </h1>
          <h2>Sejam bem-vindos(a) ao meu portifólio.</h2>
          <S.BoxIcones>
            <a href="https://www.instagram.com/bee.vieira/" target="_blank"><img src={insta} alt="" /></a>
            <a href="https://github.com/beahvieira" target="_blank"><img src={git} alt="" /></a>
            <a href="https://www.linkedin.com/in/beatrizvieira09/" target="_blank"><img src={linkedin} alt="" /></a>

          </S.BoxIcones>
        </S.BoxInicio>
      </S.Section>
    </S.Main>
  )
}
