import React from 'react';
import PropTypes from 'prop-types';

const prependZero = (number) => {
  if (number <= 9) {
    return `0${number}`;
  }
  return `${number}`;
};

const NumberedTitle = ({ number, title, className = '' }) => (
  <p className={`c-numbered-title ${className || ''}`}>
    <span className="c-numbered-title__number">{prependZero(number)}</span>
    <span className="c-numbered-title__title">{title}</span>
  </p>
);

NumberedTitle.defaultProps = {
  className: '',
};

NumberedTitle.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default NumberedTitle;
