import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import NumberedTitle from '../components/NumberedTitle';
import SeoMeta from '../components/SeoMeta';
import useCrew from '../hooks/useCrew';
// import useDeviceDetect from '../hooks/useDeviceDetect';

const Crew = () => {
  const meta = {
    title: 'Crew',
    description: 'Meet the crew members.',
  };

  const { crew } = useCrew();
  // const { isMobile, isTablet } = useDeviceDetect();
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeData, setActiveData] = useState(crew[activeSlide]);

  useEffect(() => {
    setActiveData(crew[activeSlide]);

    return () => {};
  }, [activeSlide]);

  // const imgDimensions = () => {
  //   if (isMobile) return 170;
  //   if (isTablet) return 300;
  //   return 445;
  // };

  return (
    <>
      <SeoMeta meta={meta} />

      <div className="l-container pb-0 md:pt-10 lg:pt-20">
        <h1
          className="text-center md:text-left"
        >
          <NumberedTitle
            number={2}
            title="Meet Your Crew"
          />
        </h1>
        <div className="flex flex-col flex-grow md:items-center lg:flex-row lg:justify-between lg:mt-16 lg:pb-24">
          <div className="flex flex-col flex-grow justify-between order-2 mt-8 md:flex-grow-0 md:order-1 md:w-9/12 md:mt-16 lg:w-1/2 lg:mt-0">
            <article className="flex flex-col flex-grow order-2 mt-8 text-center md:order-1 lg:justify-center lg:mt-0 lg:text-left">
              <h2 className="text-sm opacity-50 md:text-lg lg:text-xl">{activeData.role}</h2>
              <p className="mt-2 text-lg font-serif text-white uppercase leading-none md:text-2xl lg:mt-4">{activeData.name}</p>
              <p className="mt-4 leading-8 lg:mt-7">{activeData.bio}</p>
            </article>
            <div className="flex justify-center order-1 md:order-2 md:mt-10 lg:justify-start lg:mt-32">
              {crew.map(({ role }, i) => (
                <button
                  key={role}
                  type="button"
                  role="tab"
                  aria-selected={i === activeSlide}
                  className={classNames(
                    'c-dot',
                    {
                      active: i === activeSlide,
                      'ml-6': i > 0,
                    },
                  )}
                  onClick={() => setActiveSlide(i)}
                >
                  <span className="sr-only">{`Slider dot ${i + 1}`}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-end order-1 border-b border-solid border-indigo-300 mt-8 md:flex-grow md:order-2 md:w-1/2 md:mt-10 lg:w-4/12 lg:mt-0 lg:-mb-24 lg:ml-8">
            <picture>
              <source
                srcSet={`/images/crew/${activeData.images.webp}`}
                type="image/webp"
              />
              <img
                src={`/images/crew/${activeData.images.png}`}
                alt={activeData.name}
                className="w-auto h-56 md:h-auto"
              />
            </picture>
          </div>
        </div>
      </div>
    </>
  );
};

export default Crew;
