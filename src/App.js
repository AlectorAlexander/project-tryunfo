import React from 'react';
import Cards from './components/Cards';
import Form from './components/Form';
import MainCard from './components/MainCard';

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
      cardRare: 'Normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      onSave: [],
      hasTrunfo: false,
      frase: 'Você já tem um Super Trunfo em seu baralho',
    };
  }

  hasTrunfo = (() => {
    this.setState(() => ({
      hasTrunfo: true,
    }), this.clean);
  })

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
      cardRare, cardTrunfo, isSaveButtonDisabled, hasTrunfo, frase, onSave } = this.state;
    const titleOfCardsComponent = onSave.length > 0
      ? <h1 className="cardsComponent">Todas as cartas</h1> : ' ';
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
            hasTrunfo={ hasTrunfo }
            frase={ frase }
          />
          <MainCard />
        </div>
        { titleOfCardsComponent }
        <Cards />
      </div>
    );
  }
}

export default App;
