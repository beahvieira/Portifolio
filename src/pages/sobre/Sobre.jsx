import Header from "../../components/header/Header";
import * as S from "./styled"
import html from "../../assets/html.png"
import css from "../../assets/css.png"
import js from "../../assets/js.png"
import react from "../../assets/react.png"
import sc from "../../assets/sc.png"

export default function Sobre() {
  return (
    <S.Main>
      <Header />
      <S.Section>
        <S.SobreMim>
          <S.Sobre>Sobre mim</S.Sobre>
          <S.Texto1>Inicialmente, mergulhei no mundo da programação, mas logo percebi que não era o meu lugar. Em busca de algo que me apaixonasse, voltei-me para o design, uma paixão antiga que sempre me encantou. No entanto, ao ingressar nesse campo, senti-me um pouco perdida, como se faltasse algo. Decidi então dar mais uma chance à programação, e foi nesse ponto que tudo começou a se encaixar.</S.Texto1>
          <S.Texto2>Hoje, encontrei minha verdadeira vocação no UI/UX, uma área que une o melhor dos dois mundos que sempre me fascinaram. Aqui, posso combinar minha criatividade e paixão pelo design com a lógica e estrutura da programação. É como se finalmente tivesse encontrado o equilíbrio perfeito, e estou animada para explorar todas as possibilidades e oportunidades que essa jornada tem a oferecer.</S.Texto2>
          <S.Habilidade>Habilidades</S.Habilidade>
          <S.Icons>
            <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blank"><img src={html} alt="" /></a>
            <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target="_blank">  <img src={css} alt="" /></a>
            <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank">  <img src={js} alt="" /></a>
            <a href="https://react.dev/" target="_blank"><img src={react} alt="" /></a>
            <a href="https://styled-components.com/" target="_blank"><img src={sc} alt="" /></a>
          </S.Icons>
        </S.SobreMim>
      </S.Section>
    </S.Main>
  )
}
