import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const ButtonLink = ({ href, children, className = '' }) => (
  <div className={`c-btn ${className || ''}`}>
    <Link href={href}>
      <a className="c-btn__link">{children}</a>
    </Link>
  </div>
);

ButtonLink.defaultProps = {
  className: '',
};

ButtonLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default ButtonLink;
