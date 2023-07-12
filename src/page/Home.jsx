import React from 'react';
import Layout from '../components/Layout';
import Intro from '../components/Intro';
import MarketingStrategies from '../components/MarketingStrategies';
import WhyMarketing from '../components/WhyMarketing';

const Home = () => {
  return (
    <Layout>
      <div className="px-32">
        <Intro />
        <MarketingStrategies />
        <WhyMarketing />
      </div>
    </Layout>
  );
};

export default Home;
