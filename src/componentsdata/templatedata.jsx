import React, { useState, useEffect } from "react";
import { Template } from "../components/template";

const TemplateData = () => {
  const [data2, setData2] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/products"
        );
        if (!response.ok) throw new Error("Failed to fetch data");

        const res = await response.json();
        console.log("Fetched data (API 2):", res);

        const filteredData = res.filter(
          (item) => item.id >= 1 && item.id <= 50
        );
        setData2(filteredData);
        console.log("Filtered data (API 2):", filteredData);
      } catch (error) {
        console.error("Error fetching data from API 2:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="p-6">
        <div className="flex justify-center items-center py-6 px-4 sm:py-8 lg:py-3">
          <span className="before:block before:absolute before:-inset-1 mt-1 before:-skew-y-3 before:bg-pink-500 w-[180px] h-[30px] sm:w-[220px] sm:h-[50px] md:w-[250px] md:h-[60px] lg:h-[40px] relative inline-block">
            <span className="relative text-xl sm:text-2xl md:text-3xl lg:text-3xl text-white font-semibold flex items-center justify-center">
              Our Products
            </span>
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {data2.map((item) => (
            <Template
              key={item.id}
              images={item.images}
              title={
                item.title.length > 20
                  ? item.title.substring(0, 20)
                  : item.title
              }
              price={"Rs. " + item.price * 50}
              disprize={"Rs." + item.price * 80}
              hoverbutton="Buy-Now"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export { TemplateData };
