import { Fragment } from "react/jsx-runtime";
import { DefaultLayout } from "../config/layout/DefaultLayout";
import { MainQuemSomos } from "../components/functional/MainQuemSomoes";

export function QuemSomos() {
  return (
    <Fragment>
      <DefaultLayout>
        <MainQuemSomos />
      </DefaultLayout>
    </Fragment>
  );
}
