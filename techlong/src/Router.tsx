import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/Home/Home";
import Mouse1 from "./components/Mouses/Mouse1";
import Mouse3 from "./components/Mouses/Mouse3";
import Mouse2 from "./components/Mouses/Mouse2";
import Contact from "./components/Contact/Contact";
import Cart from "./components/Cart/Cart";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/mouse1",
        element: <Mouse1 />,
      },
      {
        path: "/mouse2",
        element: <Mouse2 />,
      },
      {
        path: "/mouse3",
        element: <Mouse3 />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
