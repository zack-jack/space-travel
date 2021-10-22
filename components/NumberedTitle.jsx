import React from 'react';
import PropTypes from 'prop-types';

const NumberedTitle = ({ number, title, className }) => (
  <p
    className={`font-condensed text-xl uppercase tracking-widest ${
      className || ''
    }`}
  >
    <span className="font-bold opacity-25">{number}</span>
    <span className="ml-2">{title}</span>
  </p>
);

NumberedTitle.propTypes = {
  number: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
};

export default NumberedTitle;
