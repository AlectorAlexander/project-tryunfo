import React, { useContext, useState } from 'react';
import './cards.css';
import Card from './Card';
import Characters from './Characters';
import TryContext from '../context/TryContext';

function Cards() {
  const { onSave, setHasTrunfo, setCharecters,
    characters, setOnSave } = useContext(TryContext);
  const [searchName, setSearchName] = useState('');
  const [searchOptionRare, setOptionRare] = useState('');
  const [checked, setOnCheck] = useState(false);

  const removeCard = (({ target }) => {
    const { value } = target;
    const { cardTrunfo } = onSave[value];
    if (cardTrunfo) {
      setHasTrunfo(false);
    }
    setOnSave((Element) => Element.filter((card) => card !== onSave[value]));
    const newCharecter = Characters.filter(({ name }) => name === target.name);
    setCharecters([...characters, ...newCharecter].sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        // eslint-disable-next-line no-magic-numbers
        return -1;
      }
      return 0;
    }));
  });

  const filterOnSaveByName = onSave
    .filter(({ cardName }) => cardName.toLowerCase().includes(searchName.toLowerCase()))
    .filter(({ cardRare }) => cardRare
      .toLowerCase().startsWith(searchOptionRare.toLowerCase()));

  const trunfoCard = () => onSave.filter(({ cardTrunfo }) => cardTrunfo === true);

  const trunfoCardReturn = () => {
    const card = trunfoCard();
    // eslint-disable-next-line array-callback-return
    if (card.length) {
      const index = onSave.findIndex((el) => el.cardName === card[0].cardName);
      const { cardName, cardDescription,
        cardAttr1, cardAttr2, cardAttr3, cardImage,
        cardRare, cardTrunfo } = card[0];
      return (
        <div className={ `Cards number${index} m-3 mt-5` }>
          <Card
            cardName={ cardName }
            sectionClass={ `cards number${index}` }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
          <button
            className="btn btn-outline-danger"
            type="button"
            onClick={ removeCard }
            value={ index }
            name={ cardName }
          >
            Excluir
          </button>
        </div>);
    }
    return '';
  };

  return (
    <div className="w-100">
      <label
        className="w-25 d-flex m-auto mt-5 text-white rounded bg-danger"
        htmlFor="searchName"
      >
        {' '}
        <strong>Pesquisar carta por nome:</strong>
        <input
          className="form-control"
          name="searchName"
          type="text"
          value={ searchName }
          onChange={ ({ target }) => setSearchName(target.value) }
        />
        {' '}

      </label>
      <label
        className="w-25 d-flex m-auto mt-2 text-white rounded bg-danger"
        htmlFor="selectRarity"
      >
        {' '}
        <strong> Pesquisar por raridade:</strong>
        <select
          className="form-control"
          onChange={ ({ target }) => setOptionRare(target.value) }
          type="text"
          name="selectRarity"
        >
          <option value="">Todas</option>
          <option>Normal</option>
          <option>Raro</option>
          <option>Muito raro</option>
        </select>

      </label>
      <label
        className="w-25 d-flex m-auto mt-2 text-white
      bg-danger rounded"
        htmlFor="jah"
      >
        <strong><p className="d-flex m-auto">Super Tarantryunfo?</p></strong>
        <input
          type="checkbox"
          name="jah"
          className="form-check-input m-auto"
          onChange={ () => setOnCheck(!checked) }
          checked={ checked }
        />
      </label>

      <div className="cardsSection">

        {!checked ? filterOnSaveByName.map((card, i) => {
          const { cardName, cardDescription,
            cardAttr1, cardAttr2, cardAttr3, cardImage,
            cardRare, cardTrunfo } = card;
          return (
            <div key={ i } className={ `Cards number${i} m-3 mt-5` }>
              <Card
                cardName={ cardName }
                sectionClass={ `cards number${i}` }
                cardDescription={ cardDescription }
                cardAttr1={ cardAttr1 }
                cardAttr2={ cardAttr2 }
                cardAttr3={ cardAttr3 }
                cardImage={ cardImage }
                cardRare={ cardRare }
                cardTrunfo={ cardTrunfo }
              />
              <button
                className="btn btn-outline-danger"
                type="button"
                onClick={ removeCard }
                data-testid="delete-button"
                value={ i }
                name={ cardName }
              >
                Excluir
              </button>
            </div>);
        }) : trunfoCardReturn()}
      </div>
    </div>
  );
}

/* Cards.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  divClass: PropTypes.string.isRequired,
  sectionClass: PropTypes.string.isRequired,
  removeCard: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
}; */

export default Cards;
