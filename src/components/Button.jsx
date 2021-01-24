import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  
  render() {
    const { title, onClick } = this.props;
    return(
      <button 
        name={ title.toLowerCase().trim() }
        onClick= { onClick }
      > 
        { title }
      </button>
    );
  }
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Button;