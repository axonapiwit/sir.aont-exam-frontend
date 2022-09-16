/* eslint-disable @next/next/no-img-element */

import React from "react";
import Dropdown from "./Dropdown";

export default function Navbar({ onClickCategory }) {
  return (
    <header className="left-0 top-0 fixed w-full bg-slate-600 border-gray-200 px-2 py-2.5 z-20">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="#" className="flex items-center">
          <img
            src="/svg/logo.svg"
            alt=""
            className="w-[50px] h-[50px] object-contain"
          />
        </a>
        <div
          className="hidden w-full md:block md:w-auto"
        >
          <ul className="w-full flex space-x-10">
            <li>
              <Dropdown onClickCategory={onClickCategory} />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
