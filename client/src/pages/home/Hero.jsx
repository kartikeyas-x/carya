// import React from "react";
// import heroVid from "../../assets/heroVid.mp4";

// export const Hero = () => {
//   return (
//     <div className="mb-10" id="#">
//       <video
//         width="100%"
//         autoPlay
//         muted
//         loop
//         playsInline
//         className=" relative w-full object-cover h-[calc(100vh-20px)] object-bottom"
//         style={{ pointerEvents: "none" }}>
//         <source src={heroVid} type="video/mp4" />
//         Sorry, your browser doesn't support embedded videos.
//       </video>
//       {/* vid content text */}
//       <div className="absolute text-white translate-y-1/2 md:top-1/3 top-1/4 md:translate-x-1.5 md:right-1/2 md:pr-24  md:pl-10 pl-0  sm:right-1/2 sm:translate-x-1/4   translate-x-1/4 right-1/3">
//         <h2 className="sm:text-6xl text-5xl font-semibold mb-10">
//           Unleash madness
//         </h2>
//         <a
//           href="#top-sellers"
//           className="bg-accentYellow text-gray-800 font-semibold  py-2 px-4 rounded-md hover:bg-primary">
//           Shop now
//         </a>
//       </div>
//     </div>
// //   );
// // };
// import React from "react";
// import heroVid from "../../assets/heroVid.mp4";

// export const Hero = () => {
//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       {/* Background Video */}
//       <video
//         autoPlay
//         muted
//         loop
//         playsInline
//         className="w-full h-full object-cover"
//         style={{ pointerEvents: "none" }}
//       >
//         <source src={heroVid} type="video/mp4" />
//         Sorry, your browser doesn't support embedded videos.
//       </video>

//       {/* Content Overlay */}
//       <div className="absolute top-0 left-0 w-full h-full flex items-center px-6 md:px-16 bg-gradient-to-r from-black/70 to-transparent">
//         {/* Hero Text */}
//         <div className="max-w-lg text-white space-y-6">
//           <h1 className="text-5xl md:text-7xl font-bold leading-tight">
//             Unleash <span className="text-accentYellow">Madness</span>
//           </h1>
//           <p className="text-lg md:text-xl text-gray-200">
//             Explore our premium collection of backpacks and luggage designed for
//             every adventure.
//           </p>
//           <a
//             href="#top-sellers"
//             className="inline-block bg-accentYellow text-gray-800 font-medium py-3 px-6 rounded-full shadow-md hover:bg-yellow-400 transition duration-300"
//           >
//             Shop Now
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };
import React from "react";
import heroVid from "../../assets/heroVid.mp4";

export const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover brightness-50"
        style={{ pointerEvents: "none" }}
      >
        <source src={heroVid} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>

      {/* Content Overlay */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center px-6 md:px-16 bg-gradient-to-r from-neutral-900/80 to-transparent">
        {/* Hero Text */}
        <div className="max-w-lg text-neutral-200 space-y-6">
        <h1 
      style={{ fontFamily: "'Space Grotesk', sans-serif" }} 
      className="text-6xl md:text-7xl font-light tracking-tighter text-gray-200">
      <span className="font-medium text-gray-100">forge</span>{' '}
      <span className="font-thin text-neutral-600">the wild</span>
    </h1>
          <p className="text-lg md:text-xl text-neutral-400 font-thin">
            Explore your adventure.
          </p>
          <a
            href="#top-sellers"
            className="inline-block bg-neutral-700 text-neutral-200 font-medium py-3 px-6 rounded-sm hover:bg-neutral-600 transition duration-300"
          >
            Discover
          </a>
        </div>
      </div>
    </div>
  );
};