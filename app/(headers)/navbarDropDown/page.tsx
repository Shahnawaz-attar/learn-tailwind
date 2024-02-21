"use client";

import { useEffect, useRef, useState } from "react";

const NavbarWithDropdown = () => {
  const [isShow, setIsShow] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropDown = useRef<any>(null);

  useEffect(() => {
    const handleClickOutSide = (event: any) => {
      if (dropDown.current && !dropDown.current.contains(event.target)) {
        setIsShow(false);
      }
    };
    document.addEventListener("click", handleClickOutSide);

    return () => {
      document.removeEventListener("click", handleClickOutSide);
    };
  }, []);

  return (
    <div className="bg-green-700 p-4 sticky">
      <div className="container m-auto">
        <div className="flex justify-between items-center">
          <nav className="text-white text-2xl font-bold">Logo</nav>
          <div className="space-x-3 text-white">
            <a href="">Home</a>
            <a href="">About Us</a>
            <div className="relative inline-block " ref={dropDown}>
              <button
                onClick={() => setIsShow(!isShow)}
                className="focus:outline-none"
              >
                Dropdown
              </button>
              {isShow && (
                <ul className="absolute mt-2 bg-white text-black w-32 space-y-2 transition rounded-md">
                  <li>
                    <a className="block px-4 py-2 hover:bg-gray-200" href="">
                      Contact us
                    </a>
                  </li>
                  <li>
                    <a className="block px-4 py-2 hover:bg-gray-200" href="">
                      Know us
                    </a>
                  </li>
                </ul>
              )}
            </div>
            <div className="inline-block space-x-2">
              <input
                type="text"
                placeholder="Search ..."
                value={searchQuery}
                className="px-2 py-1 rounded outline-none border-none text-black"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="bg-white text-green-600 px-4 py-1 rounded">
                Search
              </button>
            </div>
          </div>
          <div>
            <a className="text-white" href="">
              Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarWithDropdown;
