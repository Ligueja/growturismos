import { Fragment } from "react/jsx-runtime";
import { MainServicos as MainServicosStyled } from "../styled/MainServicos";
import image1 from "../../assets/hotel.svg";
import image2 from "../../assets/roteiro.svg";
import image3 from "../../assets/viagens.svg";
import { CardServicos } from "../styled/CardServicos";

export function MainServicos() {
  return (
    <Fragment>
      <MainServicosStyled>
        <CardServicos border='nome'>
          <div>
            <img src={image1} alt='banner hotel' />
            <h2>Hospedagem</h2>
            <button>Saiba Mais</button>
          </div>
        </CardServicos>
        <CardServicos border='nome'>
          <div>
            <img src={image2} alt='banner roteiro' />
            <h2>Roteiros</h2>
            <button>Saiba Mais</button>
          </div>
        </CardServicos>
        <CardServicos border='nome'>
          <div>
            <img src={image3} alt='banner roteiro' />
            <h2>Pacotes</h2>
            <button>Saiba Mais</button>
          </div>
        </CardServicos>
      </MainServicosStyled>
    </Fragment>
  );
}
