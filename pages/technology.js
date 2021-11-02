import React, { useState } from 'react';
import NumberedTabs from '../components/NumberedTabs';
import NumberedTitle from '../components/NumberedTitle';
import SeoMeta from '../components/SeoMeta';
import useTechnology from '../hooks/useTechnology';

const Technology = () => {
  const meta = {
    title: 'Technology',
    description: 'Explore the modern technologies that make space travel possible.',
  };
  const { technology } = useTechnology();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <SeoMeta meta={meta} />

      <div className="l-container-y lg:pl-40">
        <h1 className="text-center md:px-10 md:text-left lg:px-0">
          <NumberedTitle
            number={3}
            title="Space Launch 101"
          />
        </h1>
        <NumberedTabs
          activeTab={activeTab}
          data={technology}
          className="mt-8 md:mt-16"
          handleTabClick={(i) => setActiveTab(i)}
        />
      </div>
    </>
  );
};

export default Technology;
