import PropTypes from 'prop-types';
import React, { useState } from 'react';
import TryContext from './TryContext';

function Provider({ children }) {
  const [cardName, setCardName] = useState('');
  const [cardDescription, setCardDescription] = useState('');
  const [cardAttr1, setCardAttr1] = useState('0');
  const [cardAttr2, setCardAttr2] = useState('0');
  const [cardAttr3, setCardAttr3] = useState('0');
  const [cardImage, setcardImage] = useState('');
  const [cardRare, setCardRare] = useState('Normal');
  const [cardTrunfo, setCardTrunfo] = useState(false);
  const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState(true);
  const [onSave, setOnSave] = useState([]);
  const [hasTrunfo, setHasTrunfo] = useState(false);
  const [frase, setFrase] = useState('Você já tem um Super Trunfo em seu baralho');
  const contextValue = {
    cardRare,
    setCardRare,
    cardTrunfo,
    setCardTrunfo,
    isSaveButtonDisabled,
    setIsSaveButtonDisabled,
    onSave,
    setOnSave,
    hasTrunfo,
    setHasTrunfo,
    frase,
    setFrase,
    column,
    setColumn,
    loading,
    cardName,
    cardImage,
    cardDescription,
    cardAttr1,
    cardAttr2,
    cardAttr3,
    setCardAttr1,
    setCardAttr2,
    setCardAttr3,
    filterByNumeric,
    setFilterByNumeric,
    setCardName,
    setCardDescription,
    setStarWarsState,
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
