import { Link } from "react-router-dom";
import * as S from "./styled"
import foto from "../../assets/foto.jpg"

export default function Header() {
  return (
    <S.Header>

      <S.BoxLogo>
        <img src={foto} alt="" />
        <h2>Beatriz Vieira</h2>
        <h3>Front-end Developer</h3>
      </S.BoxLogo>

      <S.BoxMenu>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/projetos">Projetos</Link></li>
        </ul>
      </S.BoxMenu>

    </S.Header>

    
  )
}
