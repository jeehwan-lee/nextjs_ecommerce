import React from "react";
import { BiSearch } from "react-icons/bi";

type Props = {};

function SearchBar(props: Props) {
  return (
    <div>
      <div className="flex items-center bg-gray-100 p-2 rounded-full max-md:hidden">
        <button>
          <BiSearch size={20} className="opacity-50"></BiSearch>
        </button>
        <input
          type="text"
          className="outline-none bg-transparent ml-2 placeholder:font-light placholder:text-gray-600 text-[15px]"
          placeholder="상품을 검색해보세요"
        />
      </div>
    </div>
  );
}

export default SearchBar;
