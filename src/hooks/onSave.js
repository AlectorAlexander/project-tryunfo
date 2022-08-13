import React, { useContext, useEffect, useState } from 'react';
import TryContext from '../context/TryContext';

function OnSave() {
  const { setOnSave, onSave, mainCard, setMainCard } = useContext(TryContext);
  const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState(true);

  const SaveButtonClick = (() => {
    const noventa = 90;
    const duzentosE10 = 210;

    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = mainCard;

    const validateNotEmpty = [
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    ];

    const validateAttrs = [cardAttr1, cardAttr2, cardAttr3];

    const isNotEmpty = validateNotEmpty.every((stuffs) => stuffs !== '');

    const isNotBig = validateAttrs.every((attr) => attr >= 0 && attr <= noventa);

    const isNotSoBig = Number(cardAttr1)
    + Number(cardAttr2)
    + Number(cardAttr3)
    <= duzentosE10;

    const validate = isNotEmpty && isNotBig && isNotSoBig;

    if (validate) {
      setIsSaveButtonDisabled(false);
    } else {
      setIsSaveButtonDisabled(true);
    }
  });
  useEffect(() => {
    console.log(mainCard);
    SaveButtonClick();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mainCard]);

  const cleanMainCard = () => setMainCard({
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

  const onSaveButtonClick = (() => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = mainCard;

    const newObj = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    setOnSave([...onSave, newObj]);
    return cleanMainCard;
  });

  return (
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
  );
}

export default OnSave;
