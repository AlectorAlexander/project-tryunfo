import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.inputChange = this.inputChange.bind(this);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  onSaveButtonClick = (() => {
    this.state = {
      isSaveButtonDisabled: true,
    };
  })

  inputChange({ target }) {
    //
    const { name, value } = target;
    console.log(target.type);

    this.setState(() => ({
      [name]: target.type === 'checkbox' ? target.checked : value,
      isSaveButtonDisabled: false,
    }));
  }

  render() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, isSaveButtonDisabled } = this.state;
    const vddOuN = isSaveButtonDisabled === true ? false : 'disabled';
    return (
      <div className="App">
        <h1>Tryunfo</h1>
        <div className="ap">
          <Form
            onInputChange={ this.inputChange }
            disabled={ vddOuN }
            value={ cardName }
            cardDescription={ cardDescription }
            cardTrunfo={ cardTrunfo }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </div>
      </div>
    );
  }
}

export default App;
