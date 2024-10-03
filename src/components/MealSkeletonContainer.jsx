import React from "react";

const MealSkeletonContainer = ({ limit }) => {
  const skeleton = (
    <div className="category_card flex flex-col w-full border-2 border-gray-400 rounded-md p-4 animate-pulse">
      {/* <ImageSkeletonLoader src={e.strMealThumb} /> */}
      <div className="h-32 bg-gray-200"></div>
      <h1 className="text-center text-3xl font-bold mt-3"></h1>
      <span className=" bg-gray-200 self-end p-2 my-1 text-xs  h-2 w-full  rounded-xl "></span>
      <div className=" flex">
        <button className="capitalizeself-end w-full self-end rounded-md md:py-3 mt-2 py-2 bg-gray-200  text-gray-200">
          See Ingredient
        </button>
      </div>
    </div>
  );
  const skeletonArr = [];

  for (let i = 0; i < limit; i++) {
    skeletonArr.push(skeleton);
  }

  return <>{skeletonArr}</>;
};

export default MealSkeletonContainer;
