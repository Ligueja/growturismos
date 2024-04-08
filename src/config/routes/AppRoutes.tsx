import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QuemSomos } from "../../pages/QuemSomos";
import { Planos } from "../../pages/Planos";
import { Servicos } from "../../pages/Servicos";
import { Home } from "../../pages/Home";
import { Contatos } from "../../pages/Contatos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "servicos",
    element: <Servicos />,
  },
  {
    path: "/contatos",
    element: <Contatos />,
  },
  {
    path: "/quem-somos",
    element: <QuemSomos />,
  },
  {
    path: "/planos",
    element: <Planos />,
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
