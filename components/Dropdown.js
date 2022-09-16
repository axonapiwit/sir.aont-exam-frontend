/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Popover } from "@headlessui/react";

export default function Dropdown({ onClickCategory }) {
  return (
    <Popover className="relative">
      <Popover.Button>
        <div className="flex items-center justify-center p-1 bg-gray-50 rounded-full hover:bg-red-300 transition duration-150 ease-in-out hover:scale-105">
          <img
            src="/svg/cart-icon.svg"
            alt=""
            className="w-10 h-10 object-contain"
          />
        </div>
      </Popover.Button>
        <div className="absolute bottom-0 right-[-20px] w-8 h-8 flex text-center justify-center items-center bg-gray-50 rounded-full">
          <p className="text-md font-bold">0</p>
        </div>

      <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-[200px] -translate-x-1/2 transform px-4">
        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
          </div>
        </div>
      </Popover.Panel>
    </Popover>
  );
}
