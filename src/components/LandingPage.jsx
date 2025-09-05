import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowUpLong } from 'react-icons/fa6';
import herovideo from '../assets/herovideo1.mp4';

function LandingPageVideo() {
  return (
    <div
      id="home"
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-screen bg-black pt-1 relative"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={herovideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

      {/* Content Wrapper */}
      <div className="textstructure mt-40 px-20 relative z-20">
        {/* {['We Deliver', 'Impactful', 'Solutions'].map((item, index) => {
          return (
            <div className="masker" key={index}>
              <div className="w-fit flex items-center">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '8vw' }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="bg-blue-500 mr-[1vw] rounded-md w-[8vw] h-[5.7vw] relative top-[0.5vw]"
                  ></motion.div>
                )}
                <h1 className='uppercase text-[8vw] leading-[7vw] font-bold tracking-tighter font-["Founders Grotesk X Cond Lt"] text-white'>
                  {item}
                </h1>
              </div>
            </div>
          );
        })} */}
        {['We Build ', 'Your Strategic', 'Solutions'].map((item, index) => (
          <div
            key={index}
            className={`w-fit mx-auto flex items-end justify-center gap-2 ${
              index === 1 ? 'mr-[]' : ''
            }`}
          >
            {/* {index === 1 && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '8.5vw' }}
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                className="md:w-[8.5vw] sm:w-[25vw] md:h-[5.5vw] h-[14vw] mt-[0.5vw] rounded-xl overflow-hidden"
              >
                <img
                  className="w-full h-full object-cover bg-center rounded-xl"
                  src="https://online.hbs.edu/Style%20Library/api/resize.aspx?imgpath=/PublishingImages/overhead-view-of-business-strategy-meeting.jpg&w=1200&h=630"
                  alt=""
                />
              </motion.div>
            )} */}

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                className="font-[IC] text-white/90 uppercase md:text-[6vw] sm:text-[15vw] text-[8vw] md:leading-[7vw] sm:leading-[16vw] leading-[15vw] font-semibold"
              >
                {item}
              </motion.h1>
            </div>
          </div>
        ))}
        <div className="border-t-[1px] border-zinc-500 mt-32 flex flex-wrap justify-between gap-3 items-center py-5 px-7 md:px-20">
          {['For startups and enterprises', 'From ideation to success'].map(
            (item, index) => (
              <p
                key={index}
                className="text-md font-light tracking-tight leading-none"
              >
                {item}
              </p>
            )
          )}
          <div className="start flex items-center gap-5">
            <div className="w-full px-2 md:px-4 py-2 border-[1px] border-solid border-[#CDEA68] rounded-full uppercase font-md text-sm">
              Begin the Journey
            </div>
            <div className="w-8 h-8 p-2 md:w-10 md:h-10 flex items-center justify-center border-[1px] border-solid border-[#CDEA68] rounded-full">
              <span className="rotate-[45deg]">
                <FaArrowUpLong />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPageVideo;
