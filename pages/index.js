import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import ButtonLink from '../components/ButtonLink';
import Navbar from '../components/Navbar';
import NavbarLink from '../components/NavbarLink';
import SeoMeta from '../components/SeoMeta';

const Home = () => {
  const { pathname } = useRouter();
  const meta = {
    title: 'Home',
    description:
      'Space provides space travel and tourism that is truly out of this world.',
  };
  const navLinks = [
    ['Home', '/'],
    ['Destination', '#'],
    ['Crew', '#'],
    ['Technology', '#'],
  ];

  return (
    <>
      <SeoMeta meta={meta} />

      <header className="flex">
        <div>
          <Image
            src="/images/logo.svg"
            alt="Space Tourism logo"
            width={48}
            height={48}
          />
        </div>
        <Navbar>
          {navLinks.map(([title, href], i) => (
            <NavbarLink
              key={title}
              active={pathname === href}
              href={href}
              index={i}
              title={title}
            />
          ))}
        </Navbar>
      </header>

      <div className="l-container">
        <section className="l-col-2 lg:items-end">
          <div className="flex flex-col items-center justify-end text-center md:w-6/12 lg:w-8/12 lg:items-start lg:text-left max:w-5/12">
            <h1>
              <span className="kicker">
                So, you want to travel to
              </span>
              <span className="block">Space</span>
            </h1>
            <p className="mt-4 lg:text-justify md:mt-6">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of it.
              Well sit back, and relax because we’ll give you a truly out of this
              world experience!
            </p>
          </div>
          <div className="flex flex-col justify-end mt-10 lg:mt-0 lg:ml-20">
            <ButtonLink href="#">Explore</ButtonLink>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
