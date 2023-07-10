import React from 'react';

import 'rsuite/dist/styles/rsuite-default.css';
import './styles/main.scss';
import { Switch } from 'react-router';
import SignIn from './pages/SingIn';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import PublicRoutr from './components/PublicRoute';

function App() {
  return (
    <Switch>
      <PublicRoutr path="/signin">
        <SignIn />
      </PublicRoutr>
      <PrivateRoute path="/">
        <Home />
      </PrivateRoute>
    </Switch>
  );
}

export default App;
