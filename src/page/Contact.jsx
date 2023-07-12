import React from 'react';
import Layout from '../components/Layout';
import { Toaster, toast } from 'react-hot-toast';

const Contact = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    // console.log('Form submitted');
    toast.error('Under Development!');
  };

  return (
    <Layout>
      <Toaster />
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
        <div>
          <h1 className="text-7xl font-semibold text-white">
            Contact <b className="text-secondary">Us</b>
          </h1>
          <p className="text-md text-gray-600 mt-10">
            We are here to help you and your business grow. If you have any{' '}
            <br />
            questions or comments, please feel free to contact us.
          </p>
        </div>
      </div>
      {/* Contact Form */}
      <div className="bg-primary h-40 rounded-b-full"></div>
      <div className="flex space-x-20 mx-32 justify-center -mt-40 z-10">
        <div className="mb-10 shadow-md border p-5 min-w-[400px] z-10 bg-white">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl text-primary font-semibold">Contact Us</h1>
            <p className="text-md text-gray-600">We will get back to you!</p>
          </div>
          <form action="/contact" className="mt-10">
            <div className="flex flex-col">
              <label htmlFor="name" className="font-semibold">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="John Smith"
                className="border border-secondary rounded mt-2 focus:outline-none p-2"
              />
            </div>
            <div className="flex flex-col mt-5">
              <label htmlFor="email" className="font-semibold">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="john@abc.com"
                className="border border-secondary rounded mt-2 focus:outline-none p-2"
              />
            </div>
            <div className="flex flex-col mt-5">
              <label htmlFor="subject" className="font-semibold">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="Regarding to marketing ..."
                className="border border-secondary rounded mt-2 focus:outline-none p-2"
              />
            </div>
            <div className="flex flex-col mt-5">
              <label htmlFor="message" className="font-semibold">
                Message
              </label>
              <textarea
                id="message"
                type="text"
                rows="5"
                placeholder="Your message ..."
                className="border border-secondary rounded mt-2 focus:outline-none p-2"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                onClick={onSubmit}
                className="bg-secondary text-white font-semibold mt-5 p-2 rounded hover:bg-primary hover:text-secondary transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
