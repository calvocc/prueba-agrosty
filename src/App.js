import React, {Fragment} from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';

import HomePage from './screens/home';
import PedidosPage from './screens/pedidos';

import * as ROUTES from './constans/rutas';

function App() {
  return (
    <Fragment>
			<Router>
        <Routes>
          <Route exact path={ROUTES.HOME} element={<HomePage />} />
          <Route exact path={ROUTES.PEDIDOS} element={<PedidosPage />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
