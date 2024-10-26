import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const CreateRecipe = () => {
  const { id } = useParams(); // Get recipe ID if editing
  const navigate = useNavigate();

  // Form states
  const [recipeName, setRecipeName] = useState("");
  const [ingredients, setIngredients] = useState([""]);
  const [steps, setSteps] = useState([""]);
  const [image, setImage] = useState("");
  const [submittedRecipes, setSubmittedRecipes] = useState([]); // To store multiple submitted recipes

  // If editing, fetch the recipe details (you'll replace this with real data fetching)
  useEffect(() => {
    if (id) {
      const fetchRecipe = async () => {
        // Mock fetch, replace with real API call
        const recipe = {
          name: "Sample Recipe",
          ingredients: ["Sample Ingredient 1", "Sample Ingredient 2"],
          steps: ["Step 1", "Step 2"],
          image: "https://via.placeholder.com/150",
        };
        setRecipeName(recipe.name);
        setIngredients(recipe.ingredients);
        setSteps(recipe.steps);
        setImage(recipe.image);
      };

      fetchRecipe();
    }
  }, [id]);

  // Handlers for adding/removing ingredients and steps
  const handleAddIngredient = () => {
    setIngredients([...ingredients, ""]);
  };

  const handleRemoveIngredient = (index) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  const handleAddStep = () => {
    setSteps([...steps, ""]);
  };

  const handleRemoveStep = (index) => {
    setSteps(steps.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      name: recipeName,
      ingredients,
      instructions: steps,
      image,
    };

    // Add the new recipe to the submittedRecipes array
    setSubmittedRecipes([...submittedRecipes, newRecipe]);

    // Reset the form after submission
    setRecipeName("");
    setIngredients([""]);
    setSteps([""]);
    setImage("");
  };

  return (
    <div>
      <Navbar />

      <div className="container mx-auto p-4 mt-16 flex flex-col items-center">
        {/* Display the submitted recipes in cards, arranged from left to right */}
        <div className="flex flex-wrap justify-start gap-4 mb-8">
          {submittedRecipes.map((recipe, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-4 w-60" /* School-sized cards */
            >
              <h2 className="text-xl font-bold mb-2">{recipe.name}</h2>
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-40 object-cover rounded-lg mb-2"
              />
              <h3 className="font-semibold">Ingredients:</h3>
              <ul className="list-disc list-inside mb-2">
                {recipe.ingredients.map((ingredient, idx) => (
                  <li key={idx} className="text-sm">
                    {ingredient}
                  </li>
                ))}
              </ul>
              <h3 className="font-semibold">Instructions:</h3>
              <ol className="list-decimal list-inside text-sm">
                {recipe.instructions.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
            </div>
          ))}
        </div>

        {/* Recipe creation form */}
        <div className="w-full max-w-xl">
          <h1 className="text-3xl font-bold mb-4 text-center">
            {id ? "Edit Recipe" : "Create Recipe"}
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1">Recipe Name</label>
              <input
                type="text"
                value={recipeName}
                onChange={(e) => setRecipeName(e.target.value)}
                className="border rounded p-2 w-full"
                required
              />
            </div>

            <div>
              <label className="block mb-1">Image URL</label>
              <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="border rounded p-2 w-full"
                required
              />
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
              {ingredients.map((ingredient, index) => (
                <div key={index} className="flex items-center mb-2">
                  <input
                    type="text"
                    value={ingredient}
                    onChange={(e) => {
                      const newIngredients = [...ingredients];
                      newIngredients[index] = e.target.value;
                      setIngredients(newIngredients);
                    }}
                    className="border rounded p-2 w-full"
                    placeholder="Ingredient"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveIngredient(index)}
                    className="ml-2 text-red-500"
                  >
                    Delete
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={handleAddIngredient}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Add Ingredient
              </button>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Instructions</h2>
              {steps.map((step, index) => (
                <div key={index} className="flex items-center mb-2">
                  <input
                    type="text"
                    value={step}
                    onChange={(e) => {
                      const newSteps = [...steps];
                      newSteps[index] = e.target.value;
                      setSteps(newSteps);
                    }}
                    className="border rounded p-2 w-full"
                    placeholder="Step"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveStep(index)}
                    className="ml-2 text-red-500"
                  >
                    Delete
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={handleAddStep}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Add Step
              </button>
            </div>

            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded w-full"
            >
              {id ? "Update Recipe" : "Create Recipe"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateRecipe;
