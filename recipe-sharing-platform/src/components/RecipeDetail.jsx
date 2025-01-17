import { Link, useParams } from "react-router-dom";
import data from "../daja.json";

function RecipeDetail() {
  const { id } = useParams();

  return (
    <div className="text-white bg-white w-3/6 h-full rounded-2xl">
      <div className="w-full h-full flex flex-col gap-y-5 align-middle">
        <div className="w-full overflow-hidden rounded-xl flex justify-center items-center">
          <img src={data[id].image} alt="" />
        </div>
        <div className="flex flex-col items-center gap-y-7">
          <h1 className="text-yellow-500 text-center font-semibold text-3xl">
            {data[id].title}
          </h1>
          <p className="text-black text-center font-semibold w-5/6 text-xl ">
            {data[id].summary}
          </p>
          <Link to="/">
            <button className="bg-yellow-500 w-56 py-4 px-10 rounded-2xl cursor-pointer">
              Back to Recipes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
