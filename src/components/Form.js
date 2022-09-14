/* eslint-disable prefer-destructuring */
import React, { useContext, useEffect, useState } from 'react';
import './form.css';
import Inputs from './inputs';
import OnSave from '../hooks/onSave';
import TryContext from '../context/TryContext';

function Form() {
  const {
    hasTrunfo,
    setMainCard,
    decimation,
    snap,
    setHasTrunfo,
    characters,
    setCardImage,
    onSave,
    cardImage,
  } = useContext(TryContext);

  const cardAttributes = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage,
    cardRare: 'Normal',
    cardTrunfo: false,
  };

  const [formCard, setFormCard] = useState(cardAttributes);

  const {
    cardName,
    cardDescription,
    cardAttr1,
    cardAttr2,
    cardAttr3,
    cardRare,
    cardTrunfo,
  } = formCard;

  useEffect(() => {
    if (decimation) {
      // decimation é uma varíavel de valor booleano que tem seu valor inicial como 'false', e é setada por 'snap()'. 'decimantion' é convertida a 'true' quando o usuário clica no botão 'salvar', provindo do hook onSave (não confundir com o state onSave). Foi a maneira mais simples que encontrei de retornar os valores do formulário para seu estado inicial.
      setFormCard(cardAttributes);

      // Aqui, na linha 50, estou aproveitando o useEffect q, consequentemente, se inicializa sempre q o usuário clica em 'salvar', para conferir se alguma card salva no estado global 'onSave' possui o atributo 'cardTrunfo' marcado como 'true'. Caso sim, o usuário não verá mais o checkbox, e em seu lugar terá uma frase informando q ele já possui um card superTrunfo. Só pode haver uma superTrunfo no game.
      const itsTrunfoOrNot = onSave.some((card) => (
        card.cardTrunfo === true));
      setHasTrunfo(itsTrunfoOrNot);
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

  const onImageChange = ({ target }) => {
    const { value } = target;
    const { src } = characters.find(({ name }) => name === value);
    setCardImage(src[0]);
    onInputChange({ target });
  };
  useEffect(() => {
    // mainCard é o global state q alimenta a carta que é renderizada em tempo real enquanto o usuário preenche o formulário. É aqui que passo as informações pra ela.
    setMainCard({ ...formCard });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formCard]);
  return (
    <div className="form-group" id="Formulário">
      <form
        className="d-flex form flex-md-column w-100 form-control p-3 form-control-sm"
        style={ { width: '60%' } }
      >
        <label className="label m-2" htmlFor="Card-Name">
          <span> Nome da carta: </span>
          <select
            className="form-control form-control-sm-sm"
            onChange={ onImageChange }
            value={ cardName }
            name="cardName"
            type="text"
          >
            <option selected value> -- Selecione um personagem -- </option>
            {characters.map((char, i) => (
              <option
                key={ i }
                value={ char.name }
                name={ char.name }
              >
                {' '}
                { char.name }
                {' '}
              </option>
            ))}
          </select>
        </label>
        <label className="label m-2" htmlFor="description">
          <span> Descrição da carta: </span>
          <textarea
            data-testid="description-input"
            onChange={ onInputChange }
            value={ cardDescription }
            name="cardDescription"
            className="form-control form-control-sm"
            type="text"
            maxLength={ 74 }
          />
        </label>
        <label className="label m-2" htmlFor="tribute1">
          <span> Psicopatia: </span>
          <input
            data-testid="attr1-input"
            placeholder="Nível da Psicopatia"
            value={ cardAttr1 }
            name="cardAttr1"
            className="form-control form-control-sm"
            onChange={ onInputChange }
            type="number"
          />
        </label>
        <label className="label m-2" htmlFor="tribute2">
          <span> Profissionalismo: </span>
          <input
            data-testid="attr2-input"
            name="cardAttr2"
            className="form-control form-control-sm"
            onChange={ onInputChange }
            type="number"
            value={ cardAttr2 }
            placeholder="Nível do Profissionalismo"
          />
        </label>
        <label className="label m-2" htmlFor="tribute3">
          <span> Pontaria: </span>
          <input
            value={ cardAttr3 }
            placeholder="Nível da Pontaria"
            className="form-control form-control-sm"
            data-testid="attr3-input"
            name="cardAttr3"
            onChange={ onInputChange }
            type="number"
          />
        </label>
        {/* PRETENDO ADICIONAR A OPÇÃO PARA O USUÁRIO ESCOLHER A PRÓPRIA IMAGEM EM UMA ATUALIZAÇÃO FUTURA;
        <label className="label" htmlFor="Imagem">
          <span> Imagem: </span>
          <input
            data-testid="image-input"
            name="cardImage"
            type="url"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label> */}
        <select
          style={ { width: 120, height: 50 } }
          className="text-dark form-select m-2"
          data-testid="rare-input"
          onChange={ onInputChange }
          name="cardRare"
          value={ cardRare }
        >
          <option selected value="Normal">Normal</option>
          <option>Raro</option>
          <option>Muito Raro</option>
        </select>
        <Inputs
          hasTrunfo={ hasTrunfo }
          onChange={ onInputChange }
          checked={ cardTrunfo }
        />
        <OnSave />
      </form>
    </div>
  );
}

export default Form;
