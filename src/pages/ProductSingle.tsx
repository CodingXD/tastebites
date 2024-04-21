// import { defer, useLoaderData } from "react-router-dom";

import { Image } from "@nextui-org/react";

// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// export async function loader({ params }) {
//   // const contact = await getContact(params.contactId);
//   await delay(5000);
//   const product = {
//     title: "Pumpkin marshmallow pie",
//   };
//   // defer
//   return { product };
// }

const recipe = {
  imageUrl:
    "https://images.unsplash.com/photo-1713558014346-ceddc512a616?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  title: "Pumpkin marshmallow pie",
  ingredients: [
    "1 9-inch pie crust (pre-made or homemade)",
    "1 cup canned pumpkin puree",
    "3/4 cup granulated sugar",
    "1 tsp ground cinnamon",
    "1/2 tsp ground ginger",
    "1/4 tsp ground nutmeg",
    "1/4 tsp salt",
    "2 large eggs",
    "1 cup evaporated milk",
    "1 cup mini marshmallows",
  ],
  instructions: [
    "Preheat your oven to 425°F (220°C).",
    "Place the pie crust in a 9-inch pie dish and crimp the edges as desired.",
    "In a large mixing bowl, combine the pumpkin puree, sugar, cinnamon, ginger, nutmeg, and salt. Mix until well combined.",
    "Beat in the eggs, one at a time, until fully incorporated.",
    "Gradually stir in the evaporated milk until the mixture is smooth.",
    "Pour the pumpkin mixture into the prepared pie crust.",
    "Bake the pie in the preheated oven for 15 minutes.",
    "After 15 minutes, remove the pie from the oven and carefully sprinkle the mini marshmallows over the top.",
    "Return the pie to the oven and bake for an additional 20-25 minutes, or until the marshmallows are golden brown and the filling is set.",
    "Once done, remove the pie from the oven and allow it to cool completely before serving.",
  ],
};

export default function ProductSingle() {
  return (
    <div className="max-w-5xl mx-auto px-6">
      <Image
        src={recipe.imageUrl}
        alt={recipe.title}
        height={120}
        width={1024}
        className="aspect-video"
      />
      <article className="text-pretty my-10">
        <h1 className="mb-10 lg:text-5xl text-4xl font-semibold">
          {recipe.title}
        </h1>
        <div className="sm:p-20 p-8 bg-gray-50">
          <h3 className="font-bold sm:text-3xl text-2xl">Recipe</h3>
          <p className="mt-6 sm:text-xl text-lg">
            Here's a simple recipe for {recipe.title}:
          </p>
          <p className="mt-6 sm:text-xl text-lg">Ingredients:</p>
          <ul className="mt-2 sm:text-xl text-lg leading-10">
            {recipe.ingredients.map((ing) => (
              <li key={ing} className="indent-1">
                - {ing}
              </li>
            ))}
          </ul>
          <p className="mt-6 sm:text-xl text-lg">Instructions:</p>
          <ol className="mt-2 sm:text-xl text-lg list-decimal list-inside leading-10">
            {recipe.instructions.map((ins) => (
              <li key={ins} className="indent-1">
                {ins}
              </li>
            ))}
          </ol>
          <p className="mt-6 sm:text-xl text-lg">
            Enjoy your delicious {recipe.title}!
          </p>
        </div>
      </article>
    </div>
  );
}
