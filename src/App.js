import React from 'react';
import Card from './components/Card';
import Cards from './components/Cards';
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
      cardRare: 'Normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      onSave: [],
      hasTrunfo: false,
      frase: 'Você já tem um Super Trunfo em seu baralho',
    };
  }

  removeCard = (({ target }) => {
    const { onSave } = this.state;
    const { value } = target;
    const { cardTrunfo } = onSave[value];
    onSave.splice(value, 1);
    this.clean();
    if (cardTrunfo) {
      this.setState(() => ({
        hasTrunfo: false,
      }));
    }
  })

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
    const returno = newObj.cardTrunfo ? this.hasTrunfo : this.clean;
    this.setState((estate) => ({
      // Referência https://stackoverflow.com/questions/37435334/correct-way-to-push-into-state-array
      onSave: [...estate.onSave, newObj],
    }), returno);
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
          <Card
            cardName={ cardName }
            divClass="Card"
            sectionClass="card"
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </div>
        { titleOfCardsComponent }
        <div className="cardsSection">
          { onSave.map((state, i) => (<Cards
            cardName={ state.cardName }
            divClass={ `Cards number${i}` }
            sectionClass={ `cards number${i}` }
            key={ i }
            cardDescription={ state.cardDescription }
            cardAttr1={ state.cardAttr1 }
            cardAttr2={ state.cardAttr2 }
            cardAttr3={ state.cardAttr3 }
            cardImage={ state.cardImage }
            cardRare={ state.cardRare }
            cardTrunfo={ state.cardTrunfo }
            removeCard={ this.removeCard }
            index={ i }
          />)) }
        </div>
      </div>
    );
  }
}

export default App;
