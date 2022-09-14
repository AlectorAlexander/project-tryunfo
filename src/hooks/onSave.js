import React, { useContext, useEffect, useState } from 'react';
import Interrogaçao from '../images/Interrogação.jpg';
import TryContext from '../context/TryContext';

function OnSave() {
  const { setOnSave, onSave, mainCard, cardImage,
    setCharecters,
    characters,
    setMainCard, setCardImage, snap } = useContext(TryContext);
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
      cardRare,
    } = mainCard;

    const validateNotEmpty = [
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
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
    SaveButtonClick();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mainCard]);

  const cleanMainCard = () => setMainCard({
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage,
    cardRare: '',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
  }, snap(true));

  const onSaveButtonClick = (() => {
    const newObj = { ...mainCard, cardImage };
    const charecterName = newObj.cardName;
    const newCharecters = characters.filter(({ name }) => name !== charecterName);
    setCharecters(newCharecters);
    setOnSave([...onSave, newObj]);
    setCardImage('');
    setCardImage(Interrogaçao);
    return cleanMainCard();
  });

  return (
    <button
      type="button"
      disabled={ isSaveButtonDisabled }
      onClick={ onSaveButtonClick }
      className="save bs btn m-1 w-25"
    >
      {' '}
      Salvar
      {' '}
    </button>
  );
}

export default OnSave;
