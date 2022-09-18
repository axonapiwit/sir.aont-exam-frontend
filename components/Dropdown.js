/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { Popover } from "@headlessui/react";

export default function Dropdown({ data, cart, addToCart, removeFromCart }) {
  const [total, setTotal] = useState(0);
  const [updateAmount, setUpdateAmount] = useState(0);

  useEffect(() => {
    totalPrice()
    totalAmount()
  }, [cart]);

  const getItem = (id) => {
    return data.find((e) => e.id == id);
  };

  const totalPrice = () => {
    let sumPrice = 0;
    cart.forEach((item) => {
      sumPrice += getItem(item.id).price * item.amount
      sumPrice.toFixed(2).replace(/0+$/, '');
    })
    setTotal(sumPrice)
  }

  const totalAmount = () => {
    let sumAmount = 0;
    cart.forEach((item) => {
      sumAmount += getItem(item.id).amount
      sumAmount
    })
    setUpdateAmount(sumAmount)
  }

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
        <div className="text-md font-bold">{updateAmount}</div>
      </div>

      <Popover.Panel className="w-[300px] bg-white absolute right-0 z-10 mt-3">
        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
          {cart.map((item, i) => (
            <div className="grid grid-cols-3 gap-1" key={i} >
              <div className="flex p-2">
                <img
                  src={getItem(item.id).image}
                  alt=""
                  className="w-20 h-20 object-contain"
                />
              </div>
              <div className="flex flex-col justify-between p-2">
                <div className="truncate">{getItem(item.id).title}</div>
                <div className="flex justify-between">
                  <button onClick={() => { removeFromCart(item.id) }} className="cursor-pointer">-</button>
                  <div className="">{item.amount}</div>
                  <button onClick={() => { addToCart(item.id) }} className="cursor-pointer">+</button>
                </div>
              </div>
              <div className="flex flex-col justify-between p-2">
                <button onClick={() => { removeFromCart(item.id) }} className="text-red-500 font-bold">Delete</button>
                <div className="font-bold">${getItem(item.id).price * item.amount}</div>
              </div>
              <hr />
            </div>
          ))}
          <div className="flex justify-between p-2">
            <div className="font-bold">Total</div>
            <div className="font-bold">${total}</div>
          </div>
        </div>
      </Popover.Panel>
    </Popover >
  );
}
