import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutMaster from "./layouts/LayoutMaster";
import Menu from "./pages/Menu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMaster />,
    children: [
      { index: true, element: <Menu /> },
      { path: "login", element: <div>Área do Funcionário</div> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}