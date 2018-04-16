import React, {Component} from 'react';
import {Router , Route, IndexRoute, browserHistory, Link} from 'react-router'


const Home = () => <h2>Este el home</h2>;
const About = () => <h2>About hecho por rutas!!</h2>;
const Template = (props) => {
  return(
    <div>
      <h1>Mi super aplicacion que ojalá me salga U_U"</h1>
      <ul>
        <li> <Link to="/"> Home </Link></li>
        <li> <Link to="/about"> About </Link></li>
      </ul>
      {props.children}
    </div>
  )
};

const Message = (props) => <h1>Mensaje: {props.params.id}</h1>

const NoMatch = () => <h2>Este es el noMatch , la página no ha sido encontrada!!</h2> 

class App extends Component {
  render() {
    return(
      <Router history={browserHistory}>
        <Route path="/" component={Template}>
        <IndexRoute component={Home}/>
        <Route path="/about" component={About}/>
        </Route>
        <Route path="message/:id" component={Message}/>
        <Route path="*" component={NoMatch} />
      </Router>
    )
  }
}
export default App
