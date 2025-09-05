// import { motion } from 'framer-motion';
// import React from 'react';

// function Marquee() {
//   return (
//     <div
//       data-scroll
//       data-scroll-section
//       data-scroll-speed=".1"
//       className="w-full py-16 rounded-tl-3xl rounded-tr-3xl bg-[#077067]"
//     >
//       <div className="text border-t-2 border-b-2 border-zinc-300 flex items-center whitespace-nowrap overflow-hidden">
//         <motion.h1
//           initial={{ x: '0' }}
//           animate={{ x: '-100%' }}
//           transition={{ repeat: Infinity, ease: 'linear', duration: 3 }}
//           className='font-thin font-[IC] leading-none tracking-tighter text-[12vw] md:text-[7vw] pr-20 uppercase -mb-[2vw] py-7  font-["Founders Grotesk"]'
//         >
//           Empowering Success
//         </motion.h1>
//         <motion.h1
//           initial={{ x: '0' }}
//           animate={{ x: '-100%' }}
//           transition={{ repeat: Infinity, ease: 'linear', duration: 3 }}
//           className=' font-thin font-[IC] leading-none tracking-tighter text-[12vw] md:text-[7vw] uppercase -mb-[2vw] py-7  font-["Founders Grotesk"] '
//         >
//           Elevating Business: BePro Consultancy
//         </motion.h1>
//       </div>
//     </div>
//   );
// }

// export default Marquee;

import { motion } from 'framer-motion';
import React from 'react';

function Marquee() {
  const marqueeText =
    'Strategic Solutions • Business Excellence • Growth Acceleration • Innovation Leadership • Market Dominance';

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="w-full py-20 bg-gradient-to-r from-black via-zinc-900 to-black relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-[#CDEA68] rounded-full animate-pulse"
              style={{
                top: `${20 + i * 10}%`,
                left: `${10 + i * 12}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '2s',
              }}
            />
          ))}
        </div>
      </div>

      {/* Top border with gradient */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#CDEA68] to-transparent"></div>

      {/* Main marquee container */}
      <div className="relative border-t-2 border-b-2 border-[#CDEA68]/30 flex items-center whitespace-nowrap overflow-hidden">
        {/* First marquee text */}
        <motion.div
          initial={{ x: '0%' }}
          animate={{ x: '-100%' }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 25,
            repeatType: 'loop',
          }}
          className="flex items-center"
        >
          <h1 className="text-[#CDEA68] font-bold leading-none tracking-wider text-[8vw] md:text-[6vw] lg:text-[4vw] uppercase px-8 py-8 font-['Founders_Grotesk'] whitespace-nowrap">
            {marqueeText}
          </h1>
        </motion.div>

        {/* Second marquee text (for seamless loop) */}
        <motion.div
          initial={{ x: '0%' }}
          animate={{ x: '-100%' }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 25,
            repeatType: 'loop',
          }}
          className="flex items-center"
        >
          <h1 className="text-[#CDEA68] font-bold leading-none tracking-wider text-[8vw] md:text-[6vw] lg:text-[4vw] uppercase px-8 py-8 font-['Founders_Grotesk'] whitespace-nowrap">
            {marqueeText}
          </h1>
        </motion.div>

        {/* Third marquee text (for extra smoothness) */}
        <motion.div
          initial={{ x: '0%' }}
          animate={{ x: '-100%' }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 25,
            repeatType: 'loop',
          }}
          className="flex items-center"
        >
          <h1 className="text-[#CDEA68] font-bold leading-none tracking-wider text-[8vw] md:text-[6vw] lg:text-[4vw] uppercase px-8 py-8 font-['Founders_Grotesk'] whitespace-nowrap">
            {marqueeText}
          </h1>
        </motion.div>
      </div>

      {/* Bottom border with gradient */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#CDEA68] to-transparent"></div>

      {/* Glowing effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50 pointer-events-none"></div>

      {/* Side fade effects */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
    </div>
  );
}

export default Marquee;
