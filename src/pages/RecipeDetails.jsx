import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const RecipeDetails = () => {
  const { id } = useParams(); // Get the recipe ID from the URL

  // Data for recipes
  const recipes = [
    {
      id: 1,
      name: "Nigerian Fried Pepper Stew: Ata Dindin",
      category: "Nigerian",
      time: 60,
      ingredients: [
        "4 Red Bell Peppers (Tatashe)",
        "500g Assorted meats",
        "Boiled Eggs (Optional)",
        "3/4 cup Palm Oil",
        "3/4 Cup Vegetable Oil",
        "1.5 Whole Onions",
        "Scotch bonnet (Ata rodo)",
        "1/2 Cup Dried Prawns",
        "1/2 Chopped Onion",
        "4 Tablespoons Crayfish Powder",
        "Chicken/Beef Seasoning",
        "3 Tablespoons Locust Beans",
        "Salt to taste",
      ],
      instructions: [
        "1. Blend the red bell peppers, scotch bonnets, and 1 whole onion until smooth.",
        "2. Heat the palm oil and vegetable oil in a pot over medium heat.",
        "3. Add the chopped onions and fry until translucent.",
        "4. Pour in the blended pepper mixture and fry for about 10-15 minutes, stirring occasionally.",
        "5. Add the boiled assorted meats, dried prawns, crayfish powder, locust beans, and chicken/beef seasoning.",
        "6. Let it simmer on low heat for another 20-30 minutes, stirring occasionally to prevent burning.",
        "7. Adjust seasoning with salt to taste.",
        "8. Serve with rice or any staple of your choice, along with boiled eggs if desired.",
      ],
      image:
        "https://sisijemimah.com/wp-content/uploads/2019/08/gizdodo-blog-1024x660.jpg",
      videoUrl: "https://www.youtube.com/embed/2H1YPzUOm-w",
    },
    {
      id: 2,
      name: "Gizdodo (Peppered Gizzard and Plantain)",
      category: "Nigerian",
      time: 40,
      ingredients: [
        "3 ripe plantains",
        "450 grams gizzard",
        "4 medium size tomatoes",
        "2 red bell peppers",
        "1 whole onion, 1/2 onion chopped",
        "1/2 red, green, yellow bell pepper each chopped",
        "1.5 scotch bonnet",
        "Vegetable/sunflower oil",
        "1 tablespoon curry powder",
        "1 teaspoon garlic powder",
        "1 tsp chicken seasoning (Aromat)",
        "1/2 teaspoon thyme",
        "Salt to taste",
      ],
      instructions: [
        "1. Boil the gizzards until tender, then drain.",
        "2. Fry the gizzards in oil until golden brown, then set aside.",
        "3. In the same oil, fry the chopped onions until translucent.",
        "4. Add the chopped tomatoes, red bell peppers, and scotch bonnet, and cook until the mixture thickens.",
        "5. Stir in the fried gizzards, plantains, and spices, mixing well.",
        "6. Adjust seasoning with salt to taste, and let it cook for a few minutes to blend the flavors.",
        "7. Serve hot as a snack or with rice.",
      ],
      image: "https://sisijemimah.com/wp-content/uploads/2015/07/IMG_0968.png", // Add an appropriate image link here
      videoUrl: "https://www.youtube.com/embed/-I5R_hgMeuw", // Add unique video link
    },
    {
      id: 3,
      name: "Delicious Red Lentil Kitchari",
      category: "West African",
      time: 90,
      ingredients: [
        "1 medium yellow onion, finely chopped",
        "6 cloves garlic, minced",
        "5 medium red or Yukon Gold potatoes (quartered and sliced into 1/4” thick slices)",
        "1 cup cashews (soaked for 4 hours) + 1 cup water",
        "3 large meat alternative sausages (Beyond Meat Italian Sausages preferred)",
        "1-2 Tbsp olive oil",
        "½-1 tsp smoked paprika",
        "A pinch of red pepper flakes, to taste",
        "1 Tbsp dried oregano",
        "1 Tbsp dried thyme",
        "1 tsp fennel seeds, ground fine in a mortar and pestle",
        "2 medium size bay leaves",
        "1 - 32 oz vegetarian broth (Imagine No-Chicken broth preferred)",
        "2-3 tsp Better Than Bouillon No-Chicken base (or 2 not-chicken bouillons)",
        "2-3 cups water",
        "1/3 cup organic white wine, optional (or 1-2 tsp white wine vinegar)",
        "1 bunch chopped curly kale (about 3 cups), stems removed, or baby spinach",
        "Salt and pepper to taste",
        "Fresh grated parmesan cheese (optional, vegan)",
      ],
      instructions: [
        "Finely chop the onion and garlic.",
        "Quarter the potatoes and slice them into bite-sized slices.",
        "Heat a large soup pot on medium heat. Add 1-2 Tbsp of olive oil.",
        "Sauté the Beyond Meat sausages until golden brown. Break up the sausages with a spatula, remove them from heat, and set aside.",
        "Sauté the onions for 5 minutes or until translucent.",
        "Add the garlic and fennel and cook until fragrant.",
        "Deglaze the pan by adding 1/3 cup of white wine. Let it evaporate.",
        "Add oregano, thyme, bay leaves, paprika, and mix well with onions.",
        "Add the potato slices.",
        "Pour in the 32 oz Imagine No-Chicken broth, 3 cups of water, and 1-2 no-chicken bouillon or no-chicken base.",
        "Simmer the soup on a low boil until potatoes are fork-tender (about 20-25 minutes).",
        "While the soup is cooking, blend the soaked cashews and 1 cup of water into cashew cream.",
        "Once the soup is almost done, add the chopped kale or spinach until wilted.",
        "Stir in the cashew cream and mix well. Taste and adjust seasonings.",
        "Serve the soup hot, topped with the sautéed sausage, fresh thyme, and vegan parmesan if desired.",
      ],
      image:
        "https://www.3ho.org/wp-content/uploads/2022/08/IMG-8335-scaled.jpg", // Replace with actual image URL
    },
    {
      id: 4,
      name: "Vegan Zuppa Toscana",
      category: "West African",
      time: 90,
      ingredients: [
        "2 cups long-grain parboiled rice, rinsed",
        "6 chicken drumsticks (or thighs)",
        "4 medium tomatoes, blended",
        "2 red bell peppers, blended",
        "1 large onion, diced (divided use: half for blending, half for sautéing)",
        "2 Scotch bonnets, blended",
        "3 garlic cloves, minced",
        "1 tsp grated ginger",
        "1/4 cup vegetable oil",
        "1 Tbsp tomato paste",
        "1 tsp curry powder",
        "1 tsp thyme",
        "2 bay leaves",
        "2 cups chicken stock",
        "1 tsp salt (to taste)",
        "1/2 tsp ground black pepper",
        "1/2 tsp paprika (optional)",
        "1 cup mixed vegetables (peas, carrots)",
      ],
      instructions: [
        "1. Season the chicken with salt, pepper, curry powder, and thyme. Set aside.",
        "2. Heat vegetable oil in a large pot over medium heat. Brown the seasoned chicken on all sides and set it aside.",
        "3. In the same pot, sauté the diced onions until translucent. Add the minced garlic and ginger, cooking until fragrant.",
        "4. Stir in the tomato paste and cook for 3–5 minutes to reduce its acidity.",
        "5. Pour in the blended tomato, pepper, and onion mixture, and cook until the sauce thickens, about 10–15 minutes.",
        "6. Add the chicken stock, bay leaves, curry powder, thyme, and paprika. Stir well and adjust seasoning with salt.",
        "7. Pour the rinsed rice into the sauce, ensuring the rice is fully covered by the liquid. Add more stock if necessary.",
        "8. Reduce heat to low, cover the pot, and simmer for about 20–25 minutes, stirring occasionally.",
        "9. Add the mixed vegetables and the browned chicken. Cover again and cook for another 10–15 minutes until the rice is tender and the chicken is fully cooked.",
        "10. Remove from heat, fluff the rice, and serve hot with the chicken on top.",
      ],
      image: "https://www.3ho.org/wp-content/uploads/2022/07/Capture.png", // Replace with actual image URL
    },
    {
      id: 5,
      name: "Spaghetti Bolognese",
      category: "American",
      time: 90,
      ingredients: [
        "1 1/2 tbsp olive oil",
        "2 garlic cloves, minced",
        "1 onion, finely chopped (brown, yellow, or white)",
        "1 lb / 500g beef mince (ground beef) or half pork, half beef",
        "1/2 cup (125 ml) dry red wine (sub water or beef broth/stock)",
        "2 beef bouillon cubes, crumbled or granulated beef bouillon",
        "800g / 28 oz can crushed tomato (or tomato passata)",
        "2 tbsp tomato paste",
        "2 tsp white sugar, if needed",
        "2 tsp Worcestershire sauce",
        "2 dried bay leaves",
        "2 sprigs fresh thyme (or 1/2 tsp dried thyme or oregano)",
        "3/4 tsp cooking salt (kosher salt)",
        "1/2 tsp black pepper",
      ],
      instructions: [
        "Sauté: Heat oil in a large pot or deep skillet over medium-high heat. Add onion and garlic, and cook for 3 minutes or until light golden and softened.",
        "Cook beef: Turn heat up to high and add beef. Cook, breaking it up as you go, until browned.",
        "Reduce wine: Add red wine. Bring to a simmer and cook for 1 minute, scraping the bottom of the pot, until the alcohol smell is gone.",
        "Simmer: Add the remaining ingredients. Stir, bring to a simmer, then turn down to medium so it bubbles gently. Cook for 20-30 minutes (no lid), adding water if the sauce gets too thick. Stir occasionally.",
        "Slow simmer option: For a richer flavor, add 3/4 cup of water, cover with a lid, and simmer on very low for 2-2.5 hours, stirring every 30 minutes. Uncover and simmer for an additional 20 minutes to thicken the sauce.",
        "Taste and add more salt if desired. Serve over spaghetti. If you have the time, consider tossing the sauce and pasta together.",
        "Tossing Sauce and Spaghetti (optional): Bring a large pot of salted water to boil. Add pasta and cook per packet directions MINUS 1 minute.",
        "Scoop out a mug of pasta cooking water and set aside, then drain the pasta.",
        "Add pasta to the bolognese sauce with about 1/2 cup (125 ml) of reserved pasta water over medium heat. Toss gently for 1.5-2 minutes, or until the spaghetti turns red and the sauce thickens.",
        "Divide between bowls and garnish with parmesan and parsley if desired.",
      ],
      image:
        "https://www.recipetineats.com/tachyon/2016/08/Spaghetti-Bolognese_3-1.jpg?resize=900%2C1080&zoom=1", // Replace with actual image URL
      videoUrl: "https://www.youtube.com/embed/DNFyRF5pVA8",
    },
    {
      id: 6,
      name: "Chicken Curry",
      category: "American & Indian",
      time: 90,
      ingredients: [
        "1½ pounds boneless, skinless chicken breasts, diced into 1-inch cubes",
        "3 TBSP olive oil",
        "1 tsp garlic, peeled and minced fine",
        "1 tsp ginger, peeled and grated",
        "Salt and black pepper to taste",
        "1 medium onion, peeled and chopped fine",
        "1 tsp coriander powder",
        "1 tsp cumin powder",
        "½ tsp turmeric powder",
        "2 tomatoes, chopped fine",
        "1 medium jalapeño chili, seeded and chopped fine",
      ],
      instructions: [
        "Pierce chicken with a fork or sharp knife for marinating purposes.",
        "Marinate chicken in 1 TBSP olive oil, with the garlic, ginger, salt, and black pepper. Set aside for 30 minutes.",
        "In the meantime, heat 2 TBSP of the remaining olive oil in a stovetop skillet over medium heat and sauté the onions.",
        "Add in the coriander, cumin, and turmeric powders, and stir quickly.",
        "To avoid burning the spices, immediately add the tomatoes and jalapeño chili.",
        "Stir slowly until the tomatoes are well blended and the mixture has a spicy flavor.",
        "Add the marinated chicken pieces and cook until done, approximately 20-30 minutes.",
      ],
      image:
        "https://www.allrecipes.com/thmb/FL-xnyAllLyHcKdkjUZkotVlHR8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/46822-indian-chicken-curry-ii-DDMFS-4x3-39160aaa95674ee395b9d4609e3b0988.jpg", // Replace with actual image URL
    },
    {
      id: 7,
      name: "Caesar Salad",
      category: "American",
      time: 90,
      ingredients: [
        '1/2 French Baguette, cut in half and thinly sliced (1/4" thick)',
        "3 Tbsp extra virgin olive oil",
        "1 tsp minced garlic (2 small cloves)",
        "2 Tbsp grated parmesan cheese",
        "2 small garlic cloves, minced (1 tsp)",
        "2 tsp dijon mustard",
        "1 tsp Worcestershire sauce",
        "2 tsp fresh lemon juice",
        "1 1/2 tsp red wine vinegar",
        "1/3 cup extra virgin olive oil",
        "1/2 tsp sea salt, or to taste",
        "1/8 tsp black pepper, plus more to serve",
        "1 large romaine lettuce (or 2 small heads romaine)",
        "1/3 cup parmesan cheese, shredded or shaved",
      ],
      instructions: [
        "Preheat oven to 350˚F.",
        'Cut the baguette in half lengthwise through the top and slice diagonally into 1/4" thick pieces.',
        "Place bread pieces onto a baking sheet.",
        "In a small bowl, combine 3 Tbsp olive oil and 1 tsp minced garlic.",
        "Drizzle the garlic oil over the croutons and sprinkle with 2 Tbsp grated parmesan cheese.",
        "Toss until evenly coated.",
        "Spread in a single layer on the baking sheet and bake at 350˚F for 10-12 minutes until golden and crisp.",
        "In a small bowl, whisk together garlic, dijon mustard, Worcestershire, lemon juice, and red wine vinegar.",
        "Slowly drizzle in olive oil while whisking constantly.",
        "Whisk in salt and black pepper, adjusting to taste.",
        "Rinse, dry, and chop or tear romaine lettuce into bite-sized pieces.",
        "Place in a large serving bowl and sprinkle generously with parmesan cheese and cooled croutons.",
        "Drizzle with Caesar dressing and toss gently until the lettuce is evenly coated.",
      ],
      image:
        "https://natashaskitchen.com/wp-content/uploads/2015/01/Caesar-Salad-with-Pasta-and-Avocado-5.jpg", // Replace with actual image URL
    },
    {
      id: 8,
      name: "Chocolate Cake",
      category: "American",
      time: 90,
      ingredients: [
        "1 3/4 cups plain / all purpose flour",
        "3/4 cup cocoa powder, unsweetened",
        "1 1/2 tsp baking powder",
        "1 1/2 tsp baking soda",
        "2 cups white sugar",
        "1 tsp salt",
        "2 eggs (~55-65g each)",
        "1 cup milk (low or full fat)",
        "1/2 cup vegetable oil (or canola)",
        "2 tsp vanilla extract",
        "1 cup boiling water",
        "1 1/2 batches Chocolate Buttercream Frosting",
      ],
      instructions: [
        'Preheat oven to 180°C/350°F (160°C fan). Grease 2 x 22cm/9" cake pans with butter and line the base.',
        "Sift flour, cocoa, baking powder, and baking soda into a large bowl. Add sugar and salt, whisk briefly to combine.",
        "Add eggs, milk, oil, and vanilla. Whisk well to combine until lump-free, about 30 seconds.",
        "Add boiling water and whisk to incorporate. The batter will be very thin.",
        "Pour batter into the prepared cake pans.",
        "Bake for 35 minutes or until a wooden skewer inserted into the center comes out clean.",
        "Cool the cakes for 10 minutes, then turn them out onto wire racks upside down.",
        "Cool completely before frosting with Chocolate Buttercream Frosting.",
      ],

      image:
        "https://www.recipetineats.com/tachyon/2018/03/Chocolate-Cake_1-1.jpg?resize=1200%2C1680&zoom=0.5", // Replace with
      videoUrl: "https://www.youtube.com/embed/0Uio9xshlNI",
    },
  ];

  // Find the recipe by ID
  const recipe = recipes.find((r) => r.id === parseInt(id));

  // Check if recipe is found
  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4 mt-16">
        <h1 className="text-3xl font-bold mb-4">{recipe.name}</h1>
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-64 object-cover mb-4 rounded-md"
        />
        <div className="mb-4">
          <p className="text-gray-700">Category: {recipe.category}</p>
          <p className="text-gray-700">Cooking Time: {recipe.time} minutes</p>
        </div>

        {/* Flex Container for Ingredients and Video */}
        <div className="flex flex-col md:flex-row justify-between gap-6 mb-6">
          {/* Ingredients Section */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
            <ul className="list-disc list-inside mb-4">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="text-gray-600">
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>

          {/* Video Section */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">Video Recipe</h3>
            <iframe
              width="100%"
              height="315"
              src={recipe.videoUrl} // Use the videoUrl from the recipe data
              title={`${recipe.name} Video`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-64"
            ></iframe>
          </div>
        </div>

        {/* Instructions Section */}
        <h2 className="text-2xl font-bold mb-4">Instructions</h2>
        <ol className="list-decimal list-inside mb-4">
          {recipe.instructions.map((instruction, index) => (
            <li key={index} className="text-gray-600 mb-2">
              {instruction}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetails;
