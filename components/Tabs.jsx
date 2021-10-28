import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Tab from './Tab';

const Tabs = ({ tabs, label, className = '' }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleClick = (i) => setSelectedTab(i);

  return (
    <ul
      role="tablist"
      aria-label={label}
      className={classNames('c-tabs', { className })}
    >
      {tabs.map(({ title }, i) => (
        <Tab
          id={`${title.replace(' ', '-')}-${i}`}
          key={`${title.replace(' ', '-')}`}
          index={i}
          handleClick={handleClick}
          selectedTab={selectedTab}
          title={title}
        />
      ))}
    </ul>
  );
};

Tabs.defaultProps = {
  className: '',
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Tabs;
