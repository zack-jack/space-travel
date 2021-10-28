import React from 'react';
import ButtonLink from '../components/ButtonLink';
import SeoMeta from '../components/SeoMeta';

const Home = () => {
  const meta = {
    title: 'Home',
    description:
      'Space provides space travel and tourism that is truly out of this world.',
  };

  return (
    <>
      <SeoMeta meta={meta} />

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
