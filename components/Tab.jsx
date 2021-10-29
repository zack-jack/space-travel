import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Tab = ({
  id, index, activeTab = 0, name, handleClick,
}) => (
  <li
    role="presentation"
    className={classNames('c-tab', { active: activeTab === index })}
  >
    <button
      id={id}
      role="tab"
      type="button"
      aria-selected={activeTab === index}
      aria-controls={id}
      className="c-tab__button"
      onClick={() => handleClick(index)}
    >
      {name}
    </button>
  </li>
);

Tab.defaultProps = {
  activeTab: 0,
};

Tab.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  activeTab: PropTypes.number,
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Tab;
