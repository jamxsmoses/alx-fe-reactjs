import { useState } from "react";
import { useParams } from "react-router-dom";
import data from "./daja.json";
import { useEffect } from "react";

function Recipe() {
  const [recipe, setRecipe] = useState();

  useEffect(() => {
    setRecipe(data);
  }, []);

  const { id } = useParams();

  const recipeInfo = recipe.filter((rec) => rec.id === Number(id));

  console.log(recipeInfo);

  console.log();
  return (
    <div className="text-white bg-white w-3/6 h-full rounded-2xl">
      <div className="w-full h-full flex flex-col gap-y-5 align-middle">
        <div className="w-full overflow-hidden rounded-xl">
          <img src={recipeInfo[0].image} alt="" />
        </div>
        <div className="flex flex-col gap-y-5">
          <h1 className="text-yellow-500 text-center font-semibold text-3xl">
            {recipeInfo[0].title}
          </h1>
          <p className="text-black text-center font-semibold text-xl px-10 py-5">
            {recipe[0].summary}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
