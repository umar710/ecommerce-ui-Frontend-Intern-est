import shoeImg from "../assets/images/img_shoes_shoe_png.png";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 sm:px-6 py-4 sm:py-6 rounded-lg mb-4 sm:mb-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-4 sm:gap-6 md:gap-8">
        {/* Text */}
        <div className="text-center md:text-left order-2 md:order-1">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">
            Adidas Men Running Sneakers
          </h1>
          <p className="mb-3 sm:mb-4 text-xs sm:text-sm lg:text-base opacity-90">
            Performance and design. Taken right to the edge.
          </p>
          <button className="bg-white text-blue-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-md font-medium hover:bg-gray-100 transition-colors text-xs sm:text-sm">
            SHOP NOW
          </button>
        </div>

        {/* Image */}
        <div className="flex justify-center order-1 md:order-2">
          <img
            src={shoeImg}
            alt="Sneaker"
            className="w-32 sm:w-40 md:w-48 lg:w-56"
          />
        </div>
      </div>
    </section>
  );
}
