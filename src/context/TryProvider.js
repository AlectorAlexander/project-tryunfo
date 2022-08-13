import PropTypes from 'prop-types';
import React, { useState } from 'react';
import TryContext from './TryContext';

function Provider({ children }) {
  const [mainCard, setMainCard] = useState({
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
  });
  const [cardName, setCardName] = useState('');
  const [cardDescription, setCardDescription] = useState('');
  const [cardAttr1, setCardAttr1] = useState('0');
  const [cardAttr2, setCardAttr2] = useState('0');
  const [cardAttr3, setCardAttr3] = useState('0');
  const [cardImage, setcardImage] = useState('');
  const [cardRare, setCardRare] = useState('Normal');
  const [cardTrunfo, setCardTrunfo] = useState(false);
  const [onSave, setOnSave] = useState([]);
  const [hasTrunfo, setHasTrunfo] = useState(false);
  const [frase, setFrase] = useState('Você já tem um Super Trunfo em seu baralho');
  const contextValue = {
    cardRare,
    setCardRare,
    cardTrunfo,
    setCardTrunfo,
    onSave,
    setOnSave,
    hasTrunfo,
    setHasTrunfo,
    frase,
    setFrase,
    mainCard,
    setMainCard,
    cardName,
    cardImage,
    cardDescription,
    cardAttr1,
    cardAttr2,
    cardAttr3,
    setCardAttr1,
    setCardAttr2,
    setCardAttr3,
    setCardName,
    setCardDescription,
    setcardImage,
  };

  return (
    <TryContext.Provider value={ contextValue }>
      {children}
    </TryContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
