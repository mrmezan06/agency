import React from 'react';
import Layout from '../components/Layout';

const Clients = () => {
  return (
    <Layout>
      <div className="grid grid-cols-2 items-center px-32 h-screen bg-primary">
        <div className="h-96">
          <lottie-player
            src="https://assets8.lottiefiles.com/packages/lf20_njobaah2.json"
            background="transparent"
            speed="1"
            loop=""
            autoplay="true"
          ></lottie-player>
        </div>
        <div className="">
          <h1 className="text-7xl font-semibold text-white">
            We <b className="text-secondary">work</b> <br /> together with{' '}
            <br /> our
            <b className="text-green-700">clients</b>
          </h1>
          <p className="text-md text-gray-600 mt-10">
            “To give real service you must add something which cannot be bought
            or measured with money, and that is sincerity and integrity.”
          </p>
        </div>
      </div>
      <div className="bg-primary h-40 rounded-b-full"></div>
      <div className="flex space-x-20 mx-32 justify-center -mt-40 z-10">
        <div className="mb-10 shadow-md border p-5 max-w-[400px] z-10 bg-white">
          <div className="flex items-center space-x-10">
            <img
              src="images/slack.png"
              alt="Slack"
              className="w-20 h-20 mb-4"
            />
            <h2 className="text-2xl font-semibold text-primary">Slack</h2>
          </div>
          <p className="text-md text-gray-600 w-full mt-5">
            Slack is a cloud-based set of tools and services that makes it easy
            to get work done. It’s built for teams of all sizes, and has a
            simple, beautiful design that’s easy to use and works great on any
            device.
          </p>
        </div>
        <div className="mb-10 shadow-md border p-5 max-w-[400px] z-10 bg-white">
          <div className="flex items-center space-x-10">
            <img
              src="images/twitter.png"
              alt="Twitter"
              className="w-20 h-20 mb-4"
            />
            <h2 className="text-2xl font-semibold text-primary">Twitter</h2>
          </div>
          <p className="text-md text-gray-600 w-full mt-5">
            Twitter is a social networking service that enables users to send
            and read short 140-character messages called “tweets”.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex space-x-10 px-5 py-2 border-2 border-gray-200 rounded-md max-w-max">
          <img
            src="images/2413805.png"
            alt="Arrow"
            className="w-10 h-10 cursor-pointer"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Clients;
