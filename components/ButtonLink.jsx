import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const ButtonLink = ({ href, text, className }) => (
  <div className={`c-btn ${className || ''}`}>
    <Link href={href}>
      <a className="c-btn__link">{text}</a>
    </Link>
  </div>
);

ButtonLink.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
};

export default ButtonLink;