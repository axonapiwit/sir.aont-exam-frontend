/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import EmptyCard from "../components/EmptyCard";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Checkbox from "../components/Checkbox";

export default function Home() {
  const [tempData, setTempData] = useState([]);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFilterCategory, setIsFilterCategory] = useState(false);
  const [isJewelery, setIsJewelery] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    let temp = tempData;

    if (isFilterCategory && isJewelery)
      setData(
        temp.filter(
          (e) => e.category == "men's clothing" || e.category == "jewelery"
        )
      );
    else if (isFilterCategory)
      setData(temp.filter((e) => e.category == "men's clothing"));
    else setData(tempData);
  }, [isFilterCategory]);

  const fetchData = async () => {
    await axios.get("https://fakestoreapi.com/products").then((res) => {
      setData(res.data);
      setTempData(res.data);
      console.log(res.data);
      setIsLoading(false);
      console.log(tempData);
    });
  };

  const addToCart = (id) => {
    const newList =
      cart.length <= 0
        ? [{ id: id, amount: 1 }]
        : cart.find((e) => e.id == id) == undefined
        ? [...cart, { id: id, amount: 1 }]
        : cart.map((item) => {
            if (item.id === id) {
              const updatedItem = {
                ...item,
                amount: item.amount + 1,
              };
              return updatedItem;
            }

            return item;
          });

    setCart(newList);
    console.log(newList);
  };

  const removeFromCart = (id) => {
    if (cart.find((e) => e.id == id && e.amount == 1) != undefined) {
      const removeList = cart.filter((e) => e.id != id);
      setCart(removeList);
      console.log(removeList);
    } else {
      const removeList = cart.map((item) => {
        if (item.id === id) {
          const updatedItem = {
            ...item,
            amount: item.amount - 1,
          };
          return updatedItem;
        }

        return item;
      });

      setCart(removeList);
      console.log(removeList);
    }
  };

  return (
    <div className="container mx-auto w-full p-4">
      <Navbar
        data={data}
        cart={cart}
        addToCart={addToCart}
        removeToCart={removeFromCart}
      />
      <div className="flex justify-between ">
        <Checkbox
          label={"Men"}
          onClickCategory={() => {
            setIsFilterCategory(!isFilterCategory);
          }}
        />
      </div>

      <main className="mt-[10px] pb-14 relative">
        {isLoading ? <EmptyCard /> : <Hero data={data} addToCart={addToCart} />}
      </main>
      <Footer />
    </div>
  );
}
