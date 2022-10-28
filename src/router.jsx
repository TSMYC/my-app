import Home from './pages/Home';
import Fichelogement from './pages/Fichelogement';
import Error from './pages/Error';
import Apropos from './pages/Apropos';

import {
    createBrowserRouter,
    Route,
    createRoutesFromElements,
  } from "react-router-dom";
  
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Home />}>
        <Route path="fichelogement/:fichelogementId" element={<Fichelogement />} />
        <Route path="error" element={<Error />} />
        <Route path="apropos" element={<Apropos />} />
  
      </Route>
    )
  );

export default router;