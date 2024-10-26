import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe, onRemove }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const savedFavorites =
      JSON.parse(localStorage.getItem("favoriteRecipes")) || [];
    const foundFavorite = savedFavorites.some((fav) => fav.id === recipe.id);
    setIsFavorite(foundFavorite);
  }, [recipe.id]);

  const handleFavoriteClick = () => {
    const savedFavorites =
      JSON.parse(localStorage.getItem("favoriteRecipes")) || [];

    if (isFavorite) {
      // Remove from favorites
      const updatedFavorites = savedFavorites.filter(
        (fav) => fav.id !== recipe.id
      );
      localStorage.setItem("favoriteRecipes", JSON.stringify(updatedFavorites));
      setIsFavorite(false);
      alert("Removed from favorites!");

      // Call the onRemove function passed from the parent
      onRemove(recipe.id);
    } else {
      // Add to favorites
      savedFavorites.push(recipe);
      localStorage.setItem("favoriteRecipes", JSON.stringify(savedFavorites));
      setIsFavorite(true);
      alert("Added to favorites!");
    }
  };

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
        <p className="text-gray-600">Time: {recipe.time} minutes</p>
        <p>{recipe.ingredients.join(", ")}</p>

        <Link
          to={`/recipes/${recipe.id}`} // Correct path to the details page
          className="text-blue-500 hover:underline mt-2 inline-block"
        >
          View Details
        </Link>

        <button
          onClick={handleFavoriteClick}
          className="text-red-500 hover:underline mt-2 ml-2"
        >
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
