import { createBrowserRouter } from 'react-router-dom'
import App from './App'

import Cart from './components/Cart/Cart'
import Contact from './components/Contact/Contact'
import Mouses from './pages/Mouses/Mouses'
import NotFound from './pages/NotFound'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/:id',
        element: <Mouses />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])
