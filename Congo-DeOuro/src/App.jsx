import { createBrowserRouter, RouterProvider, Link } from "react-router-dom"
import Menu from "./pages/Menu"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="container mt-5">
        <h1>Restaurante Congo D'Ouro</h1>
        <Link to="/menu" className="btn btn-primary">Ver Menu</Link>
      </div>
    ),
  },
  {
    path: "/menu",
    element: <Menu />,
  },
])

export default function App() {
  return <RouterProvider router={router} />
}