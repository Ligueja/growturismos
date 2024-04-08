import { Fragment } from "react/jsx-runtime";
import { MainHome as MainHomeStyled } from "../styled/MainHome";
import imageHome from "../../assets/home.svg";

export function MainHome() {
  return (
    <Fragment>
      <MainHomeStyled>
        <div>
          <h1>GrowTravel</h1>
          <p>O melhor serviço para você!</p>
          <button>Saiba mais!</button>
        </div>
        <div>
          <img src={imageHome} alt='banner de apresentação' />
        </div>
      </MainHomeStyled>
    </Fragment>
  );
}
