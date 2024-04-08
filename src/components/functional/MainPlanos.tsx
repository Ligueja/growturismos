import { Fragment } from "react/jsx-runtime";
import { MainPlanos as MainPlanosStyled } from "../styled/MainPlanos";
import { CardPlanos } from "../styled/CardPlanos";

export function MainPlanos() {
  return (
    <Fragment>
      <MainPlanosStyled>
        <CardPlanos border='3px solid rgb(18, 42, 87);'>
          <h1>Plano 1</h1>
          <hr />
          <ul>
            <li>Suporte 24h</li>
            <li>Srviços de Quarto</li>
            <li>Guia Turístico</li>
          </ul>
          <button>Saiba Mais!</button>
        </CardPlanos>
        <CardPlanos border='3px solid rgb(18, 42, 87);'>
          <h1>Plano 2</h1>
          <hr />
          <ul>
            <li>Serviços 24h</li>
            <li>Servido de quarto</li>
            <li>Guia turístico</li>
            <li>Roteiro de trilhas</li>
            <li>Serviço personalizado</li>
          </ul>
          <button>Saiba Mais!</button>
        </CardPlanos>
        <CardPlanos border='3px solid rgb(18, 42, 87);'>
          <h1>Plano 3</h1>
          <hr />
          <ul>
            <li>Serviços 24h</li>
            <li>Servido de quarto</li>
            <li>Guia turístico</li>
            <li>Roteiro de trilhas</li>
            <li>Serviço personalizado</li>
            <li>Área Vip</li>
          </ul>
          <button>Saiba Mais!</button>
        </CardPlanos>
      </MainPlanosStyled>
    </Fragment>
  );
}
