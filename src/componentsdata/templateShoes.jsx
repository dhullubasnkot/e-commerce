import React, { useState, useEffect } from "react";
import { Template } from "../components/template";
import { RunningShoesIcon } from "hugeicons-react";

const TemplateShoes = () => {
  const [data1, setData1] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/products/"
        );
        if (!response.ok) throw new Error("Failed to fetch data");

        const res = await response.json();
        console.log("Fetched data:", res);

        const filteredData = res.filter(
          (item) => item.id >= 35 && item.id <= 44
        );
        setData1(filteredData);
        console.log("Filtered data:", filteredData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Function to load more items
  const loadMoreItems = () => {
    setVisibleCount((prev) => Math.min(prev + 6, data1.length));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6 flex items-center justify-center flex-wrap">
        <RunningShoesIcon
          size={36}
          color={"#000000"}
          variant={"stroke"}
          className="ml-1"
        />
        <span className="text-customRed mx-2 flex items-center ">
          Step Into Style:
        </span>
        A Showcase of Stunning
        <span className="text-customRed mx-2 flex items-center">
          Shoes
          <RunningShoesIcon
            size={36}
            color={"#000000"}
            variant={"stroke"}
            className="ml-1"
          />
        </span>
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {data1.slice(0, visibleCount).map((item) => (
          <Template
            key={item.id}
            images={item.images}
            title={
              item.title.length > 20 ? item.title.substring(0, 20) : item.title
            }
            price={"Rs. " + item.price * 50}
            disprize={"Rs. " + item.price * 80}
            hoverbutton="Buy-Now"
          />
        ))}
      </div>
      {visibleCount < data1.length && (
        <div className="flex justify-center mt-4">
          <button
            onClick={loadMoreItems}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
};

export { TemplateShoes };
