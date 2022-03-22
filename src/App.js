import React, {Fragment, useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import './App.css';

import HomePage from './screens/home';
import PedidosPage from './screens/pedidos';
import NofoundPage from './screens/nofound';

import * as ROUTES from './constans/rutas';
import {StyleGeneral} from './components/Styles';
import FooterComponen from './components/footer';
import NavbarComponent from './components/navbar';

function App() {
  const [windowHeight, setWindowHeight] = useState(0);
  
  let resizeWindow = () => {
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  return (
    <Fragment>
      <StyleGeneral windowHeight={windowHeight}>
        <BrowserRouter>
          <Routes>
            <Route path={ROUTES.PEDIDOS} element={<NavbarComponent />} >
              <Route index path={ROUTES.PEDIDOS} element={<HomePage />} />
              <Route path={ROUTES.PEDIDOS_DETALLE} element={<PedidosPage />} />
            </Route>
            <Route path="*" element={<NofoundPage />} />
          </Routes>
        </BrowserRouter>
        <FooterComponen />
      </StyleGeneral>
    </Fragment>
  );
}

export default App;
