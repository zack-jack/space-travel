import React from 'react';
import PropTypes from 'prop-types';

const NavBar = ({ className, children }) => (
  <nav className={`c-navbar ${className || ''}`}>
    <ul className="c-navbar__list">{children}</ul>
  </nav>
);

NavBar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default NavBar;
