import React from "react";
import { useNavigation } from "react-router-dom";

const ButtonIngredient = ({ mealId }) => {
    const navigate = useNavigation();

    return (
        <button className="w-full self-end rounded-md md:py-3 mt-2 py-2 bg-slate-800 hover:bg-slate-800/90 text-white">
            Ingredient
        </button>
    );
};

export default ButtonIngredient;
