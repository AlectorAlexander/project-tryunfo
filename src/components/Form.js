import React from 'react';
import './form.css';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;
    return (
      <div id="Formulário">
        <form>
          <label className="label" htmlFor="Card-Name">
            <span> Nome da carta: </span>
            <input
              data-testid="name-input"
              onChange={ onInputChange }
              value={ cardName }
              name="cardName"
              type="text"
            />
          </label>
          <label className="label" htmlFor="description">
            <span> Descrição da carta: </span>
            <textarea
              data-testid="description-input"
              onChange={ onInputChange }
              value={ cardDescription }
              name="cardDescription"
              type="text"
            />
          </label>
          <label className="label" htmlFor="tribute1">
            <span> Atributo 1: </span>
            <input
              data-testid="attr1-input"
              value={ cardAttr1 }
              name="cardAttr1"
              onChange={ onInputChange }
              type="number"
            />
          </label>
          <label className="label" htmlFor="tribute2">
            <span> Atributo 2: </span>
            <input
              data-testid="attr2-input"
              name="cardAttr2"
              onChange={ onInputChange }
              type="number"
              value={ cardAttr2 }
            />
          </label>
          <label className="label" htmlFor="tribute3">
            <span> Atributo 3: </span>
            <input
              data-testid="attr3-input"
              name="cardAttr3"
              onChange={ onInputChange }
              type="number"
              value={ cardAttr3 }
            />
          </label>
          <label className="label" htmlFor="Imagem">
            <span> Imagem: </span>
            <input
              data-testid="image-input"
              name="cardImage"
              type="url"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <select
            data-testid="rare-input"
            onChange={ onInputChange }
            name="cardRare"
            value={ cardRare }
          >
            <option selected value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
          <label htmlFor="check">
            <span> Super Trunfo? </span>
            <input
              data-testid="trunfo-input"
              name="cardTrunfo"
              onChange={ onInputChange }
              type="checkbox"
              checked={ cardTrunfo }
            />
          </label>
          <button
            type="button"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            className="save"
          >
            {' '}
            Salvar
            {' '}
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,

};

export default Form;
