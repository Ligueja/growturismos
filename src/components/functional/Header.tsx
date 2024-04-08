import { Fragment } from "react/jsx-runtime";
import { Header as HeaderStyled } from "../styled/Header";
import { NavHeader } from "../styled/NavHeader";

export function Header() {
  return (
    <Fragment>
      <HeaderStyled>
        <div>
          <h1>
            <a href='/'>GrowTravel</a>
          </h1>
          <NavHeader>
            <ul>
              <li>
                <a href='/quem-somos'>Quem Somos</a>
              </li>
              <li>
                <a href='/servicos'>Serviços</a>
              </li>
              <li>
                <a href='/planos'>Planos</a>
              </li>
              <li>
                <a href='/contatos'>Contatos</a>
              </li>
            </ul>
          </NavHeader>
        </div>
      </HeaderStyled>
    </Fragment>
  );
}
