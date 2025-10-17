// import React, { useEffect, useState } from 'react';
// function ContactForm() {
//   const [rotate, setRotate] = useState(0);

//   useEffect(() => {
//     const handleMouseMove = e => {
//       let mouseX = e.clientX;
//       let mouseY = e.clientY;

//       let deltaX = mouseX - window.innerWidth / 2;
//       let deltaY = mouseY - window.innerHeight / 2;

//       var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
//       setRotate(angle - 180);
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   return (
//     <div id="contact" className="eyes w-full h-screen overflow-hidden">
//       <div
//         data-scroll
//         data-scroll-speed="-.7"
//         className='w-full relative h-full bg-center bg-inherit bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")] '
//       >
//         {/* Eyes + Button */}
//         <div className="absolute gap-10 top-1/2 left-1/2 flex items-center -translate-x-[50%] -translate-y-[50%]">
//           {/* Left Eye */}
//           <div className="flex items-center justify-center w-[30vw] h-[30vw] md:w-[23vw] md:h-[20vw] bg-zinc-100 rounded-full">
//             <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
//               <div
//                 style={{
//                   transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
//                 }}
//                 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
//               >
//                 <div className="w-5 h-5 md:w-7 md:h-7 rounded-full bg-zinc-100"></div>
//               </div>
//             </div>
//           </div>

//           {/* Button in Center */}
//           <a
//             href="https://calendar.app.google/TyHZuwgs37EGZxW38"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-center group relative bg-[#CDEA68] hover:bg-white text-black px-8 py-4 rounded-full font-bold text-lg shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl border-2 border-transparent hover:border-[#CDEA68]"
//           >
//             <span className="relative z-10">Book 30-Min Free Consultation</span>
//             <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//           </a>

//           {/* Right Eye */}
//           <div className="flex items-center justify-center w-[30vw] h-[30vw] md:w-[23vw] md:h-[20vw] bg-zinc-100 rounded-full">
//             <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
//               <div
//                 style={{
//                   transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
//                 }}
//                 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
//               >
//                 <div className="w-5 h-5 md:w-7 md:h-7 rounded-full bg-zinc-100"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ContactForm;
import React, { useEffect, useState } from 'react';

function ContactForm() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = e => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const deltaX = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div id="contact" className="eyes w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-.7"
        className='w-full relative h-full bg-center bg-inherit bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")] '
      >
        {/* ==================== DESKTOP VERSION ==================== */}
        <div className="hidden md:flex absolute gap-10 top-1/2 left-1/2 items-center -translate-x-[50%] -translate-y-[50%]">
          {/* Left Eye */}
          <div className="flex items-center justify-center w-[30vw] h-[30vw] md:w-[23vw] md:h-[20vw] bg-zinc-100 rounded-full">
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
              >
                <div className="w-5 h-5 md:w-7 md:h-7 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>

          {/* Button in Center */}
          <a
            href="https://calendar.app.google/TyHZuwgs37EGZxW38"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center group relative bg-[#CDEA68] hover:bg-white text-black px-8 py-4 rounded-full font-bold text-lg shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl border-2 border-transparent hover:border-[#CDEA68]"
          >
            <span className="relative z-10">Book 30-Min Free Consultation</span>
            <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>

          {/* Right Eye */}
          <div className="flex items-center justify-center w-[30vw] h-[30vw] md:w-[23vw] md:h-[20vw] bg-zinc-100 rounded-full">
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
              >
                <div className="w-5 h-5 md:w-7 md:h-7 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== MOBILE VERSION ==================== */}
        <div className="md:hidden flex flex-col items-center justify-center gap-6 sm:gap-8 h-full">
          {/* Eyes Row */}
          <div className="flex gap-6 sm:gap-8 items-center justify-center">
            {/* Left Eye */}
            <div className="flex items-center justify-center w-[35vw] h-[35vw] sm:w-[30vw] sm:h-[30vw] bg-zinc-100 rounded-full">
              <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-zinc-100"></div>
                </div>
              </div>
            </div>

            {/* Right Eye */}
            <div className="flex items-center justify-center w-[35vw] h-[35vw] sm:w-[30vw] sm:h-[30vw] bg-zinc-100 rounded-full">
              <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-zinc-100"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Button Below Eyes */}
          <a
            href="https://calendar.app.google/TyHZuwgs37EGZxW38"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center group relative bg-[#CDEA68] hover:bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl border-2 border-transparent hover:border-[#CDEA68] max-w-[90vw]"
          >
            <span className="relative z-10">Book 30-Min Free Consultation</span>
            <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
