import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import axiosConfig from "../../.././src/api/axiosConfig";


// this is state
const initialState = {
	catergory: []
};

// createAsyncThunk is used for fetching data and then store it into state
export const categoryFetch = createAsyncThunk(
	'catergory/catergoryData',
	async () => {
		try {
			const response = await axiosConfig.get("/api/meals/category");
			// this return is acccess by extraReducers
			return response.data;
		} catch (error) {
			console.log("This is errror in categorySlice", error);
		}
	}
);

// created slice
export const catergorySlice = createSlice({
	name: "catergory",
	initialState,
	reducers: {
		// here define reducers
		initialApiCall: (state, action) => {
			state.catergory.push(action.payload);
		},
	},
	// use this for createAsyncThunk
	extraReducers: (builder) => {
		builder.addCase(categoryFetch.fulfilled, (state, action) => {
			state.catergory = action.payload;
		})
	}
});

// here export the reducers one by one
export const {
	insertCatergory,
} = catergorySlice.actions;

// now export this reducers which is for Store.js
export default catergorySlice.reducer;
