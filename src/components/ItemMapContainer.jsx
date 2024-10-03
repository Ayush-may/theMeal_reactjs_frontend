import React from "react";
import ImageSkeletonLoader from "./ImageSkeletonLoader";
import { Link } from "react-router-dom";

const ItemMapContainer = ({ meal }) => {
  return (
    <>
      {meal &&
        meal.map((e) => {
          return (
            <>
              <div
                key={e.idMeal}
                className="category_card flex flex-col flex-shrink-0 w-full border-2 border-slate-300 rounded-md p-4"
              >
                <ImageSkeletonLoader src={e.strMealThumb} />
                <h1 className="text-center text-3xl font-bold mt-3">{e.strMeal}</h1>
                <span className=" bg-slate-50 self-end text-slate-400 p-2 my-1 text-xs  rounded-xl ">
                  {e.strTags}
                </span>
                <Link to={"#"} className="h-full flex">
                  <Link 
                    to={`/themeal/meal/${e.idMeal}`} 
                    className="w-full self-end rounded-md md:py-3 mt-2 py-2 bg-slate-800 hover:bg-slate-800/90 text-white flex justify-center" >
                    <button >
                      Ingredient
                    </button>
                  </Link>
                </Link>
              </div>
            </>
          );
        })}
    </>
  );
};

export default ItemMapContainer;
