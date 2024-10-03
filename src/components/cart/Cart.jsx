import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import IncrementDecrementButton from "./IncrementDecrementButton";
import CartTableImageDisplayer from "./CartTableImageDisplayer";
import { clearCartFromDB } from "../../../Redux/features/cart/cartSlice.js";

const Cart = () => {
	// const tempCarts = useSelector(state => state.cart.cart);
	const tempCarts = useSelector(state => state.cart.cart);
	const [carts, setCarts] = useState([]);
	const [totalPrice, setPrice] = useState(0);
	const dispatch = useDispatch();

	useEffect(() => {
		setCarts(tempCarts);
	}, [tempCarts]);

	useEffect(() => {
		if (carts) {
			let total = 0;
			carts.forEach(cart => {
				total += Number.parseInt(cart.price) * Number.parseInt(cart.quantity);
			})
			setPrice(total);
		}
	}, [carts])

	function handlePayButton() {
		dispatch(clearCartFromDB(localStorage.getItem("themeal_username")));
		alert("Ordered!");
	}

	return (
		<>
			<div className="w-full h-auto mt-24 p-3 pb-16">
				{/* No items here */}
				{
					carts.length == 0 && <h1 className="h-auto mt-18 text-center text-2xl">No items in cart <span
						className="font-bold bg-yellow-300 p-3">Shop Now !</span></h1>
				}

				{/* Items here */}
				{
					carts.length > 0 &&
					<>
						<main className="w-full grid grid-cols-[minmax(300px,900px)] justify-center">
							<section className="grid grid-cols-[1fr,300px] max-md:grid-cols-1">
								<table className="table w-full table-fixed order-1 max-md:order-2">
									<thead className=" text-gray-400 text-xl capitalize">
										<tr>
											<th className="text-start max-w-[150px] font-[400]">product details</th>
											<th className="text-center font-[400]"></th>
											<th className="text-center font-[400]">Quantity</th>
											<th className="text-center font-[400]">price</th>
											<th className="text-center font-[400]">Total</th>
										</tr>
									</thead>
									<tbody className="h-full">
										{
											carts.map(cart =>
												<tr className="h-full" key={cart.mealId}>
													<td className="py-3" colSpan={2}>
														<CartTableImageDisplayer mealImage={cart.mealImage}
															mealName={cart.mealName}
															mealId={cart.mealId} />
													</td>
													<td className="text-center flex justify-center items-center h-full">
														<IncrementDecrementButton quantity={cart.quantity}
															mealId={cart.mealId} />
													</td>
													<td className="text-center">{cart.price}</td>
													<td className="text-center">${cart.price * 1}</td>
												</tr>
											)}
									</tbody>
								</table>
								<section
									className="ms-auto w-full max-md:w-full max-md:mb-10 p-5 rounded-md shadow-sm h-fit px-4 border bg-gray-50 order-2 max-md:order-1">
									<h1 className="text-center capitalize text-600 text-2xl">Order Summary</h1>
									<span className="block w-full h-[1px] bg-gray-500 my-5"></span>
									<h5 className="flex w-full">
										Total
										<span className="ms-auto">${totalPrice}</span>
									</h5>
									<button
										onClick={handlePayButton}
										className="p-2 bg-slate-600 rounded-md w-full shadow-sm mt-5 font-bold text-white">Pay
										${totalPrice}</button>
								</section>
							</section>
						</main>
					</>
				}
			</div>
		</>
	);
};

export default Cart;