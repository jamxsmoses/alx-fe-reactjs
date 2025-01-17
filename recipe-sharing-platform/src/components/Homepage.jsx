import { Link } from "react-router-dom";
import data from "../daja.json";
import { useState, useEffect } from "react";

function Homepage() {
  const [recipeData, setRecipeData] = useState([]);

  useEffect(() => {
    setRecipeData(data);
  }, []);

  //   console.log(recipeData);

  return (
    <div className="w-3/6 max-full rounded-2xl h-full overflow-y-scroll bg-yellow-500 p-5 box-border">
      <div className="w-full h-full flex gap-y-5 flex-col ">
        {recipeData.map((recipe) => (
          <Link to={`/${recipe.id}`} key={recipe.id}>
            <div className="w-56 bg-black w-full p-5 flex rounded-2xl gap-x-5 box-border cursor-pointer">
              <img className="w-56 h-auto rounded-xl" src={recipe.image} />
              <div className="flex flex-col gap-y-5">
                <div>
                  <span className="text-white text-sm">Meal Name</span>
                  <h2 className="text-yellow-500 font-bold text-xl">
                    {recipe.title}
                  </h2>
                </div>
                <div>
                  <span className="text-white text-sm">Meal Name</span>
                  <p className="text-sm">{recipe.summary}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
