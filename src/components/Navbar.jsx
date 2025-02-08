import React from "react";

const Navbar = () => {
  return (
    <>
    <div className="container p-3 bg-[rgba(255,255,255,.35)] rounded-full mt-4 mx-auto flex justify-between items-center">
      <div className="relative left-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          wstrokeWidth="24"
          height="24"
          color="rgb(255,255,255)"
          fill="none"
        >
          <path
            d="M4.26781 18.8447C4.49269 20.515 5.87613 21.8235 7.55966 21.9009C8.97627 21.966 10.4153 22 12 22C13.5847 22 15.0237 21.966 16.4403 21.9009C18.1239 21.8235 19.5073 20.515 19.7322 18.8447C19.879 17.7547 20 16.6376 20 15.5C20 14.3624 19.879 13.2453 19.7322 12.1553C19.5073 10.485 18.1239 9.17649 16.4403 9.09909C15.0237 9.03397 13.5847 9 12 9C10.4153 9 8.97627 9.03397 7.55966 9.09909C5.87613 9.17649 4.49269 10.485 4.26781 12.1553C4.12105 13.2453 4 14.3624 4 15.5C4 16.6376 4.12105 17.7547 4.26781 18.8447Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M7.5 9V6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5V9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 15.49V15.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 15.49V15.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 15.49V15.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="info">
        <ul className="flex space-x-6 relative right-7 text-gray-200">
          <li className="cursor-pointer font-semibold hover:text-blue-400">Home</li>
          <li className="cursor-pointer font-semibold hover:text-blue-400">About</li>
          <li className="cursor-pointer font-semibold hover:text-blue-400">Contact</li>
        </ul>
      </div>
    </div>
    <div className="text-white flex justify-center font-bold mt-4">
      iPassWord - Your Own PassWord Manager App
    </div>
    </>
  );
};

export default Navbar;
