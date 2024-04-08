import React from "react";
import { Fragment } from "react/jsx-runtime";
import { Header } from "../../components/functional/Header";
import { Footer } from "../../components/functional/Footer";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export function DefaultLayout(props: DefaultLayoutProps) {
  return (
    <Fragment>
      <Header></Header>
      {props.children}
      <Footer></Footer>
    </Fragment>
  );
}
