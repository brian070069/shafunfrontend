import React from "react";
import Logo from "../assets/logo.png";

const Header = ({ toogleLoginModal }) => {
  return (
    <div>
      <div className="flex justify-between items-center py-3 px-5">
        <div className="flex items-center">
          <div className="w-[60px] h-[60px] relative">
            <img
              src={Logo}
              alt=""
              className="w-full h-full object-cover absolute"
            />
          </div>
          <div className="text-transparent italic bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 font-bold text-2xl ">
            Shafan
          </div>
        </div>

        <div className="flex items-center gap-4  capitalize">
          <button
            className="
           text-sm font-normal py-[6px] px-4 capitalize
            rounded-md tracking-wider hover:transition-all hover:underline decoration-current"
          >
            register
          </button>
          <button
            onClick={toogleLoginModal}
            className="bg-[#1fff1fc5] text-sm 
             text-black py-[6px] px-5
            rounded-md tracking-wider hover:transition-all 
            duration-300 hover:shadow-md "
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
