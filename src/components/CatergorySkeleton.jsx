import React from "react";

const CatergorySkeleton = () => {
 // this is the element or say catergory skeleton
 const element = (
  <div className="category_card flex-shrink-0  md:w-60 w-44 border-2 border-gray-400 animate-pulse rounded-md p-4">
   {/* <img className="w-full" src={e.strCategoryThumb} loading="lazy" /> */}
   <div className="w-full h-32 bg-gray-200"></div>
   <h1 className="h-6 text-center text-sm bg-gray-200 text-gray-200 font-bold my-3"></h1>
   <div>
    <button className="capitalize w-full rounded-md md:py-3 py-2 bg-gray-200 text-gray-200">
     See Ingredient
    </button>
   </div>
  </div>
 );

 const arr = [];
 // pushing all the elements in this array
 for (let i = 0; i < 6; i++) {
  arr.push(element);
 }
 // printing the element
 return <>{arr}</>;
};

export default CatergorySkeleton;
