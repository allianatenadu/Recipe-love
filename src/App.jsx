import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import RecipeDetails from "./pages/RecipeDetails";
import CreateRecipe from "./pages/CreateRecipe";
import MyFavorites from "./pages/Myfavorites";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        <Route path="/create" element={<CreateRecipe />} />
        <Route path="/edit-recipe/:id" element={<CreateRecipe />} />
        <Route path="favorites" element={<MyFavorites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
