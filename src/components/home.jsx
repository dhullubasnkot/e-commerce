import React, { useEffect, useState } from "react";
import { Template } from "./template";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://world.openfoodfacts.org/products.json?categories=grocery")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products || []);
      })
      .catch((error) => {
        console.error("Error fetching the products:", error);
      });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-6">
        Collection of Home <span className="text-teal-500">Grocery</span>
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {products.map((product) => (
          <Template
            key={product._id}
            images={product.image_url || "default-image.jpg"}
            title={product.product_name}
            price={`Rs.${(product.price || 100).toFixed(2)}`}
            hoverbutton="Add to Cart"
          />
        ))}
      </div>
    </div>
  );
}

export { Home };
