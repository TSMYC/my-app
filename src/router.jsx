import Home from './pages/Home';
import Fichelogement from './pages/Fichelogement';
import Error from './pages/Error';
import Apropos from './pages/Apropos';

import {
    createBrowserRouter
  } from "react-router-dom";
  
import Gallery from './components/Gallery/Gallery';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <Error/>,
      children: [
        {
          path: "",
          element: <Gallery />,
        },
        {
          path: "/:id",
          element: <Fichelogement />,
        },
        {
          path: "/apropos",
          element: <Apropos />,
        }
      ]
    }
  ]);

export default router;