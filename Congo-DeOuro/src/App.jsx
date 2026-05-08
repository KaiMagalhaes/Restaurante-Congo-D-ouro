import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutMaster from "./layouts/LayoutMaster";
import Menu from "./pages/Menu";
import Login from "./pages/Login";
import Gerente from "./pages/Gerente"; 
import Cozinha from "./pages/Cozinha"; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMaster />,
    children: [
      { index: true, element: <Menu /> },
      { path: "login", element: <Login /> },
      { path: "gerente", element: <Gerente /> }, 
      { path: "cozinha", element: <Cozinha /> }, 
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}