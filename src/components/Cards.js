import React, { useContext } from 'react';
import './cards.css';
import Card from './Card';
import TryContext from '../context/TryContext';

function Cards() {
  const { onSave, setHasTrunfo, setOnSave } = useContext(TryContext);

  const removeCard = (({ target }) => {
    const { value } = target;
    const { cardTrunfo } = onSave[value];
    if (cardTrunfo) {
      setHasTrunfo(false);
    }
    setOnSave((Element) => Element.filter((card) => card !== onSave[value]));
  });

  return (
    <div className="cardsSection">
      {onSave.map((card, i) => {
        const { cardName, cardDescription,
          cardAttr1, cardAttr2, cardAttr3, cardImage,
          cardRare, cardTrunfo } = card;
        return (
          <div key={ i } className={ `Cards number${i}` }>
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
              className="button-element"
              type="button"
              onClick={ removeCard }
              data-testid="delete-button"
              value={ i }
            >
              Excluir
            </button>
          </div>);
      })}
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
