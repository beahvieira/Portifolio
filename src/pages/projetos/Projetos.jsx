import Header from "../../components/header/Header";
import * as S from "./styled"
import prime from "../../assets/prime.jpg"


export default function Projetos() {
  return (
    <S.Main>
      <Header />
      <S.Section>
        <S.Projetos>
          Projetos
        </S.Projetos>
        <S.BoxProjetos>
          <S.BoxCard1>
            <img src={prime} alt="" />
            <S.Texto>Projeto criado através do curso <S.StyledSpan>Vai na Web </S.StyledSpan> </S.Texto>
          </S.BoxCard1>
          <S.BoxCard2></S.BoxCard2>
          <S.BoxCard3></S.BoxCard3>
        </S.BoxProjetos>
      </S.Section>
    </S.Main>
  )
}
