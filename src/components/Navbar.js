import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { FaShoppingCart, FaWallet, FaUserFriends } from 'react-icons/fa';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdFavorite, MdHelpCenter, MdFeaturedPlayList } from 'react-icons/md';
import { BsFillTicketPerforatedFill } from 'react-icons/bs';
import { useState } from 'react';
const Navbar = () => {
  const [sideNav, setSideNav] = useState(false);

  return (
    <div className="max-w-[1640px] flex justify-between items-center p-4 mx-auto">
      {/* Left side */}
      <div className="flex items-center">
        <AiOutlineMenu
          size={30}
          className="cursor-pointer"
          onClick={() => setSideNav(true)}
        />
        <h1 className="text-xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full text-[14px] p-1">
          <p
            className="bg-black text-white rounded-full p-2
          "
          >
            Delivery
          </p>
          <p className="rounded-full p-2">Pickup</p>
        </div>
      </div>
      {/* Search input */}
      <div className="bg-gray-200 rounded-full flex items-center p-1 w-[150px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={20} />
        <input
          type="text"
          placeholder="Search foods"
          className="bg-transparent rounded-full w-full focus:outline-none p-1"
        />
      </div>
      <div className="hidden bg-black text-white rounded-full md:flex items-center py-2 px-4 cursor-pointer">
        <FaShoppingCart size={20} className="mr-2" />
        Cart
      </div>
      {/* MOBILE MENU */}
      {/* overlay */}
      {sideNav && (
        <div
          className="fixed top-0 left-0 w-full h-screen bg-black/80 z-10"
          onClick={() => setSideNav(false)}
        ></div>
      )}
      {/* menu sidebar */}
      <div
        className={`fixed top-0 w-[300px] h-screen bg-white z-20 py-6 px-6 ease-in-out duration-500 ${
          sideNav ? 'left-0' : 'left-[-100%]'
        }`}
      >
        <AiOutlineClose
          size={20}
          className="absolute right-4 cursor-pointer"
          onClick={() => setSideNav(false)}
        />
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold">Eats</span>
        </h1>
        <nav className="mt-8 pl-2">
          <ul className="text-lg w-max">
            <li className="flex items-center w-full mb-4 cursor-pointer hover:underline">
              <TbTruckDelivery size={30} className="mr-2" />
              Orders
            </li>
            <li className="flex items-center w-full mb-4 cursor-pointer hover:underline">
              <MdFavorite size={30} className="mr-2" />
              Favorites
            </li>
            <li className="flex items-center w-full mb-4 cursor-pointer hover:underline">
              <FaWallet size={30} className="mr-2" />
              Wallets
            </li>
            <li className="flex items-center w-full mb-4 cursor-pointer hover:underline">
              <MdHelpCenter size={30} className="mr-2" />
              Help
            </li>
            <li className="flex items-center w-full mb-4 cursor-pointer hover:underline">
              <BsFillTicketPerforatedFill size={30} className="mr-2" />
              Promotions
            </li>
            <li className="flex items-center w-full mb-4 cursor-pointer hover:underline">
              <MdFeaturedPlayList size={30} className="mr-2" />
              Best One
            </li>
            <li className="flex items-center mb-4 cursor-pointer hover:underline">
              <FaUserFriends size={30} className="mr-2" />
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Navbar;
