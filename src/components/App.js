 import React, {Component} from 'react';
//import {Router , Route, IndexRoute, browserHistory, Link} from 'react-router';
import AppIndex from './AppIndex';
import FormPadre from './Form-padre';
import {
	BrowserRouter,
	Route,
  Switch
} from 'react-router-dom';

 

//const About = () => <h2>About hecho por rutas!!</h2>;
//const NoMatch = () => <h2>Este es el noMatch , la página no ha sido encontrada!!</h2> 
/* 
class App extends Component {
  render() { */
/* 
    return(
      <Router history={browserHistory}>
      
        <Route path="/" component={FormPadre}/>
        <Route path="/about" component={About}/>
        <Route path="/appIndex" component ={AppIndex}/>
        <Route path="*" component={NoMatch} />
      </Router>
    ) */
  /*   return(
      <FormPadre/>
    )
    
  }
}
export default App */

const App = (props) => {
	return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route  path="/FormPadre" render={() => <FormPadre/>}/>
          <Route  path="/AppIndex" render={() => <AppIndex/>}/>
          <Route component={FormPadre}/>
        </Switch>
      </div>
    </BrowserRouter>)
}


export default App


