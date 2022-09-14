import React, { useContext/* , useEffect */ } from 'react';

import TryContext from '../context/TryContext';
import './card.css';

function MainCard() {
  const { mainCard, cardImage } = useContext(TryContext);
  const { cardName, cardDescription,
    cardAttr1, cardAttr2, cardAttr3,
    cardRare, cardTrunfo } = mainCard;
  return (
    <div className="Card d-flex flex-column">
      <h2>{cardName}</h2>
      <section className="card align-items-start">
        <img
          className="img-fluid img-thumbnail"
          src={ cardImage }
          alt={ cardName }
        />
        <p className="w-100 text-center">{ cardDescription }</p>

      </section>
      <ul>
        <li className="text-black">
          <strong>
            {
              `Nível de Psicopatia ...... ${cardAttr1}`
            }

          </strong>

        </li>
        <li className="text-black">
          <strong>
            {
              `Nível do Profissionalismo ...... ${cardAttr2}`
            }

          </strong>
        </li>
        <li className="text-black">
          <strong>
            {
              `Nível da Pontaria ...... ${cardAttr3}`
            }

          </strong>
        </li>
      </ul>
      <h3
        className="d-flex justify-content-center"
      >
        { cardRare }

      </h3>
      { cardTrunfo === true ? <h3 data-testid="trunfo-card">Super Trunfo</h3> : ' '}
    </div>
  );
}

export default MainCard;
