import React, { useState } from "react";
import RecipeCard from "../components/RecipeCard"; // Import your RecipeCard component
import Filter from "../components/Filter"; // Import your Filter component
import Navbar from "../components/Navbar";

const Recipes = () => {
  // Sample data for recipes (You can replace this with your actual data source)
  const [recipes] = useState([
    {
      id: 1,
      name: "Nigerian Fried Pepper Soup",
      category: "Non-Vegetarian",
      time: 30,
      ingredients: ["vegetables", "soy sauce"],
      image:
        "https://sisijemimah.com/wp-content/uploads/2019/08/DSC_0142_20190829083136688-1024x652.jpg",
    },
    {
      id: 2,
      name: "Gizdodo (Dodo Gizzard)",
      category: "Non-Vegetarian",
      time: 45,
      ingredients: ["Gizzard", "Vegetables"],
      image:
        "https://sisijemimah.com/wp-content/uploads/2019/08/gizdodo-blog-1024x660.jpg",
    },
    {
      id: 3,
      name: "Delicious Red Lentil Kitchari",
      category: "Vegetarian",
      time: 25,
      ingredients: ["pasta", "vegetables", "parmesan"],
      image:
        "https://www.3ho.org/wp-content/uploads/2022/08/IMG-8335-scaled.jpg",
    },
    {
      id: 4,
      name: "Vegan Zuppa Toscana",
      category: "Vegan",
      time: 20,
      ingredients: ["cheese", "lemon", "dill"],
      image: "https://www.3ho.org/wp-content/uploads/2022/07/Capture.png",
    },
    {
      id: 5,
      name: "Spaghetti Bolognese",
      category: "Non-Vegetarian",
      time: 20,
      ingredients: ["spaghetti", "lemon", "tomatoes"],
      image:
        "https://www.recipetineats.com/tachyon/2018/07/Spaghetti-Bolognese_5.jpg?resize=900%2C1260&zoom=1", // Replace with a valid image URL
    },
    {
      id: 6,
      name: "Chicken Curry",
      category: "Non-Vegetarian",
      time: 35,
      ingredients: ["chicken", "oil", "tomatoes"],
      image:
        "https://cdn.prod.website-files.com/6682ad647d71ff9a4ed5a566/6682ad647d71ff9a4ed5afba_64de5fb08a7a18e0610b8036_zahras-chicken-curry-617-p-1080.jpeg", // Replace with a valid image URL
    },
    // Add more recipe objects here
  ]);

  // State to manage filters and search
  const [categoryFilter, setCategoryFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Filtered recipes based on the selected category and search query
  const filteredRecipes = recipes.filter((recipe) => {
    const matchesCategory = categoryFilter
      ? recipe.category === categoryFilter
      : true;
    const matchesSearch = recipe.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <Navbar />
      <div className="p-4 mt-20">
        <h1 className="text-3xl font-bold mb-4">Recipes</h1>

        {/* Filters and Search Bar */}
        <div className="mb-4">
          <Filter
            categoryFilter={categoryFilter}
            setCategoryFilter={setCategoryFilter}
          />
          <input
            type="text"
            placeholder="Search recipes..."
            className="border rounded p-2 ml-4"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Recipe List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recipes;
