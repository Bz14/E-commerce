import React, { useContext, useState } from "react";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartTotal } = useContext(ShopContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav class="bg-white border-gray-200 dark:bg-gray-900 h-24">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="./" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} class="h-8" alt="" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            E-Shop
          </span>
        </a>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul class="cursor-pointer flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <div
                class="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                aria-current="page"
                onClick={() => setMenu("women")}
              >
                Shop
              </div>
            </li>

            <li>
              <div
                class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                onClick={() => setMenu("women")}
              >
                <Link to="/men">Men</Link>
              </div>
            </li>

            <li>
              <div
                onClick={() => setMenu("women")}
                class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                <Link to="/women">Women</Link>
              </div>
            </li>
            <li>
              <div
                onClick={() => setMenu("women")}
                class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                <Link to="/kids">Kids</Link>
              </div>
            </li>
            <li>
              <button
                type="button"
                class="text-white bg-brown-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login
              </button>
            </li>
            <li>
              <Link to="/cart">
                <div className="absolute top-2 right-6 bg-brown-400 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartTotal()}
                </div>
                <img src={cart_icon} alt="Cart" className="h-6 w-6" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    //         <li
    //           className={`text-black ${
    //             menu === "women" ? "border-b-2 border-white" : ""
    //           }`}
    //           onClick={() => setMenu("women")}
    //         >
    //           <Link to="/women">Women</Link>
    //         </li>
    //         <li
    //           className={`text-black ${
    //             menu === "men" ? "border-b-2 border-white" : ""
    //           }`}
    //           onClick={() => setMenu("men")}
    //         >
    //           <Link to="/men">Men</Link>
    //         </li>
    //         <li
    //           className={`text-black ${
    //             menu === "kids" ? "border-b-2 border-white" : ""
    //           }`}
    //           onClick={() => setMenu("kids")}
    //         >
    //           <Link to="/kids">Kids</Link>
    //         </li>
    //
    //         <li>
    //           <button>
    //             <Link to="/cart">
    //               <div className="absolute top-2 right-6 bg-brown-400 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
    //                 {getCartTotal()}
    //               </div>
    //               <img src={cart_icon} alt="Cart" className="h-6 w-6" />
    //             </Link>
    //           </button>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
};
