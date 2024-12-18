// // import React, { useEffect, useState } from "react";
// // import { BagCard } from "../bags/BagCard";
// // import { Swiper, SwiperSlide } from "swiper/react";

// // // Import Swiper styles
// // import "swiper/css";

// // import "swiper/css/navigation";
// // import "swiper/css/pagination";

// // // import required modules
// // import { Navigation, Pagination } from "swiper/modules";
// // import { useFetchAllBagsQuery } from "../../redux/services/bagApi";
// // import { Toaster } from "sonner";

// // const categories = ["All", "Backpack", "Duffle", "Luggage"];

// // export const TopSellers = () => {
// //   // const [bags, setBags] = useState([]);
// //   const [selectedCategories, setSelectedCategories] = useState("All");

// //   const { data: bags = [] } = useFetchAllBagsQuery();

// //   const filteredBags =
// //     selectedCategories === "All"
// //       ? bags
// //       : bags.filter(
// //           (item) => item.category === selectedCategories.toLocaleLowerCase()
// //         );

// //   return (
// //     <div className="my-10 md:px-10 px-2" id="top-sellers">
// //       <Toaster richColors position="top-center" />
// //       <h2 className="text-3xl font-semibold mb-6">Top Sellers</h2>
// //       <Toaster richColors position="top-center" />
// //       {/* category filter */}
// //       <div className="mb-8">
// //         <select
// //           name="category"
// //           id="category"
// //           className="border bg-[#eaeaea] border-gray-400  rounded-md focus:outline-none px-4 py-2 "
// //           onChange={(e) => setSelectedCategories(e.target.value)}>
// //           {categories.map((items, index) => (
// //             <option value={items} className="py-2 px-8" key={index}>
// //               {items}
// //             </option>
// //           ))}
// //         </select>
// //       </div>
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
// //           {filteredBags &&
// //             filteredBags.length > 0 &&
// //             filteredBags.map((bag, index) => (
// //               <SwiperSlide key={index}>
// //                 <BagCard bag={bag} />
// //               </SwiperSlide>
// //             ))}
// //         </div>
// //       </Swiper>
// //     </div>
// //   );
// // };
// import React, { useState } from "react";
// import { BagCard } from "../bags/BagCard";
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// // Import required modules
// import { Navigation, Pagination } from "swiper/modules";
// import { useFetchAllBagsQuery } from "../../redux/services/bagApi";
// import { Toaster } from "sonner";

// const categories = ["All", "Backpack", "Duffle", "Luggage"];

// export const TopSellers = () => {
//   const [selectedCategories, setSelectedCategories] = useState("All");
//   const { data: bags = [] } = useFetchAllBagsQuery();

//   const filteredBags =
//     selectedCategories === "All"
//       ? bags
//       : bags.filter(
//           (item) => item.category === selectedCategories.toLowerCase()
//         );

//   return (
//     <div className="my-10 md:px-10 px-4" id="top-sellers">
//       <Toaster richColors position="top-center" />

//       {/* Section Heading */}
//       <h2 className="text-4xl font-bold mb-6 text-left text-gray-800">
//         Top Sellers
//       </h2>

//       {/* Category Filter */}
//       <div className="flex mb-8">
//         <select
//           name="category"
//           id="category"
//           className="border bg-white text-gray-700 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-accentYellow focus:outline-none px-5 py-2 transition duration-300"
//           onChange={(e) => setSelectedCategories(e.target.value)}
//         >
//           {categories.map((item, index) => (
//             <option value={item} key={index} className="py-2">
//               {item}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Swiper for Displaying Bags */}
//       <Swiper
//         slidesPerView={1}
//         spaceBetween={20}
//         navigation
//         pagination={{ clickable: true }}
//         modules={[Navigation, Pagination]}
//         breakpoints={{
//           640: { slidesPerView: 1, spaceBetween: 20 },
//           850: { slidesPerView: 2, spaceBetween: 20 },
//           1024: { slidesPerView: 2, spaceBetween: 40 },
//           1100: { slidesPerView: 3, spaceBetween: 50 },
//         }}
//         className="mySwiper"
//       >
//         {filteredBags.length > 0 ? (
//           filteredBags.map((bag, index) => (
//             <SwiperSlide key={index}>
//               <BagCard bag={bag} />
//             </SwiperSlide>
//           ))
//         ) : (
//           <div className="text-left text-gray-500 py-10">
//             No bags available in this category.
//           </div>
//         )}
//       </Swiper>
//     </div>
//   );
// };
import React, { useState } from "react";
import { BagCard } from "../bags/BagCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required modules
import { Navigation, Pagination } from "swiper/modules";
import { useFetchAllBagsQuery } from "../../redux/services/bagApi";
import { Toaster } from "sonner";

const categories = ["All", "Backpack", "Duffle", "Luggage"];

export const TopSellers = () => {
  const [selectedCategories, setSelectedCategories] = useState("All");
  const { data: bags = [] } = useFetchAllBagsQuery();

  const filteredBags =
    selectedCategories === "All"
      ? bags
      : bags.filter(
          (item) => item.category === selectedCategories.toLowerCase()
        );

  return (
    <div className="my-16 md:px-16 px-6" id="top-sellers">
      <Toaster richColors position="top-center" />

      {/* Section Heading */}
      <h2 className="text-4xl font-light mb-8 text-left text-neutral-800 tracking-tight">
        Top Sellers
      </h2>

      {/* Category Filter */}
      <div className="flex mb-10">
        <select
          name="category"
          id="category"
          className="w-full md:w-auto border border-neutral-300 bg-white text-neutral-700 rounded-lg px-5 py-2.5 focus:ring-2 focus:ring-neutral-500 focus:outline-none transition duration-300 ease-in-out"
          onChange={(e) => setSelectedCategories(e.target.value)}
        >
          {categories.map((item, index) => (
            <option value={item} key={index} className="py-2">
              {item}
            </option>
          ))}
        </select>
      </div>

      {/* Swiper for Displaying Bags */}
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          850: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 2, spaceBetween: 40 },
          1100: { slidesPerView: 3, spaceBetween: 50 },
        }}
        className="mySwiper"
      >
        {filteredBags.length > 0 ? (
          filteredBags.map((bag, index) => (
            <SwiperSlide key={index}>
              <BagCard bag={bag} />
            </SwiperSlide>
          ))
        ) : (
          <div className="text-left text-neutral-500 py-10">
            No bags available in this category.
          </div>
        )}
      </Swiper>
    </div>
  );
};