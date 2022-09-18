import React from "react";
import Card from "./Card";

export default function Hero({ data, addToCart }) {
  return (
      <div className="grid md:grid-cols-4 grid-flow-row-2 gap-4 w-full h-full sm:grid-cols-1">
        {data?.map((item, i) => (
          <Card
            key={i}
            title={item.title}
            image={item.image}
            price={item.price}
            rate={item.rating.rate}
            category={item.category}
            onClick={() => {addToCart(item.id)}}
          />
        ))}
      </div>
  );
}
