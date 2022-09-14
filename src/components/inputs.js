import React from 'react';
import './card.css';
import PropTypes from 'prop-types';

class Inputs extends React.Component {
  render() {
    const { onChange, checked, hasTrunfo } = this.props;
    return (
      <div className="Input m-2">
        {/* se o usuário já possui uma carta superTrunfo, ele verá uma frase o informando disso ao invés do checkbox 'Super Trunfo?' */}
        { !hasTrunfo
          ? (
            <label className="m-0" htmlFor="check">
              <span> Super Trunfo? </span>
              <input
                className="p-2"
                name="cardTrunfo"
                onChange={ onChange }
                type="checkbox"
                checked={ checked }
              />
            </label>)
          : <p data-testid="trunfo-card">Você já tem um Super Trunfo em seu baralho</p>}
      </div>
    );
  }
}

Inputs.propTypes = {
  checked: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,

};

export default Inputs;
