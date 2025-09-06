import React, { useEffect, useState } from "react";

const ProductsCard = ({ title, price, image, rating }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-72 hover:shadow-lg transition-shadow duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-contain bg-neutral-100 p-4"
      />
      <div className="p-4">
        <h2 className="text-neutral-800 text-lg font-semibold mb-2 line-clamp-2">
          {title}
        </h2>
        <p className="text-cyan-700 text-xl font-bold mb-2">${price}</p>
        <div className="flex items-center gap-1 text-yellow-500 text-sm">
          <span className="font-medium text-neutral-700">Rating:</span>
          <span>⭐ {rating}</span>
        </div>
      </div>
    </div>
  );
};
export default ProductsCard;
