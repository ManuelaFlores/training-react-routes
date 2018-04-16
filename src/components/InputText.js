import React, { Component } from 'react';

class InputText extends Component {
  render() {
    return (
      <form className="styles-form" onSubmit={this.props.onSendText}>
      <div className="w-100 d-flex justify-content-center">
      <textarea  className="form-control border-radius-5px text-inputText w-75" rows="4" name="text"></textarea>
      </div>
      <div className="buttons-inputText d-flex justify-content-end p-3 col-10 ">
      <button className="close-inputText p-2 border-radius-5px m-2 border-none text-white font-weight-bold" onClick={this.props.onCloseText}>Cerrar</button>
      <button className="send-inputText bg-green-lab p-2 border-radius-5px m-2 border-none text-white font-weight-bold" type='submit'  >Enviar</button>
      </div>
      </form>
    )
  }
}

export default InputText;