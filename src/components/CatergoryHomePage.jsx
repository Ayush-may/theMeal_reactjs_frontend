import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CatergorySkeleton from "./CatergorySkeleton";
import ButtonIngredient from "./ButtonIngredient";
import { useSelector, useDispatch } from "react-redux";
import { categoryFetch } from "../../Redux/features/category/catergorySlice";

const CatergoryHomePage = () => {
    const dispatch = useDispatch();
    const category = useSelector(state => state.catergory.catergory || []);

    useEffect(() => {
        // using redux for state management    
        dispatch(categoryFetch());
    }, []);

    return (
        <div className="w-full h-full lg:p-0 sm:p-3 rounded-md">
            <h1 className="lg:text-5xl text-3xl mb-5 px-2">Category</h1>
            <div className="catergory_area flex flex-nowrap overflow-x-scroll gap-2">
                {category.length <= 0 && <CatergorySkeleton />}
                {category &&
                    category.map((e, index) => {
                        return (
                            <>
                                <div
                                    key={index}
                                    className="category_card flex-shrink-0  md:w-60 w-44 border-2 border-slate-100 rounded-md p-4"
                                >
                                    <img className="w-full" src={e.strCategoryThumb} loading="lazy" />
                                    <h1 className="text-center text-3xl font-bold my-3">
                                        {e.strCategory}
                                    </h1>
                                    <Link to={`catergory/${e.strCategory}`}>
                                        <ButtonIngredient />
                                    </Link>
                                </div>
                            </>
                        );
                    })}
            </div>
        </div>
    );
};

export default CatergoryHomePage;
