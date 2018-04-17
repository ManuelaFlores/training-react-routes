import React, { Component } from 'react';
import AppIndex from './AppIndex';
import FormPadre from './Form-padre';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/FormPadre" render={() => <FormPadre />} />
          <Route path="/AppIndex" render={() => <AppIndex />} />
          <Route component={FormPadre} />
        </Switch>
      </div>
    </BrowserRouter>)
}


export default App;


