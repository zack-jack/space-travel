import React from 'react';
import { useSpring, animated } from 'react-spring';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Drawer = ({ alignment = 'left', show, children }) => {
  const springStyles = useSpring({
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: show ? 0 : window.innerWidth,
  });

  return (
    <animated.div
      data-testid="c-drawer"
      style={springStyles}
      className={classNames({ 'flex justify-end': alignment === 'right' })}
    >
      {children}
    </animated.div>
  );
};

Drawer.defaultProps = {
  alignment: 'left',
};

Drawer.propTypes = {
  alignment: PropTypes.oneOf(['left', 'right']),
  show: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Drawer;
