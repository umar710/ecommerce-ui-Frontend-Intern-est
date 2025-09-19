// ProductCard.js
import RatingBar from "./RatingBar";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-md shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden relative">
      {/* HOT Badge */}
      {product.isHot && (
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
          HOT
        </span>
      )}

      {/* Product Image - Adjusted height */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-contain p-4"
      />

      {/* Product Info */}
      <div className="p-3 flex flex-col gap-2">
        <h3 className="text-gray-800 font-semibold text-sm">{product.name}</h3>
        <div className="flex justify-center">
          <RatingBar rating={product.rating} />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-blue-500 font-bold text-md">
            ${product.price.toFixed(2)}
          </span>
          <div className="flex items-center gap-2 text-xs">
            <span className="line-through text-gray-400">
              ${product.oldPrice.toFixed(2)}
            </span>
            <span className="text-red-500 font-semibold">
              {product.discount}% OFF
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
