import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Tab from './Tab';

const Tabs = ({
  activeTab, tabs, label, handleClick, className = '',
}) => (
  <ul
    role="tablist"
    aria-label={label}
    className={classNames('c-tabs', className)}
  >
    {tabs.map(({ name }, i) => (
      <Tab
        id={`${name.replace(' ', '-').toLowerCase()}`}
        key={`${name.replace(' ', '-').toLowerCase()}`}
        index={i}
        handleClick={() => handleClick(i)}
        activeTab={activeTab}
        name={name}
      />
    ))}
  </ul>
);

Tabs.defaultProps = {
  activeTab: 0,
  className: '',
};

Tabs.propTypes = {
  activeTab: PropTypes.number,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Tabs;
