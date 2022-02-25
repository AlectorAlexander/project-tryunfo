import React from 'react';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.inputChange = this.inputChange.bind(this);
    this.state = {
      cardName: '',
      cardDescription: '',
      tribute1: 0,
      tribute2: 0,
      tribute3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: '',
      isSaveButtonDisabled: true,
    };
  }

  onSaveButtonClick = (() => {
    this.state = {
      isSaveButtonDisabled: true,
    };
  })

  inputChange({ target }) {
    console.log(target.name);
    console.log(this.state);
    //
    const { name, value } = target;
    this.setState(() => ({
      [name]: value,
      isSaveButtonDisabled: false,
    }));
  }

  render() {
    const { cardName } = this.state;
    const { isSaveButtonDisabled } = this.state;
    const vddOuN = isSaveButtonDisabled === true ? false : 'disabled';
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form onInputChange={ this.inputChange } disabled={ vddOuN } value={ cardName } />
      </div>
    );
  }
}

export default App;
