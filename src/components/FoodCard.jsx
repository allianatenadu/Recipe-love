import React from "react";
import { Link } from "react-router-dom";

const FoodCard = ({ recipe }) => {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden">
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{recipe.name}</h3>
        <p className="text-gray-600">Category: {recipe.category}</p>

        <Link
          to={`/recipes/${recipe.id}`} // Adjust the path to the details page as needed
          className="text-blue-500 hover:underline"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default FoodCard;
