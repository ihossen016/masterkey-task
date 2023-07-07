import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    products: [],
    error: "",
};

export const fetchTodaysHotProducts = createAsyncThunk(
    "product/fetchTodaysHotProducts",
    () => {
        return axios
            .get(
                "https://api.hiring.masterkey.tech/api/v1/products?product_type=Today’s hot deals"
            )
            .then(res => res.data.products[0].productData);
    }
);

const todaysHotProductSlice = createSlice({
    name: "todaysHotProducts",
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchTodaysHotProducts.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(fetchTodaysHotProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
                state.error = "";
            })
            .addCase(fetchTodaysHotProducts.rejected, (state, action) => {
                state.loading = false;
                state.products = [];
                state.error = action.error.message;
            });
    },
});

export default todaysHotProductSlice.reducer;
