import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from './Tabs';
import useDestinations from '../hooks/useDestinations';
import useDeviceDetect from '../hooks/useDeviceDetect';

const DestinationTabs = ({ className = '' }) => {
  const { destinations } = useDestinations();
  const { isMobile, isTablet } = useDeviceDetect();
  const [activeTab, setActiveTab] = useState(0);
  const [activeData, setActiveData] = useState(destinations[activeTab]);

  useEffect(() => {
    setActiveData(destinations[activeTab]);

    return () => {};
  }, [activeTab]);

  const imgDimensions = () => {
    if (isMobile) return 170;
    if (isTablet) return 300;
    return 445;
  };

  return (
    <article className={className}>
      <div className="flex items-center justify-center lg:w-5/12">
        <picture>
          <source
            srcSet={`/images/destination/${activeData.images.webp}`}
            type="image/webp"
          />
          <img
            alt={activeData.name}
            src={`/images/destination/${activeData.images.png}`}
            style={{ width: `${imgDimensions()}px`, aspectRatio: 1 }}
          />
        </picture>
      </div>
      <div
        className="flex flex-col items-center text-center mt-7 md:mt-14 md:px-14 lg:items-start lg:w-5/12 lg:text-left lg:mt-0 lg:px-0"
      >
        <Tabs
          activeTab={activeTab}
          label="Destinations"
          tabs={destinations}
          handleClick={(i) => setActiveTab(i)}
        />
        <div className="mt-5 md:mt-8 lg:mt-9">
          <h2 className="text-2xl md:text-3xl">{activeData.name}</h2>
          <p className="mt-1 leading-8 md:mt-2 lg:mt-4">{activeData.description}</p>
          <div className="c-hairline mt-8 md:mt-12 lg:mt-14" />
          <div className="flex flex-col items-center mt-8 md:flex-row md:justify-around md:mt-7 lg:justify-start">
            <div>
              <h3 className="subheading--alt text-indigo-100">Avg. Distance</h3>
              <p className="subheading text-white mt-3">{activeData.distance}</p>
            </div>
            <div className="mt-8 md:mt-0 lg:ml-20">
              <h3 className="subheading--alt text-indigo-100">Est. Travel Time</h3>
              <p className="subheading text-white mt-3">{activeData.travel}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

DestinationTabs.defaultProps = {
  className: '',
};

DestinationTabs.propTypes = {
  className: PropTypes.string,
};

export default DestinationTabs;
