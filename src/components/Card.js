import React from 'react';
import './card.css';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, divClass, sectionClass } = this.props;
    return (
      <div className={ divClass }>
        <section className={ sectionClass }>
          <h2 className="m-2">{cardName}</h2>

          <img
            className="img-fluid img-thumbnail"
            src={ cardImage }
            alt={ cardName }
          />
          <p data-testid="description-card">{ cardDescription }</p>

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
          <h3 className="d-flex justify-content-center">{ cardRare }</h3>
          { cardTrunfo === true ? <h3 data-testid="trunfo-card">Super Trunfo</h3> : ' '}
        </section>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  divClass: PropTypes.string.isRequired,
  sectionClass: PropTypes.string.isRequired,
};

export default Card;
