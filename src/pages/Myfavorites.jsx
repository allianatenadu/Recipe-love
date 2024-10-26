import React, { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard"; // Import your RecipeCard component
import Navbar from "../components/Navbar"; // Import your Navbar component

const MyFavorites = () => {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  useEffect(() => {
    // Retrieve favorite recipes from localStorage
    const savedFavorites =
      JSON.parse(localStorage.getItem("favoriteRecipes")) || [];
    setFavoriteRecipes(savedFavorites);
  }, []);

  return (
    <div>
      <Navbar /> {/* Ensure Navbar is rendered correctly */}
      <div className="mt-20">
        <h1 className="text-3xl font-bold mb-4">My Favorite Recipes</h1>

        {/* Recipe List Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {favoriteRecipes.length > 0 ? (
            favoriteRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))
          ) : (
            <p>No favorite recipes added yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyFavorites;
