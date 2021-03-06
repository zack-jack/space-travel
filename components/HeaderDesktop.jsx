import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import NavbarLink from './NavbarLink';
import useDeviceDetect from '../hooks/useDeviceDetect';
import useNavLinks from '../hooks/useNavLinks';

const HeaderDesktop = () => {
  const { isTablet } = useDeviceDetect();
  const { pathname } = useRouter();
  const { navLinks } = useNavLinks();

  return (
    <header className="c-header">
      <Link href="/">
        <a className="mr-16">
          <div
            aria-hidden="true"
            className="c-header__logo order-first"
          />
          <span className="sr-only">Home</span>
        </a>
      </Link>
      <nav className="c-navbar order-last">
        <ul
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
