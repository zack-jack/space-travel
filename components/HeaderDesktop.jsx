import React from 'react';
import { useRouter } from 'next/router';
import NavbarLink from './NavbarLink';
import useDeviceDetect from '../hooks/useDeviceDetect';
import useNavLinks from '../hooks/useNavLinks';

const HeaderDesktop = () => {
  const { isTablet } = useDeviceDetect();
  const { pathname } = useRouter();
  const { navLinks } = useNavLinks();

  return (
    <header className="c-header">
      <div
        aria-hidden="true"
        className="c-header__logo order-first"
      />
      <nav className="c-navbar order-last">
        <ul
          id="mobile-navigation"
          aria-labelledby="mobile-menu-btn"
          role="menu"
          className="c-navbar__list"
        >
          {navLinks.map(([title, href], i) => (
            <NavbarLink
              key={title}
              active={pathname === href}
              href={href}
              index={i}
              title={title}
              numbered={!isTablet}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default HeaderDesktop;
