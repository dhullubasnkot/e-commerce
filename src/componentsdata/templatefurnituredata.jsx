import React, { useState, useEffect } from "react";
import { Template } from "../components/template";

const FurnitureData = () => {
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
          (item) => item.id >= 28 && item.id <= 34
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
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-6">
        Best Furniture On the <span className="text-teal-500">Town</span>
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

export { FurnitureData };
