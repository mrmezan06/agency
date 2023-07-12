import React from 'react';
import Layout from '../components/Layout';
import WhyChooseUs from '../components/WhyChooseUs';

const About = () => {
  const devs = [
    {
      title: 'Web Developer',
      description:
        'Web development is the work involved in developing a website for the Internet or an intranet.',
      image: 'images/web.png',
    },
    {
      title: 'Mobile Development',
      description:
        'Mobile development is the work involved in developing a mobile application for mobile devices such as smartphones, tablets, and feature phones.',
      image: 'images/mobile.png',
    },
    {
      title: 'Digital Marketing',
      description:
        'Digital marketing is the work involved in developing a digital marketing strategy and developing a digital marketing plan.',
      image: 'images/digital-marketing.png',
    },
    {
      title: 'Graphic Design',
      description:
        'Graphic design is the work involved in developing a digital marketing strategy and developing a digital marketing plan.',
      image: 'images/graphicdesign.png',
    },
  ];
  return (
    <Layout>
      <div className="overflow-x-hidden">
        <div className="w-full h-screen absolute -top-[30%] transform rotate-[12deg] right-10 rounded-2xl about-intro"></div>
        <div className="h-screen grid items-center justify-center grid-cols-2">
          <div className="z-10 flex justify-center">
            <img
              src="images/about-intro.dc99b53cb7b13dc86ebd8c92362f897c.svg"
              alt="Intro"
              className="h-[500px] w-[500px]"
            />
          </div>
          <div className="z-10 max-w-max">
            <h1 className="text-white text-8xl font-semibold">AGENCY</h1>
            <hr />
            <p className="text-md mt-5 text-gray-200">
              OLDER | STRONGER | WISER
            </p>
          </div>
        </div>
        <h1 className="text-center text-6xl font-semibold text-secondary mb-20">
          What We Do ?
        </h1>
        <div className="bg-primary h-80 -mb-64"></div>
        <div className="grid grid-cols-4 gap-10 my-20 mx-32">
          {devs.map((dev) => (
            <div className="bg-white flex flex-col items-center justify-center p-4 shadow-lg space-y-5 border hover:scale-105 transition duration-500 ease-in-out transform">
              <img src={dev.image} alt={dev.title} className="h-16 w-16" />
              <h1 className="text-xl font-semibold text-primary">
                {dev.title}
              </h1>
              <p className="text-md text-gray-600">{dev.description}</p>
            </div>
          ))}
        </div>
      </div>
      <WhyChooseUs />
    </Layout>
  );
};

export default About;
