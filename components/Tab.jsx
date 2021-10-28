import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Tab = ({
  id, index, selectedTab, title, handleClick,
}) => (
  <li
    role="presentation"
    className={classNames('c-tab', { active: selectedTab === index })}
  >
    <button
      id={id}
      role="tab"
      type="button"
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
