import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';
import NumberedTitle from './NumberedTitle';

const NavbarLink = ({
  active = false, href, index, title,
}) => {
  const { pathname } = useRouter();
  const isActive = active || pathname === href;

  return (
    <li className={`c-navbar__list-item ${isActive ? 'active' : ''}`}>
      <Link href={href}>
        <a className="c-navbar__link">
          <NumberedTitle
            number={index}
            title={title}
          />
        </a>
      </Link>
    </li>
  );
};

NavbarLink.defaultProps = {
  active: false,
};

NavbarLink.propTypes = {
  active: PropTypes.bool,
  href: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default NavbarLink;
