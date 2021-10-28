import React from 'react';
import ButtonLink from '../../components/ButtonLink';
import NavbarLink from '../../components/NavbarLink';
import NumberedTitle from '../../components/NumberedTitle';
import SeoMeta from '../../components/SeoMeta';
import Tabs from '../../components/Tabs';

const DesignSystem = () => {
  const meta = { title: 'Design System' };

  return (
    <div>
      <SeoMeta
        meta={meta}
        noIndex
      />

      <main className="flex">
        <div className="flex-grow bg-indigo-900 px-24 py-10 text-white">
          <h1 className="font-condensed text-xl text-indigo-100 text-right tracking-widest">
            Design System
          </h1>

          <section
            id="colors"
            className="mt-10"
          >
            <NumberedTitle
              number={1}
              title="colors"
            />
            <div className="flex mt-5">
              <div className="flex-grow ">
                <div className="p-4 pt-10 bg-indigo-900 border border-indigo-200 border-solid">
                  <p>#0B0D17</p>
                </div>
                <p className="mt-5">
                  <span className="w-40 mr-8 uppercase text-indigo-100">
                    RGB
                  </span>
                  {' '}
                  11, 13, 23
                </p>
                <p>
                  <span className="w-40 mr-8 uppercase text-indigo-100">
                    HSL
                  </span>
                  {' '}
                  230°, 35%, 7%
                </p>
              </div>
              <div className="flex-grow ml-10">
                <div className="p-4 pt-10 bg-indigo-100">
                  <p className="text-black">#D0D6F9</p>
                </div>
                <p className="mt-5">
                  <span className="w-40 mr-8 uppercase text-indigo-100">
                    RGB
                  </span>
                  {' '}
                  208, 214, 249
                </p>
                <p>
                  <span className="w-40 mr-8 uppercase text-indigo-100">
                    HSL
                  </span>
                  {' '}
                  231°, 77%, 90%
                </p>
              </div>
              <div className="flex-grow ml-10">
                <div className="p-4 pt-10 bg-white">
                  <p className="text-black">#FFFFFF</p>
                </div>
                <p className="mt-5">
                  <span className="w-40 mr-8 uppercase text-indigo-100">
                    RGB
                  </span>
                  {' '}
                  255, 255, 255
                </p>
                <p>
                  <span className="w-40 mr-8 uppercase text-indigo-100">
                    HSL
                  </span>
                  {' '}
                  0°, 0%, 100%
                </p>
              </div>
            </div>
          </section>

          <section
            id="typography"
            className="mt-10"
          >
            <NumberedTitle
              number={2}
              title="typography"
            />
            <div className="flex justify-between mt-5">
              <div className="flex flex-col">
                <p className="text-indigo-100 mt-4">
                  Heading 1 - Bellefair Regular - 150px
                </p>
                <h1 className="mt-3">Earth</h1>
                <p className="text-indigo-100 mt-4">
                  Heading 2 - Bellefair Regular - 100px
                </p>
                <h2 className="mt-3">Venus</h2>
                <p className="text-indigo-100 mt-4">
                  Heading 3 - Bellefair Regular - 56px
                </p>
                <h3 className="mt-3">Jupiter & Saturn</h3>
                <p className="text-indigo-100 mt-4">
                  Heading 4 - Bellefair Regular - 32px
                </p>
                <h4 className="mt-3">Uranus, Neptune & Pluto</h4>
                <p className="text-indigo-100 mt-4">
                  Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character
                  Space
                </p>
                <h5 className="mt-3">SO, YOU WANT TO TRAVEL TO SPACE</h5>
              </div>
              <div className="flex flex-col w-6/12">
                <p className="text-indigo-100 mt-4">
                  Subheading 1 - Bellefair Regular - 28px
                </p>
                <p className="text-lg font-serif uppercase mt-3">384,400 km</p>
                <p className="text-indigo-100 mt-4">
                  Subheading 2 - Barlow Condensed Regular - 14px - 2.35
                  Character Space
                </p>
                <p className="text-xs font-condensed tracking-wide uppercase mt-3">
                  Avg. Distance
                </p>
                <p className="text-indigo-100 mt-4">
                  Nav Text - Barlow Condensed Regular - 16px - 2.7 Character
                  Space
                </p>
                <p className="text-sm font-condensed tracking-wider uppercase mt-3">
                  Europa
                </p>
                <p className="text-indigo-100 mt-4">Body Text</p>
                <p className="mt-3">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In
                  nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed
                  pretium, ligula sollicitudin laoreet viverra, tortor libero
                  sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis.
                  Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit. Phasellus hendrerit.
                  Pellentesque aliquet nibh nec urna. In nisi neque, aliquet
                  vel, dapibus id, mattis vel, nisi. Sed pretium, ligula
                  sollicitudin laoreet viverra, tortor libero sodales leo, eget
                  blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
                  Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer
                  adipiscing elit. Phasellus hendrerit. Pellentesque aliquet
                  nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis
                  vel, nisi.
                </p>
              </div>
            </div>
          </section>

          <section
            id="interactive-elements"
            className="mt-10"
          >
            <NumberedTitle
              number={3}
              title="interactive elements"
            />
            <div className="mt-5">
              <div>
                <nav className="c-navbar">
                  <ul
                    id="mobile-navigation"
                    aria-labelledby="mobile-menu-btn"
                    role="menu"
                    className="c-navbar__list"
                  >
                    {[
                      ['Home', '#', true],
                      ['About', '#', false],
                      ['Contact', '#', false],
                    ].map(([title, href, active], i) => (
                      <NavbarLink
                        key={title}
                        active={active}
                        href={href}
                        index={i}
                        title={title}
                      />
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="flex justify-between mt-24">
                <div className="flex flex-col items-center w-6/12">
                  <ButtonLink href="#">Explore</ButtonLink>
                  <p className="text-indigo-100 text-center mt-24">
                    Landing Page Main Button
                  </p>
                </div>
                <div className="flex flex-col items-center w-6/12">
                  <div>
                    <Tabs
                      label="Design System Tabs"
                      tabs={[
                        { title: 'Tab 1' },
                        { title: 'Tab 2' },
                        { title: 'Tab 3' },
                      ]}
                    />
                    <p className="text-indigo-100 text-center mt-4">Tabs</p>
                  </div>
                  <div className="flex flex-col items-center mt-24">
                    {/* Slider Dots */}
                    <div>
                      <button
                        type="button"
                        role="tab"
                        aria-selected="true"
                        className="c-dot active"
                      >
                        <span className="sr-only">Slider dot 1</span>
                      </button>
                      <button
                        type="button"
                        role="tab"
                        aria-selected="false"
                        className="c-dot ml-6"
                      >
                        <span className="sr-only">Slider dot 2</span>
                      </button>
                      <button
                        type="button"
                        role="tab"
                        aria-selected="false"
                        className="c-dot ml-6"
                      >
                        <span className="sr-only">Slider dot 3</span>
                      </button>
                    </div>
                    <p className="text-indigo-100 text-center mt-4">
                      Slider 1 States (Active, Hover, & Idle)
                    </p>
                  </div>
                  {/* Numbered Slider Dots */}
                  <div className="flex flex-col items-center mt-24">
                    <div className="flex flex-col items-center">
                      <button
                        type="button"
                        role="tab"
                        aria-selected="true"
                        className="c-numbered-dot active"
                      >
                        1
                      </button>
                      <button
                        type="button"
                        role="tab"
                        aria-selected="false"
                        className="c-numbered-dot mt-8"
                      >
                        2
                      </button>
                      <button
                        type="button"
                        role="tab"
                        aria-selected="false"
                        className="c-numbered-dot mt-8"
                      >
                        3
                      </button>
                    </div>
                    <p className="text-indigo-100 text-center mt-4">
                      Slider 2 States (Active, Hover, & Idle)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export function getStaticProps() {
  return {
    props: {
      // returns the default 404 page with a status code of 404 in production
      notFound: process.env.NODE_ENV === 'production',
    },
  };
}

export default DesignSystem;
