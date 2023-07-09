import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import IntroductionRoutes from './routes/Introduction.router.jsx'
import LoginRoutes from './routes/Login.router.jsx'
import RegisterRoutes from './routes/Register.router.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: '/deploy-my-project/',
    element: <IntroductionRoutes />
  },
  {
    path: '/deploy-my-project/login',
    element: <LoginRoutes />
  },
  {
    path: '/deploy-my-project/register',
    element: <RegisterRoutes />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
