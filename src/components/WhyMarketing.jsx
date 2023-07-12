import React from 'react';

const WhyMarketing = () => {
  return (
    <div className="mt-20">
      <h1 className="text-center text-8xl font-semibold text-primary">
        Why <b className="text-secondary">Marketing</b> ?
      </h1>
      <div className="h-[500px]">
        <lottie-player
          src="https://lottie.host/104307db-5386-4882-a085-5906ace2d877/IZLWv8BlCi.json"
          speed="1"
          background="transparent"
          loop
          autoplay
        ></lottie-player>
      </div>
      <p className="text-gray-600 text-md text-xl mt-10">
        Do you know what your customers want? Do you think your customers trust
        your products? When was the last time you saw a customer tweeting about
        your product or service? Was it a complaint or compliment?
      </p>
      <h1 className="text-primary text-4xl font-semibold mt-10">
        The answers to all these questions lie in marketing.
      </h1>
      <p className="text-gray-600 text-md text-xl mt-10">
        How you market your business determines if the enterprise will be
        successful or not. Marketing is a tool used to create and maintain
        demand, relevance, reputation, competition and more. Without it, your
        business is likely to close down due to lack of sales.
      </p>
    </div>
  );
};

export default WhyMarketing;
