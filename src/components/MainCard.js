import React, { useContext } from 'react';

import TryContext from '../context/TryContext';
import './card.css';

function MainCard() {
  const { mainCard } = useContext(TryContext);
  const { cardName, cardDescription,
    cardAttr1, cardAttr2, cardAttr3, cardImage,
    cardRare, cardTrunfo, divClass, sectionClass } = mainCard;
  return (
    <div className={ divClass }>
      <section className={ sectionClass }>
        <h2 data-testid="name-card">{cardName}</h2>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p data-testid="description-card">{ cardDescription }</p>
        <ul>
          <li data-testid="attr1-card">{ cardAttr1 }</li>
          <li data-testid="attr2-card">{ cardAttr2 }</li>
          <li data-testid="attr3-card">{ cardAttr3 }</li>
        </ul>
        <h3 data-testid="rare-card">{ cardRare }</h3>
        { cardTrunfo === true ? <h3 data-testid="trunfo-card">Super Trunfo</h3> : ' '}
      </section>
    </div>
  );
}

export default MainCard;
