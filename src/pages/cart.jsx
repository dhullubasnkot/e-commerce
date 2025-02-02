import { useCart } from "../context/CardContext";

const Cart = () => {
  const { cart } = useCart();

  return (
    <div className="p-6">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-6">
        Your <span className="text-teal-500">Cart</span>
      </h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cart.map((item, index) => {
            const image1 = Array.isArray(item.images)
              ? item.images[0]
              : item.images;
            const image2 = item.image;

            return (
              <div
                key={index}
                className="p-4 border border-gray-200 rounded-md flex flex-col items-center"
              >
                {image1 && (
                  <img
                    src={image1}
                    alt={`product-${index}-1`}
                    className="h-32 w-32 object-contain"
                  />
                )}
                {image2 && (
                  <img
                    src={image2}
                    alt={`product-${index}-2`}
                    className="h-32 w-32 object-contain"
                  />
                )}

                <h1 className="text-lg font-medium mt-2">{item.title}</h1>
                <p className="text-red-500 text-xl font-bold">{item.price}</p>

                {item.disprize && (
                  <p className="text-gray-400 text-sm line-through">
                    {item.disprize}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export { Cart };
