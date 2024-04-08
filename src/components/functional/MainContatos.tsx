import { Fragment } from "react/jsx-runtime";
import { MainContatos as MainContatosStyled } from "../styled/MainContatos";

export function MainContatos() {
  return (
    <Fragment>
      <MainContatosStyled>
        <div>
          <h1>Formulário</h1>
          <form>
            <div>
              <label>Nome:</label>
              <input type='text' name='nome' />
            </div>
            <div>
              <label>E-mail:</label>
              <input type='text' name='email' />
            </div>
            <div>
              <label>Telefone:</label>
              <input type='text' name='telefone' />
            </div>
            <div>
              <label>Mensagem:</label>
              <textarea name='mensagem'></textarea>
            </div>
            <div>
              <button type='submit'>Enviar</button>
            </div>
          </form>
        </div>
      </MainContatosStyled>
    </Fragment>
  );
}
