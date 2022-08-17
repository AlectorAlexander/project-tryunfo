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
  const [onSave, setOnSave] = useState([]);
  const [decimation, snap] = useState(false);
  const [hasTrunfo, setHasTrunfo] = useState(false);
  const contextValue = {
    onSave,
    setOnSave,
    hasTrunfo,
    setHasTrunfo,
    decimation,
    snap,
    mainCard,
    setMainCard,
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
