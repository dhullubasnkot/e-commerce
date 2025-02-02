import { useCart } from "../context/CardContext";
const Discount = ({ image, title, price, description, dis }) => {
  const { addToCart } = useCart();
  const handleAddToCart = () => {
    const product = { image, title, price };
    addToCart(product);
  };

  return (
    <section className="ml-5 lg:sm:md:xl:py-6 ">
      <div className="lg:sm:xl:md:w-[300px] border-gray-300 lg:sm:xl:md:h-[400px] h-[350px] w-[250px] ml-3 mx-auto border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
        <div className="lg:sm:md:xl:w-[150px] lg:sm:md:xl:ml-14 lg:sm:md:xl:h-[150px] h-[70px] w-[70px] ml-20  ">
          <img src={image} alt="Product" className="w-full h-full" />
        </div>
        <div className="p-4 mt-2 text-center">
          <p className="text-gray-700 mb-2 font-extrabold lg:sm:md:xl:text-sm text-xs">
            {title}
          </p>
          <p className="text-gray-400 font-normal line-through lg:sm:md:xl:text-sm text-xs mb-2 ">
            {dis}
          </p>
          <p className="text-red-600 font-bold lg:sm:md:xl:text-sm text-xs mb-2 ">
            {price}
          </p>
          <p className="text-gray-800 lg:sm:md:xl:font-medium text-xs">
            {description}
          </p>
          <button
            className=" lg:h-[30px] lg:w-[100px] bg-customRed rounded-lg lg:mt-6 hover:bg-red-500 text-sm"
            onClick={handleAddToCart}
          >
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
};
export { Discount };
