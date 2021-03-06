import React, { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import classNames from 'classnames';
import Drawer from './Drawer';
import NavbarLink from './NavbarLink';
import useNavLinks from '../hooks/useNavLinks';
import useOnClickOutside from '../hooks/useOnClickOutside';

const HeaderMobile = () => {
  const menuRef = useRef();
  const navRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useRouter();
  const { navLinks } = useNavLinks();

  useOnClickOutside(menuRef, () => setIsMenuOpen(false));

  return (
    <header className="c-header">
      <Link href="/">
        <a>
          <div
            aria-hidden="true"
            className="c-header__logo"
          />
          <span className="sr-only">Home</span>
        </a>
      </Link>
      <div ref={menuRef}>
        <button
          id="mobile-menu-btn"
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-haspopup="true"
          type="button"
          className={classNames('c-navbar__burger', { active: isMenuOpen })}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="not-sr-only">
            <div className="c-navbar__burger-box">
              <div className="c-navbar__burger-inner" />
            </div>
          </span>
          <span className="sr-only">Menu</span>
        </button>
        <Drawer
          alignment="right"
          show={isMenuOpen}
        >
          <nav
            ref={navRef}
            className="c-navbar"
          >
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
                  handleClick={() => setIsMenuOpen(false)}
                />
              ))}
            </ul>
          </nav>
        </Drawer>
      </div>
    </header>
  );
};

export default HeaderMobile;
