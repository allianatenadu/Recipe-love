import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar"; // Import the Navbar component
import FoodCard from "../components/FoodCard"; // Import the FoodCard component

function Home() {
  // Sample data for food items
  const foodItems = [
    {
      id: 5,
      name: "Spaghetti Bolognese",
      category: "Pasta",
      image:
        "https://www.recipetineats.com/tachyon/2018/07/Spaghetti-Bolognese_5.jpg?resize=900%2C1260&zoom=1", // Replace with a valid image URL
    },
    {
      id: 6,
      name: "Chicken Curry",
      category: "Curry",
      image:
        "https://cdn.prod.website-files.com/6682ad647d71ff9a4ed5a566/6682ad647d71ff9a4ed5afba_64de5fb08a7a18e0610b8036_zahras-chicken-curry-617-p-1080.jpeg", // Replace with a valid image URL
    },
    {
      id: 7,
      name: "Caesar Salad",
      category: "Salad",
      image:
        "https://natashaskitchen.com/wp-content/uploads/2019/01/Caesar-Salad-Recipe-5-1024x1536.jpg", // Replace with a valid image URL
    },
    {
      id: 8,
      name: "Chocolate Cake",
      category: "Dessert",
      image:
        "https://www.recipetineats.com/tachyon/2018/03/Chocolate-Cake_2.jpg?resize=1200%2C1680&zoom=0.5", // Replace with a valid image URL
    },
  ];

  return (
    <div>
      <Navbar /> {/* Include the Navbar at the top */}
      <div className="flex flex-col md:flex-row items-start justify-between mt-20 p-4">
        <div className="w-full md:w-1/2 mb-6 md:mb-0 mt-20 pl-20">
          <h1 className="text-4xl font-bold text-black-800 mb-4">
            Welcome to Recipe.love!
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Discover a world of delicious recipes or add your own! Browse by
            category, ingredients, or time.
          </p>
          <div className="flex space-x-4 mb-4">
            <Link
              to="/recipes"
              className="px-6 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-900"
            >
              Browse Recipes
            </Link>
            <Link
              to="/create"
              className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-900"
            >
              Add a New Recipe
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center pr-32">
          <img
            src="https://i.pinimg.com/564x/10/ee/77/10ee7726ff0db4e7cc004bf3848c7e4f.jpg" // Replace with a valid image URL
            alt="Delicious food"
            className="w-3/4 h-auto rounded-lg" // Adjusted size to match text
          />
        </div>
      </div>
      {/* Food Cards Section */}
      <div className="p-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Featured Foods</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {foodItems.map((food) => (
            <FoodCard key={food.id} recipe={food} /> // Ensure you pass the correct prop
          ))}
        </div>
        <Link to="/recipes" className="text-blue-500 hover:underline mt-4">
          See More Recipes
        </Link>
      </div>
    </div>
  );
}

export default Home;
