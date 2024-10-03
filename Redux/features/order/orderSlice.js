import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosConfig from '../../../src/api/axiosConfig';

const initialState = {
	order: []
}

export const fetchOrder = createAsyncThunk(
	"order/fetchOrder",
	async function (payload) {
		try {
			const response = await axiosConfig.post("api/users/orders", { username: payload });
			return response.data;
		} catch (error) { }
	}
);

export const orderSlice = createSlice({
	name: "order",
	initialState,
	reducers: {
		insertOrderFromCart: function (state, { payload }) {
			state.order = payload;
		},
	},
	extraReducers: function (builder) {
		builder
			// insert orders
			.addCase(fetchOrder.fulfilled, function (state, { payload }) {
				state.order = payload;
				console.log(JSON.parse(JSON.stringify(state)));
			})
	}
});

export const { } = orderSlice.actions;
export default orderSlice.reducer;