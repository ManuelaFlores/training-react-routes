import React, {Component} from 'react';
import {Router , Route, IndexRoute, browserHistory, Link} from 'react-router';
import Main from './Main';
import FormPadre from './Form-padre';


const About = () => <h2>About hecho por rutas!!</h2>;
const NoMatch = () => <h2>Este es el noMatch , la página no ha sido encontrada!!</h2> 

class App extends Component {
  render() {

    return(
      <Router history={browserHistory}>
        {/* <Route path="/" component={Template}> */}
        <Route path="/" component={FormPadre}/>
        <Route path="/about" component={About}/>
        <Route path="/main" component ={Main}/>
      {/*   </Route> */}
       {/*  <Route path="message/:id" component={Message}/> */}
        <Route path="*" component={NoMatch} />
      </Router>
    )
    /* return(
      
      <SignUpForm/>

    ) */
  }
}
export default App
