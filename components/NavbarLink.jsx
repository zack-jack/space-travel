import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import NumberedTitle from './NumberedTitle';

const NavbarLink = ({
  href, index, title, active = false, numbered = true,
}) => {
  const { pathname } = useRouter();
  const isActive = active || pathname === href;

  return (
    <li
      role="none"
      className={classNames('c-navbar__list-item', { active: isActive })}
    >
      <Link href={href}>
        <a
          role="menuitem"
          className="c-navbar__link"
        >
          {
            numbered
              ? (
                <NumberedTitle
                  number={index}
                  title={title}
                />
              ) : <p className="c-navbar__title">{title}</p>
          }
        </a>
      </Link>
    </li>
  );
};

NavbarLink.defaultProps = {
  active: false,
  numbered: true,
};

NavbarLink.propTypes = {
  href: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  active: PropTypes.bool,
  numbered: PropTypes.bool,
};

export default NavbarLink;
