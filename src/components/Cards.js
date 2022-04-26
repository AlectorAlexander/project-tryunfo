import React from 'react';
import './cards.css';
import PropTypes from 'prop-types';
import Card from './Card';

class Cards extends React.Component {
  render() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, divClass, sectionClass, removeCard, index } = this.props;
    return (
      <div className={ divClass }>
        <Card
          cardName={ cardName }
          sectionClass={ sectionClass }
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
          value={ index }
        >
          Excluir
        </button>
      </div>
    );
  }
}

Cards.propTypes = {
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
};

export default Cards;