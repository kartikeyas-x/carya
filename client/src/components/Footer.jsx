
// import React from "react";
// import logoYellow from "/logoYellow.webp";
// import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

// export const Footer = () => {
//   return (
//     <div className="bg-secondary text-white px-10 py-8">
//       <footer>
//         {/* top section */}
//         <div className="container mx-auto flex md:flex-row flex-col justify-between items-center mb-10">
//           {/* icon-navigation section */}
//           <div className="md:w-1/2 w-full">
//             <img src={logoYellow} alt="logo" className="size-24 my-10 " />
//             <ul className="flex gap-4 flex-wrap mb-4 md:mb-0 ">
//               <li>
//                 <a
//                   href="http://localhost:5174//#"
//                   className="hover:text-primary">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="http://localhost:5174//#top-sellers"
//                   className="hover:text-primary">
//                   Top Sellers
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="http://localhost:5174//#recommended"
//                   className="hover:text-primary">
//                   Recommended
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="http://localhost:5174//#blogs"
//                   className="hover:text-primary">
//                   Blogs
//                 </a>
//               </li>
//             </ul>
//           </div>
//           {/* newsletter section */}
//           <div className="md:w-1/2 w-full ">
//             <p className="mb-4">
//               Subscribe to our newsletter to recieve latest updates, news and
//               offers.
//             </p>
//             <div className="flex">
//               <input
//                 type="text"
//                 placeholder="Enter your email"
//                 className="w-full py-2 px-4 rounded-l-md focus:outline-none text-black"
//               />
//               <button className="bg-primary font-medium py-2 px-4 rounded-r-md hover:bg-accentYellow text-gray-800">
//                 Subscribe
//               </button>
//             </div>
//           </div>
//         </div>
//         {/* bottom section */}
//         <div className="container mx-auto flex md:flex-row flex-col items-center justify-between border-t border-gray-400 pt-6 ">
//           {/* privacy section */}
//           <div>
//             <ul className="flex gap-4 mb-4 md:mb-0 ">
//               <li>
//                 <a
//                   href="http://localhost:5174//#"
//                   className="hover:text-primary">
//                   Privacy Policy
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="http://localhost:5174//#"
//                   className="hover:text-primary">
//                   Terms & Conditions
//                 </a>
//               </li>
//             </ul>
//           </div>
//           {/* social section */}
//           <div className="flex gap-6">
//             <a
//               href="https://saamjs.vercel.app/"
//               target="blank"
//               rel="noopener noreferrer"
//               className="hover:text-primary">
//               <FaFacebook size={24} />{" "}
//             </a>
//             <a
//               href="https://in.linkedin.com/in/saam-sheron"
//               target="blank"
//               rel="noopener noreferrer"
//               className="hover:text-primary">
//               <FaTwitter size={24} />{" "}
//             </a>
//             <a
//               href="https://www.instagram.com/saam_sheron/"
//               target="blank"
//               rel="noopener noreferrer"
//               className="hover:text-primary">
//               <FaInstagram size={24} />{" "}
//             </a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// // };
import React from "react";
import logoYellow from "/logoYellow.webp";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="bg-neutral-700 text-white px-10 py-8">
      <footer>
        {/* top section */}
        <div className="container mx-auto flex md:flex-row flex-col justify-between items-start mb-10">
          {/* icon-navigation section */}
          <div className="md:w-1/2 w-full">
            <img src={logoYellow} alt="logo" className="w-24 my-10" />
            <ul className="flex gap-4 flex-wrap mb-4 md:mb-0">
              <li>
                <a
                  href="http://localhost:5174//#"
                  className="hover:text-primary text-lg">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="http://localhost:5174/#top-sellers"
                  className="hover:text-primary text-lg">
                  Top Sellers
                </a>
              </li>
              <li>
                <a
                  href="http://localhost:5174//#recommended"
                  className="hover:text-primary text-lg">
                  Recommended
                </a>
              </li>
              <li>
                <a
                  href="http://localhost:5174//#blogs"
                  className="hover:text-primary text-lg">
                  Blogs
                </a>
              </li>
            </ul>
          </div>
          {/* newsletter section */}
          <div className="md:w-1/2 w-full">
            <p className="mb-4 text-lg">
              Subscribe to our newsletter to receive the latest updates, news,
              and offers.
            </p>
            <div className="flex">
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full py-2 px-4 rounded-l-md focus:outline-none text-black"
              />
              <button className="bg-primary font-medium py-2 px-4 rounded-r-md hover:bg-accentYellow text-gray-800">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* bottom section */}
        <div className="container mx-auto flex md:flex-row flex-col items-center justify-between border-t border-gray-400 pt-6">
          {/* privacy section */}
          <div>
            <ul className="flex gap-4 mb-4 md:mb-0">
              <li>
                <a
                  href="http://localhost:5174//#"
                  className="hover:text-primary text-lg">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="http://localhost:5174//#"
                  className="hover:text-primary text-lg">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          {/* social section */}
          <div className="flex gap-6 mt-4 md:mt-0">
            <a
              href="https://saamjs.vercel.app/"
              target="blank"
              rel="noopener noreferrer"
              className="hover:text-primary">
              <FaFacebook size={24} />
            </a>
            <a
              href="https://in.linkedin.com/in/saam-sheron"
              target="blank"
              rel="noopener noreferrer"
              className="hover:text-primary">
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.instagram.com/saam_sheron/"
              target="blank"
              rel="noopener noreferrer"
              className="hover:text-primary">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
// import React from "react";
// import logoYellow from "/logoYellow.webp";
// import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

// export const Footer = () => {
//   return (
//     <div className="bg-neutral-700 text-white px-10 py-8">
//       <footer>
//         {/* top section */}
//         <div className="container mx-auto flex md:flex-row flex-col justify-between items-start mb-10">
//           {/* icon-navigation section */}
//           <div className="md:w-1/2 w-full">
//             <img src={logoYellow} alt="logo" className="w-24 my-10" />
//             <ul className="flex gap-4 flex-wrap mb-4 md:mb-0">
//               <li>
//                 <a
//                   href="http://localhost:5174//#"
//                   className="hover:text-gray-400 text-lg">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="http://localhost:5174//#top-sellers"
//                   className="hover:text-gray-400 text-lg">
//                   Top Sellers
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="http://localhost:5174//#recommended"
//                   className="hover:text-gray-400 text-lg">
//                   Recommended
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="http://localhost:5174//#blogs"
//                   className="hover:text-gray-400 text-lg">
//                   Blogs
//                 </a>
//               </li>
//             </ul>
//           </div>
//           {/* newsletter section */}
//           <div className="md:w-1/2 w-full">
//             <p className="mb-4 text-lg">
//               Subscribe to our newsletter to receive the latest updates, news,
//               and offers.
//             </p>
//             <div className="flex">
//               <input
//                 type="text"
//                 placeholder="Enter your email"
//                 className="w-full py-2 px-4 rounded-l-md focus:outline-none text-black"
//               />
//               <button className="bg-gray-700 font-medium py-2 px-4 rounded-r-md hover:bg-gray-600 text-white">
//                 Subscribe
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* bottom section */}
//         <div className="container mx-auto flex md:flex-row flex-col items-center justify-between border-t border-gray-500 pt-6">
//           {/* privacy section */}
//           <div>
//             <ul className="flex gap-4 mb-4 md:mb-0">
//               <li>
//                 <a
//                   href="http://localhost:5174//#"
//                   className="hover:text-gray-400 text-lg">
//                   Privacy Policy
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="http://localhost:5174//#"
//                   className="hover:text-gray-400 text-lg">
//                   Terms & Conditions
//                 </a>
//               </li>
//             </ul>
//           </div>
//           {/* social section */}
//           <div className="flex gap-6 mt-4 md:mt-0">
//             <a
//               href="https://saamjs.vercel.app/"
//               target="blank"
//               rel="noopener noreferrer"
//               className="hover:text-gray-400">
//               <FaFacebook size={24} />
//             </a>
//             <a
//               href="https://in.linkedin.com/in/saam-sheron"
//               target="blank"
//               rel="noopener noreferrer"
//               className="hover:text-gray-400">
//               <FaTwitter size={24} />
//             </a>
//             <a
//               href="https://www.instagram.com/saam_sheron/"
//               target="blank"
//               rel="noopener noreferrer"
//               className="hover:text-gray-400">
//               <FaInstagram size={24} />
//             </a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };
