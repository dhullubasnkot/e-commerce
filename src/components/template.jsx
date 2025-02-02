import { useCart } from "../context/CardContext";
const Template = ({ images, title, hoverbutton, disprize, price }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const product = { images, title, price, disprize };
    addToCart(product);
  };

  return (
    <>
      <div className="group mr-4 flex flex-col items-center gap-2 p-4 border border-gray-300 rounded-md mt-2 transform transition duration-300 hover:scale-105  min-h-[150px] sm:min-h-[250px] md:min-h-[350px] lg:min-h-[350px] relative">
        <div className="flex justify-center items-center h-[80px] w-[80px] sm:h-[140px] sm:w-[140px] md:h-[160px] md:w-[160px] lg:h-[180px] lg:w-[150px] cursor-pointer overflow-hidden rounded-md">
          <img
            src={images}
            alt="product"
            className="h-full w-full object-contain"
          />
        </div>
        <div className="flex flex-col items-center text-center leading-5">
          <h1 className="mt-0 text-lg font-medium sm:text-xl md:text-2xl lg:text-xl">
            {title}
          </h1>
          <p className="text-red-500 text-xl font-bold sm:text-2xl md:lg:text-xl ">
            {price}
          </p>
          <p className="text-gray-400 text-sm line-through sm:text-base md:text-lg">
            {disprize}
          </p>
        </div>
        <button
          className="lg:h-[40px] lg:w-[120px]  text-sm h-[30px] w-[110px] lg:sm:md:xl:ml-32 ml-28 bottom-4 sm:bottom-5 md:bottom-5 left-1/2 transform -translate-x-1/2 bg-customRed text-black px-4 py-2 lg:px-4 lg:py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={handleAddToCart}
        >
          {hoverbutton}
        </button>
      </div>
    </>
  );
};

export { Template };
