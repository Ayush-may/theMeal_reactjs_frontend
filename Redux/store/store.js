import { configureStore } from '@reduxjs/toolkit';
import catergoryReducer from "../features/category/catergorySlice";
import cartReducer from "../features/cart/cartSlice";
import orderReducer from "../features/order/orderSlice";

export const store = configureStore({
	reducer: {
		catergory: catergoryReducer,
		cart: cartReducer,
		order: orderReducer,
	},
});