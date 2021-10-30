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
        <div className="flex flex-col flex-grow">
          <div className="flex flex-col flex-grow justify-between order-2 w-7/12 pb-24">
            <article className="flex flex-col flex-grow justify-center">
              <h2 className="text-xl opacity-50">{activeData.role}</h2>
              <p className="text-2xl font-serif text-white uppercase leading-none mt-4">{activeData.name}</p>
              <p className="leading-8 mt-7">{activeData.bio}</p>
            </article>
            <div>
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
          <picture className="order-1 border-b border-solid border-indigo-300 -mb-20">
            <source
              srcSet={`/images/crew/${activeData.images.webp}`}
              type="image/webp"
            />
            <img
              src={`/images/crew/${activeData.images.png}`}
              alt={activeData.name}
            />
          </picture>
        </div>
      </div>
    </>
  );
};

export default Crew;
