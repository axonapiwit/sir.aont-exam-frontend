/* eslint-disable @next/next/no-img-element */
export default function Card({ title, image, price, rate, category }) {
  return (
    <div className="w-full max-w-sm bg-white rounded-lg shadow-md border duration-150 origin-center hover:rotate-6">
      <div className="space-x-4 space-y-6">
        <div className="img-product h-[300px] w-full  rounded-t-lg bg-white p-3">
          <img src={image} alt="" className="h-full w-full object-contain" />
        </div>
        <div className="container-text px-5 pb-5">
          <div className="title">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 truncate">
              {title}
            </h5>
          </div>
          <div className="flex justify-between items-center">
            <div className="h-4 w-4">
              <img
                src="/svg/star-icon.svg"
                alt=""
                className="object-contain"
              />
            </div>
            <div className="review flex items-center mt-2.5 mb-5">{rate}</div>
            <div className="category capitalize flex items-center mt-2.5 mb-5">
              {category}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="price-product text-3xl font-bold text-gray-900">
              {"$ " + price}
            </span>
            <button className="text-white bg-blue-700 rounded-lg px-5 py-2.5 hover:bg-blue-800 transition duration-150 ease-in-out hover:scale-105">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
