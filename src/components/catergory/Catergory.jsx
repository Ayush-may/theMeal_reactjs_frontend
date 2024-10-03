import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axiosConfig from "../.././api/axiosConfig";

const Catergory = () => {
	const [meals, setMeals] = React.useState([]);
	const [showImage, setShowImage] = React.useState(false);
	const param = useParams();
	const id = param.id;

	React.useEffect(() => {
		(async () => {
			try {
				const response = await axiosConfig.get(`api/category/${id}`);
				setMeals(() => response.data.meals);
			} catch (error) {
				console.log('error', error);
			}
		})();

	}, []);

	return (
		<>
			<div className="lg:px-40 md:px-28 w-full h-auto mt-24 p-3">
				<div className="p-5 rounded-md" >
					<h1 className="text-6xl mb-5 font-semi-bold capitalize" >{id}</h1>

					{/*here add the meals*/}
					<div className="grid lg:grid-cols-2 grid-cols-1 gap-2 justify-center pb-10" >
						{meals.length == 0 && <h1>Loading...</h1>}
						{
							meals.map(meal => {
								return (
									<Link
										to={`/themeal/catergory/${id}/${meal.idMeal}`}
										className="shadow-md rounded-lg border-2 border-slate-200 min-h-[150px] p-5 flex items-center gap-5 hover:translate-y-[-10px] transition-all cursor-pointer" >
										
										<div className={`sm:h-[200px] w-[300px] h-[100px] rounded-md bg-gray-200 animate-pulse ${showImage ? 'hidden' : 'inline-block'}`} ></div> :
										<img src={meal.strMealThumb} onLoad={() => setShowImage(true)} className={`sm:h-[200px] h-[100px] rounded-md shadow-md ${showImage ? "inline-block" : "hidden"}`} />
										
										<p className="font-bold sm:text-3xl text-sxl" >{meal.strMeal}</p>
									</Link>
								);
							})
						}
					</div>
				</div>
			</div>
		</>
	);
}

export default Catergory;
