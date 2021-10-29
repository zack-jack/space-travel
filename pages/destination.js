import React from 'react';
import DestinationTabs from '../components/DestinationTabs';
import NumberedTitle from '../components/NumberedTitle';
import SeoMeta from '../components/SeoMeta';

const Destination = () => {
  const meta = {
    title: 'Destination',
    description: 'Pick your travel destination.',
  };

  return (
    <>
      <SeoMeta meta={meta} />

      <div className="l-container md:pt-10 lg:pt-20">
        <h1
          className="text-center md:text-left"
        >
          <NumberedTitle
            number={1}
            title="Pick Your Destination"
          />
        </h1>
        <DestinationTabs className="l-col-2 mt-8 md:mt-16" />
      </div>
    </>
  );
};

export default Destination;
