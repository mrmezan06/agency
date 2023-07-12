import React from 'react';

const WhyChooseUs = () => {
  return (
    <div>
      <div className="h-60 bg-primary flex items-center justify-center mx-32">
        <h1 className="text-8xl font-semibold text-white">Why Choose Us..?</h1>
      </div>
      <div className="shadow-md border mx-32 p-5">
        <div className="grid grid-cols-3 gap-5">
          <div
            className="mt-0 flex flex-col space-y-7 shadow  p-5 items-center justify-center h-max
              
              border-t-red-500 border-t-4 rounded-lg

              transition duration-500 ease-in-out hover:scale-105 cursor-default
              "
          >
            <img
              src="images/innovation.png"
              alt="innovation"
              className="h-16 w-16"
            />
            <h1 className="text-2xl font-semibold text-primary">
              Innovative and Passionate
            </h1>
            <p className="text-gray-600 text-md">
              We are a team of creative and passionate designers and developers.
              We are fully aware of the importance of designing for the digital
              age and strive to deliver the best result for our clients.
            </p>
          </div>
          <div
            className="mt-24 flex flex-col space-y-7 shadow  p-5 items-center justify-center h-max
              
              border-t-red-500 border-t-4 rounded-lg

              transition duration-500 ease-in-out hover:scale-105 cursor-default
              "
          >
            <img
              src="images/investment.png"
              alt="investment"
              className="h-16 w-16"
            />
            <h1 className="text-2xl font-semibold text-primary">
              Good Return on Investment
            </h1>
            <p className="text-gray-600 text-md">
              Working with us means providing your business with great savings.
              All our digital marketing and web development packages are being
              offered at competitive prices
            </p>
          </div>
          <div
            className="mt-48 flex flex-col space-y-7 shadow  p-5 items-center justify-center h-max
              
              border-t-red-500 border-t-4 rounded-lg

              transition duration-500 ease-in-out hover:scale-105 cursor-default
              "
          >
            <img
              src="images/customer-support.png"
              alt="customer-support"
              className="h-16 w-16"
            />
            <h1 className="text-2xl font-semibold text-primary">
              Seamless Customer Support
            </h1>
            <p className="text-gray-600 text-md">
              We are always here to help you with any questions you may have. We
              are always here to help you with any questions you may have. We
              are always here to help you with any questions you may have.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
