import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrder } from "../../../Redux/features/order/orderSlice.js";
import CartTableImageDisplayer from "../cart/CartTableImageDisplayer.jsx";

const Order = () => {
	const dispatch = useDispatch();
	const orderFromRedux = useSelector(state => state.order.order);
	const [orders, setOrders] = useState([]);

	// fetching orders from MongoDB
	useEffect(() => {
		dispatch(fetchOrder(localStorage.getItem("themeal_username")));
	}, []);

	// updating local order state
	useEffect(() => {
		setOrders(orderFromRedux);
	}, [orderFromRedux])

	return (
		<>
			<div className="w-full h-auto mt-28">
				<div>
					{orders && orders.length > 0 ?
						<>
							<main className="max-w-[720px] w-full mx-auto">
								<table className="table w-full table-fixed">
									<thead className=" text-gray-400 text-xl capitalize">
										<tr>
											<th className="text-start max-w-[150px] font-[400]">product details</th>
											<th className="text-center font-[400]"></th>
											<th className="text-center font-[400]">Quantity</th>
											<th className="text-center font-[400]">price</th>
											<th className="text-center font-[400]">Status</th>
										</tr>
									</thead>
									<tbody>
										{orders.map(order =>
											<tr key={order.mealId}>
												<td className="py-3" colSpan={2}>
													<CartTableImageDisplayer mealImage={order.mealImage}
														mealName={order.mealName}
														mealId={order.mealId} />
												</td>
												<td className="text-center" >{order.quantity}</td>
												<td className="text-center" >{order.price}</td>
												<td className="text-center" ><p className="bg-green-300">Dispatched</p></td>
											</tr>)}
									</tbody>
								</table>
							</main>
						</> :
						<p className="text-center text-2xl uppercase">
							No Orders
						</p>
					}
				</div>
			</div >
		</>
	);
};

export default Order;
