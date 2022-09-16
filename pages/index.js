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

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    let temp = data;
    if (isFilterCategory)
      setData(temp.filter((e) => e.category == "men's clothing"));
    // else if ()
    else setData(tempData);
  }, [isFilterCategory]);

  const fetchData = async () => {
    await axios.get("https://fakestoreapi.com/products").then((res) => {
      setData(res.data);
      setTempData(res.data);
      console.log(res.data);
      setIsLoading(false);
    });
  };
  return (
    <div className="container mx-auto w-full">
      <Navbar />
      <Checkbox
        onClickCategory={() => {
          setIsFilterCategory(!isFilterCategory);
        }}
      />
      <main className="mt-[10px] pb-14">
        {isLoading ? <EmptyCard /> : <Hero data={data} />}
      </main>
      <Footer />
    </div>
  );
}
