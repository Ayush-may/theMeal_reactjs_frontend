import React, { useEffect, useState, useRef } from "react";
import api, { apiBase } from "../api/apiConfig";

const selectedCatergory = "";

const BigImage = () => {
 const [value, setValue] = useState("");
 const ref = useRef(null);
 const [suggestion, setSuggestion] = useState([]);

 useEffect(() => {
  let timer;
  if (value == "") {
   setSuggestion([]);
   return;
  }
  timer = setTimeout(async () => {
   const meal = await api.getAutoSuggetion(3, value);
   setSuggestion(meal);
  }, 500);
  return () => clearTimeout(timer);
 }, [value]);

 const autoSuggest = () => {
  if (suggestion) {
   return (
    <div className="absolute w-full h-auto bg-slate-100 overflow-hidden rounded-lg shadow-md mt-3 top-full">
     <ul className="flex flex-col">
      {suggestion.map((e) => (
       <li
        className="cursor-pointer p-3 bg-white hover:bg-slate-100"
        onClick={() => {
         setValue(e);
        }}
       >
        {e}
       </li>
      ))}
     </ul>
    </div>
   );
  }
 };

 return (
  <div className="sm:w-full h-40 sm:h-40 md:h-60 lg:h-80 lg:px-40 relative">
   <div className="search_by_name sm:w-fit w-[258px] rounded-lg border-2 shadow-md border-black ">
    <form
     onSubmit={(e) => e.preventDefault()}
     className="w-full flex flex-nowrap relative"
    >
     <input
      ref={ref}
      type="text"
      value={value}
      style={{ outline: "none" }}
      placeholder="Search meal by name"
      className="rounded-s p-3 border-none md:w-80 lg:w-96 w-40"
      onChange={(e) => {
       setValue(e.target.value);
      }}
      onBlur={() =>
       setTimeout(() => {
        setSuggestion([]);
       }, 500)
      }
     />
     <button
      type="submit"
      className="rounded-e py-3 px-6 bg-slate-800 text-white"
     >
      search
     </button>
    </form>
    {autoSuggest()}
   </div>
   <div className="scroll bg-black rounded-b-lg overflow-hidden shadow-md md:mt-10 mt-20">
    <img
     className="opacity-90"
     src="https://img.freepik.com/free-photo/fresh-gourmet-meal-beef-taco-salad-plate-generated-by-ai_188544-13382.jpg?w=996&t=st=1714835869~exp=1714836469~hmac=907015c8df32617e12dc84c0b96373985ac3673c3b858b732affd33093ac606b"
     alt=""
    />
   </div>
  </div>
 );
};

export default BigImage;
