import React from "react";
import { Link, useParams } from "react-router-dom";
import axiosConfig from "../.././api/axiosConfig";
import { useDispatch } from "react-redux";
import { updateAddCart } from "../../../Redux/features/cart/cartSlice";

const MealById = () => {
	const [meal, setMeal] = React.useState({});
	const [loading, setLoading] = React.useState(true);
	const param = useParams();
	const mealId = param.mealId;
	//Price is hard-coded 
	const price = 99;
	const dispatch = useDispatch();

	React.useEffect(() => {
		(async () => {
			const response = await axiosConfig.get(`/api/meals/getMealById/${mealId}`);
			setMeal(() => response.data.meals[0]);
			setLoading(false);
		})();
	}, [])

	async function addCartApiCall() {
		try {
			const username = localStorage.getItem("themeal_username");
			const payload = {
				typeOfReq: "INCREMENT",
				username,
				mealId,
				price,
				mealName: meal.strMeal,
				mealImage: meal.strMealThumb,
				mealPrice: 99,
			};
			dispatch(updateAddCart(payload));
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<>
			<div className="grid grid-cols-[minmax(300px,1000px)] justify-center h-auto mt-24 p-3 pb-16">
				{
					loading ?
						<h1 className="text-2xl text-center" >Loading...</h1>
						:
						<>
							<div className="flex justify-center items-center gap-5 max-md:flex-col" >
								<div className="border flex-shrink-0 overflow-hidden rounded-lg shadow-lg h-[400px] w-fit">
									<img src={meal.strMealThumb} className="min-w-[400px] h-full object-cover" />
								</div>
								<div className="flex flex-col gap-3" >
									<h1 className="place-self-center font-[500] text-5xl text-center mt-4 bg-yellow-300 p-3 rounded-lg w-fit min-w-[300px] text-wrap" >{meal.strMeal}</h1>
									<div className="flex gap-2" >
										<p className="rounded-xl bg-gray-200 p-1 w-fit text-gray-600 select-none" >{meal.strArea}</p>
										<p className="rounded-xl bg-gray-200 p-1 w-fit text-gray-600 select-none" >{meal.strCategory}</p>
										<Link to={`${meal.strSource}`} className="rounded-lg bg-slate-300 w-full flex items-center" ><button className="text-center w-full" >Source</button></Link>
									</div>
									<button
											className="border rounded-lg py-4 bg-slate-800 text-white"
											onClick={() => addCartApiCall()}
									>Add to cart</button>
									<h3 className="text-5xl font-semibold max-sm:text-center" >price : ${price}</h3>
								</div>
							</div>
							<h1 className="text-lg font-light mt-5" >{meal.strInstructions}</h1>
							<h1 className="text-3xl font-[500] mt-5 mb-3">Ingredient</h1>
							<ol className="list-decimal ms-10">
								<li >{meal.strIngredient1} - {meal.strMeasure1}</li>
								<li>{meal.strIngredient2} - {meal.strMeasure2}</li>
								<li>{meal.strIngredient3} - {meal.strMeasure3}</li>
								<li>{meal.strIngredient4} - {meal.strMeasure4}</li>
								<li>{meal.strIngredient5} - {meal.strMeasure5}</li>
								<li>{meal.strIngredient6} - {meal.strMeasure6}</li>
								<li>{meal.strIngredient7} - {meal.strMeasure7}</li>
								<li>{meal.strIngredient8} - {meal.strMeasure8}</li>
								<li>{meal.strIngredient9} - {meal.strMeasure9}</li>
								<li>{meal.strIngredient10} - {meal.strMeasure10}</li>
							</ol>
						</>
				}
			</div>
		</>
	)
}

export default MealById;