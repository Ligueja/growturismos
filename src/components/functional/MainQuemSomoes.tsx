import { Fragment } from "react/jsx-runtime";
import { MainQuemSomos as MainQuemSomosStyled } from "../styled/MainQuemSomos";
import imageQuem from "../../assets/aeroporto.svg";

export function MainQuemSomos() {
  return (
    <Fragment>
      <MainQuemSomosStyled>
        <div>
          <img src={imageQuem} alt='banner aeroporto' />
        </div>
        <div>
          <h1>| Quem Somos</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa totam
            neque consequuntur minima, Et alias laboriosam sit sed voluptatem!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa totam
            neque consequuntur minima, quis, tenetur maxime!
          </p>
        </div>
      </MainQuemSomosStyled>
    </Fragment>
  );
}
