//* Packages Imports */
import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-gray-50 py-4 fixed z-10 top-0 w-full">
      <div className="container mx-auto px-4 flex justify-start items-center gap-2">
        <Image
          src="https://app.rigi.club/wp-content/themes/Rigi/assets/img/logo.svg"
          alt="rigi_logo"
          height={60}
          width={60}
        />
        <h1 className="text-[22px] uppercase font-semibold text-[#4a148c]">
          {" "}
          Player
        </h1>
      </div>
    </header>
  );
};

export default Header;
