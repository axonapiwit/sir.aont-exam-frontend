export default function EmptyCard() {
  return (
    <div className="grid grid-cols-4 grid-flow-row-2 gap-4 w-full h-full">
      {[...Array(8)].map((item, i) => (
        <div
          className="w-full max-w-sm bg-white rounded-lg shadow-md border"
          key={i}
        >
          <div className="animate-pulse space-x-4 space-y-6">
            <div className="img-product h-[300px] w-full object-cover rounded-t-lg flex justify-center items-center">
              <svg className="p-10 text-gray-300" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
            </div>
            <div className="container-text px-5 pb-5">
              <div className="title">
                <h5 className="px-4 py-4 bg-gray-300 rounded-2xl">
                </h5>
              </div>
              <div className="review flex items-center mt-2.5 mb-5 px-3 py-3 bg-gray-300 h-4 w-[150px] rounded-xl">
              </div>
              <div className="flex justify-between items-center">
                <span className="price-product px-5 py-5 bg-gray-300 h-4 w-[150px] rounded-xl">
                </span>
                <button className="add-btn px-5 py-5 bg-gray-300 h-4 w-[100px] rounded-xl">
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
