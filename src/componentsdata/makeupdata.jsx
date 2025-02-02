import { useState, useEffect } from "react";
import { Template } from "../components/template";
function MakeupProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "http://makeup-api.herokuapp.com/api/v1/products.json"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setProducts(data.slice(50, 100));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        //
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-6">
        <span className="text-customRed">Unleash</span> Your Inner{" "}
        <span className="text-teal-500">Beauty</span>
        <span className="ml-2">Today</span>
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
        {products.map((product) => (
          <Template
            key={product.id}
            images={product.image_link || "https://via.placeholder.com/150"}
            title={product.name}
            price={`Rs.${product.price * 30 || "N/A"}`}
            disprize={`Rs.${(product.price * 50).toFixed(2) || "N/A"}`}
            hoverbutton="Add to Cart"
          />
        ))}
      </div>
    </div>
  );
}

export { MakeupProducts };
