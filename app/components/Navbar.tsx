"use client";

import React, { useState } from "react";
import SearchBar from "./SearchBar";

type Props = {};

function Navbar(props: Props) {
  const [showProfile, setShowProfile] = useState<boolean>(false);
  const [showNav, setShowNav] = useState<boolean>(false);

  return (
    <div className="flex items-center justify-between py-4 relative">
      <div className="flex items-center md:space-x-10 lg:space-x-20">
        <div className="font-semibold text-2xl">
          <a href="/">Logo</a>
        </div>
        <nav className="max-md:hidden">
          <ul className="flex items-center lg:space-x-10 space-x-7 opacity-70 text-[15px]">
            <li>
              <a href="/" className="py-3 inline-block w-full">
                Shop
              </a>
            </li>
            <li>
              <a href="/filters" className="py-3 inline-block w-full">
                Filters
              </a>
            </li>
            <li>
              <a href="/myproducts" className="py-3 inline-block w-full">
                My Products
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <SearchBar />
      </div>
    </div>
  );
}

export default Navbar;
