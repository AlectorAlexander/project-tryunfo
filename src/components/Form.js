import React, { useContext, useEffect, useState } from 'react';
import './form.css';
import PropTypes from 'prop-types';
import Inputs from './inputs';
import OnSave from '../hooks/onSave';
import TryContext from '../context/TryContext';

function Form(props) {
  const { setMainCard, isSaveButtonDisabled } = useContext(TryContext);
  const { hasTrunfo, frase } = props;
  const [formCard, setFormCard] = useState({
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'Normal',
    cardTrunfo: false,
  });

  const {
    cardName,
    cardDescription,
    cardAttr1,
    cardAttr2,
    cardAttr3,
    cardImage,
    cardRare,
    cardTrunfo } = formCard;

  const onInputChange = ({ target }) => {
    const form = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    const { name, value, type, checked } = target;
    if (type === 'checkbox') { form[name] = checked; } else {
      form[name] = value;
    }
    setFormCard(form);
  };

  useEffect(() => {
    setMainCard({
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    cardName,
    cardDescription,
    cardAttr1,
    cardAttr2,
    cardAttr3,
    cardImage,
    cardRare,
    cardTrunfo,
    isSaveButtonDisabled,
  ]);
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
          { hasTrunfo === true
            ? <p data-testid="trunfo-card">{frase}</p>
            : <Inputs on={ onInputChange } has={ hasTrunfo } card={ cardTrunfo } />}
        </label>
        <OnSave />
      </form>
    </div>
  );
}

Form.propTypes = {
  hasTrunfo: PropTypes.bool.isRequired,
  frase: PropTypes.string.isRequired,
};

export default Form;
