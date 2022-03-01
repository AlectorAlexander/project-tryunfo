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
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      onSave: [],
    };
  }

  clean = (() => {
    this.setState(() => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    }));
  })

  onSaveButtonClick = (() => {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo } = this.state;
    const newObj = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    this.setState((estate) => ({
      // Referência https://stackoverflow.com/questions/37435334/correct-way-to-push-into-state-array
      onSave: [...estate.onSave, newObj],
    }), this.clean);
  })

  SaveButtonClick = (() => {
    const noventa = 90;
    const duzentosE10 = 210;
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare } = this.state;
    const stuff = [cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare];
    const attrs = [cardAttr1, cardAttr2, cardAttr3];
    const isNotEmpty = stuff.every((stuffs) => stuffs !== '');
    const isNotBig = attrs.every((attr) => attr >= 0 && attr <= noventa);
    const isNotSoBig = Number(cardAttr1)
    + Number(cardAttr2)
    + Number(cardAttr3)
    <= duzentosE10;
    const validate = isNotEmpty && isNotBig && isNotSoBig;
    if (validate) {
      this.setState(() => ({
        isSaveButtonDisabled: false,
      }));
    } else {
      this.setState(() => ({
        isSaveButtonDisabled: true,
      }));
    }
  })

  inputChange({ target }) {
    //
    const { name, value } = target;
    this.setState(() => ({
      [name]: target.type === 'checkbox' ? target.checked : value,
    }), this.SaveButtonClick);
  }

  render() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, isSaveButtonDisabled } = this.state;
    return (
      <div className="App">
        <h1>Tryunfo</h1>
        <div className="ap">
          <Form
            onInputChange={ this.inputChange }
            cardName={ cardName }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            value={ cardName }
            cardDescription={ cardDescription }
            cardTrunfo={ cardTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ this.onSaveButtonClick }
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
