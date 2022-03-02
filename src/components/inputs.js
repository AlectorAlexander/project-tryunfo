import React from 'react';
import './card.css';
import PropTypes from 'prop-types';

class Inputs extends React.Component {
  render() {
    const { on, has, card } = this.props;
    return (
      <div className="Input">
        <label htmlFor="check">
          <span> Super Trunfo? </span>
          <input
            data-testid="trunfo-input"
            name="cardTrunfo"
            onChange={ on }
            disabled={ has }
            type="checkbox"
            checked={ card }
          />
        </label>
      </div>
    );
  }
}

Inputs.propTypes = {
  card: PropTypes.bool.isRequired,
  on: PropTypes.func.isRequired,
  has: PropTypes.bool.isRequired,

};

export default Inputs;
