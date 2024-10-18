// Importando componentes do react 
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import App from './App'

// Configuração do Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./routes/exemploHome.jsx";
// import Exemplo from "./routes/exemplo2.jsx";

// const router = createBrowserRouter([
//   { //Path é o caminho até a pasta | Element é o componente pricipal da pagina
//     path: "/",
//     element: <Home />
//   },
//   {
//     path: "exemplo",
//     element: <Exemplo />
//   }
// ])

const router = createBrowserRouter([
  { //Path é o caminho até a pasta | Element é o componente pricipal da pagina
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>,
)
