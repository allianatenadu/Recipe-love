import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-10 flex items-center h-16">
      {" "}
      {/* Reduced padding */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Video with w-32 h-40 */}
        <div className="w-28 h-16 ml-4 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover rounded-md"
          >
            <source src="src/components/rp.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Navigation links and button */}
        <div className="flex-grow flex justify-center items-center space-x-4">
          <Link to="/" className="text-pink-600 hover:text-gray-800">
            Home
          </Link>
          <Link to="/recipes" className="text-gray-600 hover:text-gray-800">
            Recipes
          </Link>
          <Link to="/create" className="text-gray-600 hover:text-gray-800">
            Create Recipe
          </Link>
          <Link to="/favorites" className="text-gray-600 hover:text-gray-800">
            My Favorites
          </Link>
        </div>

        {/* Latest Contest Button */}
        <div className="mr-4">
          {" "}
          {/* Add some margin to the right */}
          <button className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-md">
            Latest Contest
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
