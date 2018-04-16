import React, {Component} from 'react';
import NameForm from './FormPrueba'

class FormPadre extends Component {
 render() {
     return(
        <NameForm
        getErrorMessage={value => {
          if (value.length < 5) return `Must be at least 3 characters`;
          if (!value.includes("@")) return `Username must have an '@'`;
          return null;
        }}
      />
     )
 }
}

export default FormPadre;