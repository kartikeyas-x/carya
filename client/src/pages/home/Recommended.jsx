// // import React, { useEffect, useState } from "react";
// // import { Swiper, SwiperSlide } from "swiper/react";

// // // Import Swiper styles
// // import "swiper/css";

// // import "swiper/css/navigation";
// // import "swiper/css/pagination";

// // // import required modules
// // import { Navigation, Pagination } from "swiper/modules";
// // import { BagCard } from "../bags/BagCard";
// // import { useFetchAllBagsQuery } from "../../redux/services/bagApi";
// // import { Toaster } from "sonner";

// // export const Recommended = () => {
// //   const { data: bags = [] } = useFetchAllBagsQuery();

// //   return (
// //     <div className="my-10 md:px-10 px-2" id="recommended">
// //       <Toaster richColors position="top-center" />
// //       <h2 className="text-3xl font-semibold mb-6">Recommended</h2>

// //       <Swiper
// //         slidesPerView={1}
// //         spaceBetween={30}
// //         navigation={true}
// //         modules={[Navigation, Pagination]}
// //         breakpoints={{
// //           640: {
// //             slidesPerView: 1,
// //             spaceBetween: 20,
// //           },
// //           850: {
// //             slidesPerView: 2,
// //             spaceBetween: 20,
// //           },

// //           1024: {
// //             slidesPerView: 2,
// //             spaceBetween: 50,
// //           },
// //           1100: {
// //             slidesPerView: 3,
// //             spaceBetween: 50,
// //           },
// //         }}
// //         className="mySwiper">
// //         <div>
// //           {bags &&
// //             bags.length > 0 &&
// //             bags.slice(4, 12).map((bag, index) => (
// //               <SwiperSlide key={index}>
// //                 <BagCard bag={bag} />
// //               </SwiperSlide>
// //             ))}
// //         </div>
// //       </Swiper>
// //     </div>
// //   );
// // };
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// // import required modules
// import { Navigation, Pagination } from "swiper/modules";
// import { BagCard } from "../bags/BagCard";
// import { useFetchAllBagsQuery } from "../../redux/services/bagApi";
// import { Toaster } from "sonner";

// export const Recommended = () => {
//   const { data: bags = [] } = useFetchAllBagsQuery();

//   return (
//     <div className="my-10 md:px-10 px-2" id="recommended">
//       <Toaster richColors position="top-center" />
//       <h2 className="text-3xl font-semibold mb-6 text-left">Recommended</h2>

//       <Swiper
//         slidesPerView={1}
//         spaceBetween={30}
//         navigation={true}
//         modules={[Navigation, Pagination]}
//         breakpoints={{
//           640: {
//             slidesPerView: 1,
//             spaceBetween: 20,
//           },
//           850: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//           },
//           1024: {
//             slidesPerView: 2,
//             spaceBetween: 50,
//           },
//           1100: {
//             slidesPerView: 3,
//             spaceBetween: 50,
//           },
//         }}
//         className="mySwiper">
//         <div className="flex flex-wrap gap-6">
//           {bags &&
//             bags.length > 0 &&
//             bags.slice(4, 12).map((bag, index) => (
//               <SwiperSlide key={index}>
//                 <BagCard bag={bag} />
//               </SwiperSlide>
//             ))}
//         </div>
//       </Swiper>
//     </div>
//   );
// };
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required modules
import { Navigation, Pagination } from "swiper/modules";
import { BagCard } from "../bags/BagCard";
import { useFetchAllBagsQuery } from "../../redux/services/bagApi";
import { Toaster } from "sonner";

export const Recommended = () => {
  const { data: bags = [] } = useFetchAllBagsQuery();

  return (
    <div className="my-16 md:px-16 px-6" id="recommended">
      <Toaster richColors position="top-center" />
      <h2 className="text-4xl font-light mb-8 text-left text-neutral-800 tracking-tight">
        Recommended
      </h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation, Pagination]}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          850: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 2, spaceBetween: 50 },
          1100: { slidesPerView: 3, spaceBetween: 50 },
        }}
        className="mySwiper"
      >
        {bags && bags.length > 0 && 
          bags.slice(4, 12).map((bag, index) => (
            <SwiperSlide key={index}>
              <BagCard bag={bag} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};