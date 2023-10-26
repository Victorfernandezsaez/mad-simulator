import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './routes/About'
import Contact from './routes/Contact'
import Cart from './routes/Cart'
import ErrorPage from './routes/ErrorPage'
import { ShopContextProvider } from './components/context/ShopContext'

const router = createBrowserRouter([
  {
    path: '*',
    element: <ErrorPage />
  },
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'about',
    element: <About />
  },
  {
    path: 'contact',
    element: <Contact />
  },
  {
    path: 'cart',
    element: <Cart />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShopContextProvider>
      <RouterProvider router={router} />
    </ShopContextProvider>
  </React.StrictMode>,
)
