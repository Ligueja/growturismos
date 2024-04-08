import { Fragment } from "react/jsx-runtime";
import { Footer as FooterStyled } from "../styled/Footer";

export function Footer() {
  return (
    <Fragment>
      <FooterStyled>
        <div>
          <p>©2024 Full Stack Growdev</p>
          <p>17ª Edição</p>
        </div>
      </FooterStyled>
    </Fragment>
  );
}
