import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import useDeviceDetect from '../hooks/useDeviceDetect';

const NumberedTabs = ({
  activeTab = 0, data, className = '', handleTabClick,
}) => {
  const { isDesktop } = useDeviceDetect();

  return (
    <div className={classNames('flex flex-col lg:flex-row lg:items-center lg:justify-between lg:flex-grow', className)}>
      <div className="order-2 mt-8 md:flex md:flex-col md:items-center md:mt-14 lg:items-start lg:order-1 lg:w-1/2 lg:mt-0">
        <div className="flex justify-center lg:justify-start lg:order-2 lg:w-full lg:mt-11">
          {data.map(({ heading }, i) => (
            <button
              key={heading.toLowerCase()}
              type="button"
              role="tab"
              aria-selected={activeTab === i}
              className={classNames(
                'c-numbered-dot',
                {
                  active: activeTab === i,
                  'ml-4': i > 0,
                },
              )}
              onClick={() => handleTabClick(i)}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <article className="text-center mt-7 px-6 pb-12 md:mt-11 md:px-10 md:pb-16 md:w-2/3 lg:order-1 lg:w-full lg:mt-0 lg:p-0 lg:text-left">
          <p className="kicker">{data[activeTab].kicker}</p>
          <h2 className="mt-2 text-lg md:mt-4 md:text-1.5xl">{data[activeTab].heading}</h2>
          <p className="mt-4 md:leading-7">{data[activeTab].description}</p>
        </article>
      </div>
      <div className="order-1 transform scale-x-105 lg:flex-shrink-0 lg:order-2 lg:ml-16 lg:scale-x-100">
        <img
          alt={data[activeTab].heading}
          src={data[activeTab].images[isDesktop ? 'portrait' : 'landscape']}
          className="w-full"
        />
      </div>
    </div>
  );
};

NumberedTabs.defaultProps = {
  activeTab: 0,
  className: '',
};

NumberedTabs.propTypes = {
  activeTab: PropTypes.number,
  data: PropTypes.arrayOf(PropTypes.shape({
    kicker: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    images: PropTypes.shape({
      portrait: PropTypes.string.isRequired,
      landscape: PropTypes.string.isRequired,
    }),
  })).isRequired,
  className: PropTypes.string,
  handleTabClick: PropTypes.func.isRequired,
};

export default NumberedTabs;
