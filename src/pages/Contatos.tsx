import { Fragment } from "react/jsx-runtime";
import { DefaultLayout } from "../config/layout/DefaultLayout";
import { MainContatos } from "../components/functional/MainContatos";

export function Contatos() {
  return (
    <Fragment>
      <DefaultLayout>
        <MainContatos />
      </DefaultLayout>
    </Fragment>
  );
}
