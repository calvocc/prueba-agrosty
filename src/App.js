import React, {Fragment, useEffect, useState} from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';

import HomePage from './screens/home';
import PedidosPage from './screens/pedidos';

import * as ROUTES from './constans/rutas';
import {StyleGeneral} from './components/Styles';

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
        <Router>
          <Routes>
            <Route exact path={ROUTES.HOME} element={<HomePage />} />
            <Route exact path={ROUTES.PEDIDOS} element={<PedidosPage />} />
          </Routes>
        </Router>
      </StyleGeneral>
    </Fragment>
  );
}

export default App;
