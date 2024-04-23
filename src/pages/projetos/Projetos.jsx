import Header from "../../components/header/Header";
import * as S from "./styled"
import prime from "../../assets/prime.jpg"
import self from "../../assets/self.png"
import hamb from "../../assets/hamb.png"


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
            <S.Texto>Projeto 
              <a href="https://github.com/beahvieira/prime-video" target="_blank"> Prime Video </a> 
              criado através do curso
               Vai na Web  </S.Texto>
          </S.BoxCard1>

          <S.BoxCard2>
          <img src={hamb} alt="" />
            <S.Texto>Projeto <a href="https://github.com/beahvieira/mc-donald-s" target="_blank"> Menu Hamburguer </a> 
              criado através do curso
               Vai na Web  </S.Texto>
          </S.BoxCard2>

          <S.BoxCard3>
          <img src={self} alt="" />
            <S.Texto>Projeto <a href="https://github.com/beahvieira/self-care" target="_blank"> Self Care </a> 
              criado através do curso Vai na Web. </S.Texto>
          </S.BoxCard3>
        </S.BoxProjetos>
      </S.Section>
    </S.Main>
  )
}

