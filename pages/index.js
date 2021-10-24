import React from 'react';
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
      <p>Test</p>
    </>
  );
};

export default Home;
