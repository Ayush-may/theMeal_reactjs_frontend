import React, { useEffect, useState, useMemo } from "react";
import api from "../api/apiConfig";
import MealSkeletonContainer from "./MealSkeletonContainer";
import ItemMapContainer from "./ItemMapContainer";

const limitMeal = 5;

const ItemsContainer = () => {
    const [state, setState] = useState(0);
    const [meal, setMeal] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            const data = await api.getMeal(state, limitMeal);
            setMeal(data);
        })();
    }, []);

    useEffect(() => {
        if (state > 0) {
            (async () => {
                setLoading(true);
                const data = await api.getMealPagination(
                    meal.length,
                    state,
                    limitMeal
                );
                const tempMeal = [...meal, ...data];
                setMeal(tempMeal);
                setLoading(false);
            })();
        }
    }, [state]);

    return (
        <div className="lg:px-40 md:px-28 w-full mb-16">
            <div className="w-full h-full lg:p-0 sm:p-3 rounded-md">
                <h1 className="lg:text-5xl text-3xl mb-5 lg:mt-10 mt-4 px-2 capitalize">Try our Meals</h1>
                <div className="items_area grid gap-2 xl:gap-4
                                grid-cols-2 
                                sm:grid-cols-3
                                md:grid-cols-4
                                xl:grid-cols-5
                                justify-center
                                w-full
                                sm:px-0
                                px-3
                            " >
                    {meal.length <= 0 && (
                        <MealSkeletonContainer limit={limitMeal} />)}
                    <ItemMapContainer meal={meal} />
                </div>
                <div className="w-full flex gap-2 justify-center">
                    <button
                        className="border border-slate-800 p-2 my-3"
                        onClick={() => setState((prev) => prev + 1)}
                        disabled={loading}
                    >
                        {loading ? <div className="animate-spin w-5 h-5 bg-white border-2 border-black rounded-sm"></div> : "Load more"}
                    </button>
                    <button className="border border-slate-800 p-2 my-3"
                        onClick={() => {
                            setMeal(meal.splice(0, limitMeal));
                        }}
                    >Show less</button>
                </div>
            </div>
        </div>
    );
};

export default ItemsContainer;
