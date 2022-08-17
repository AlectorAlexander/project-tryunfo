import React, { useContext, useEffect, useState } from 'react';
import './form.css';
import PropTypes from 'prop-types';
import Inputs from './inputs';
import OnSave from '../hooks/onSave';
import TryContext from '../context/TryContext';

function Form(props) {
  const cardAttributes = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'Normal',
    cardTrunfo: false,
  };

  const {
    hasTrunfo,
    setMainCard,
    decimation,
    snap,
    setHasTrunfo,
    onSave,
  } = useContext(TryContext);

  const { frase } = props;
  const [formCard, setFormCard] = useState(cardAttributes);

  const {
    cardName,
    cardDescription,
    cardAttr1,
    cardAttr2,
    cardAttr3,
    cardImage,
    cardRare,
    cardTrunfo,
  } = formCard;

  useEffect(() => {
    if (decimation) {
      // decimation é uma varíavel de valor booleano que tem seu valor inicial como 'false', e é setada por 'snap()'. 'decimantion' é convertida a 'true' quando o usuário clica no botão 'salvar', provindo do hook onSave (não confundir com o state onSave). Foi a maneira mais simples que encontrei de retornar os valores do formulário para seu estado inicial.
      setFormCard(cardAttributes);

      // Aqui, na linha 50, estou aproveitando o useEffect q, consequentemente, se inicializa sempre q o usuário clica em 'salvar', para conferir se alguma card salva no estado global 'onSave' possui o atributo 'cardTrunfo' marcado como 'true'. Caso sim, o usuário não verá mais o checkbox, e em seu lugar terá uma frase informando q ele já possui um card superTrunfo. Só pode haver uma superTrunfo no game.
      onSave.map((card) => (
        card.cardTrunfo ? setHasTrunfo(true) : setHasTrunfo(false)));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [decimation], snap(false));

  const onInputChange = ({ target }) => {
    const card = { ...formCard };
    const { name, value, type, checked } = target;
    if (type === 'checkbox') {
      card[name] = checked;
    } else {
      card[name] = value;
    }
    setFormCard(card);
  };

  useEffect(() => {
    // mainCard é o global state q alimenta a carta que é renderizada em tempo real enquanto o usuário preenche o formulário. É aqui que passo as informações pra ela.
    setMainCard({ ...formCard });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formCard]);
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
          {/* se o usuário já possui uma carta superTrunfo, ele verá uma frase o informando disso ao invés do checkbox */}
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
  frase: PropTypes.string.isRequired,
};

export default Form;
