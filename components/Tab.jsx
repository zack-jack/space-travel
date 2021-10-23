import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ id, index, selectedTab, title, handleClick }) => (
  <li
    role="presentation"
    className={`c-tab ${selectedTab === index ? 'active' : ''}`}
  >
    <button
      role="tab"
      id={id}
      aria-selected={selectedTab === index}
      aria-controls={id}
      className="c-tab__button"
      onClick={() => handleClick(index)}
    >
      {title}
    </button>
  </li>
);

Tab.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  selectedTab: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Tab;
