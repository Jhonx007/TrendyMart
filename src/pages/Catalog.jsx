import React from "react";
import ProductsCard from "../components/ProductsCard";
import { useFetch } from "../services/useFetch";
import Navbar from "../components/Navbar";

const Products = () => {
  const { data, loading } = useFetch("https://fakestoreapi.com/products");

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <p className="mb-4 text-cyan-700 font-semibold text-lg animate-pulse">
          Loading your Experience
        </p>

        {/* points */}
        <div className="flex space-x-2">
          <span className="w-3 h-3 bg-cyan-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
          <span className="w-3 h-3 bg-cyan-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
          <span className="w-3 h-3 bg-cyan-500 rounded-full animate-bounce"></span>
        </div>
      </div>
    );
  }
  return (
    <section className="bg-gray-50 py-10 select-none">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4">
        {/* product grid */}
        <div className=" p-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data?.map((product) => (
            <ProductsCard
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              rating={product.rating.rate}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
