import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// css com as configurações do tailwind css e possíveis classes personalizadas
import './index.css'

// nossas rotas, elas ficam na pasta routes dentro de src
import Signin from "./routes/Signin"
import Signup from './routes/Signup'
import SignupMed from './routes/SignupMed'
import Home from './routes/Home'
import SignupAdress from './routes/SignupAdress'


// configurando o roteador, aqui é onde definimos as rotas da nossa aplicação, 
// explicamos para o React Router qual componente deve ser renderizado em cada rota
const router = createBrowserRouter([
  {
    path: '/', // essa é a rota raiz, a primeira que o usuário vai acessar
    element: <Signin />, // o componente que será renderizado
  },
  // a mesma lógica serve para os demais:
  {
    path: '/cadastro',
    element: <Signup />,
  },
  {
    path: '/cadastro-endereco',
    element: <SignupAdress />,
  },
  {
    path: '/cadastro-medico',
    element: <SignupMed />,
  },
  {
    path: '/inicio',
    element: <Home />,
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
