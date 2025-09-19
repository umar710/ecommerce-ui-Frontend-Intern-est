import { ReactComponent as CartIcon } from "../assets/images/img_cart.svg";
import headerLogo from "../assets/images/img_header_logo.png";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Header({ onMenuClick }) {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo and mobile menu button */}
        <div className="flex items-center">
          <button
            className="lg:hidden mr-3 p-1 rounded-md hover:bg-gray-100"
            onClick={onMenuClick}
            aria-label="Open menu"
          >
            <Bars3Icon className="h-6 w-6 text-gray-600" />
          </button>
          <img
            src={headerLogo}
            alt="E-Comm Logo"
            className="w-28 sm:w-32 h-auto"
          />
        </div>

        {/* Navigation - hidden on mobile */}
        <nav className="hidden md:flex gap-4 lg:gap-6 text-gray-600 font-medium text-sm lg:text-base">
          <a href="#" className="hover:text-blue-600 transition-colors">
            HOME
          </a>
          <a href="#" className="hover:text-blue-600 transition-colors">
            BAG
          </a>
          <a href="#" className="hover:text-blue-600 transition-colors">
            SNEAKERS
          </a>
          <a href="#" className="hover:text-blue-600 transition-colors">
            BELT
          </a>
          <a href="#" className="hover:text-blue-600 transition-colors">
            CONTACT
          </a>
        </nav>

        {/* Cart */}
        <div className="flex items-center gap-2">
          <CartIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
          <span className="hidden sm:inline text-gray-600 font-medium text-sm lg:text-base">
            Items <span className="ml-1">$0.00</span>
          </span>
        </div>
      </div>
    </header>
  );
}
