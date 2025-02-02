import { Discount } from "../components/discount";
import { useEffect, useState } from "react";
const DiscountData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/category/jewelery"
        );
        if (!response.ok) throw new Error("Failed to fetch data");

        const res = await response.json();
        console.log("Fetched data (API 1):", res);

        const filteredData = res.filter(
          (item) => item.id >= 5 && item.id <= 10
        );
        setData(filteredData);
        console.log("Filtered data (API 1):", filteredData);
      } catch (error) {
        console.error("Error fetching data from API 1:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6 flex items-center justify-center flex-wrap">
        <span className="text-customRed mx-2 flex items-center">
          Elegant Jewelry:
        </span>

        <span className="text-blue-600 mx-2 flex items-center">
          Sparkle & Shine
        </span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2">
        {data.map((item) => (
          <Discount
            key={item.id}
            image={item.image}
            title={
              item.title.length > 50 ? item.title.substring(0, 25) : item.title
            }
            description={
              item.description.length > 300
                ? item.description.substring(0, 300) + "..."
                : item.description
            }
            dis={"Rs. " + item.price * 150}
            price={"Rs. " + item.price * 100}
            // actualprize={`$${item.price.toFixed(2)}`}
            hoverbutton="View All"
          />
        ))}
      </div>
    </>
  );
};
export { DiscountData };
