const DiscountPage = ({
  price,
  title,
  button,
  dis,
  des1,
  des2,
  image,
  disp,
}) => {
  return (
    <div className="relative">
      <div className="  p-6 rounded-lg lg:h-[550px] w-full max-w-[1800px] text-center flex flex-col lg:flex-row items-center">
        <div className="p-6 lg:w-[600px] lg:h-[400px]">
          <h2 className="text-sm lg:text-2xl text-customRed font-semibold text-left lg:leading-[40px]">
            {price}
          </h2>
          <h2 className="text-sm lg:text-xl text-gray-600 line-through font-semibold text-left lg:leading-[60px]">
            {disp}
          </h2>
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-left font-bold text-gray-900 mt-2 lg:leading-[60px]">
            {title}
          </h1>
          <p className="text-lg lg:text-2xl mt-2 text-gray-700 font-medium text-left lg:leading-[60px]">
            {des1} <span className="text-red-500 font-bold">{dis}</span> {des2}
          </p>
          <button className="mt-4 bg-customRed px-6 py-3 flex justify-start hover:bg-red-400 text-white font-medium rounded-md transition">
            {button}
          </button>
        </div>
        <div className="lg:w-[600px] lg:ml-[600px] flex justify-center mt-6 lg:mt-0">
          <img
            src={image}
            alt="Laptop"
            className="w-[400px] h-auto object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export { DiscountPage };
