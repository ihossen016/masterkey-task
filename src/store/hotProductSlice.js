import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    products: [],
    error: "",
};

export const fetchHotProducts = createAsyncThunk(
    "product/fetchHotProducts",
    () => {
        return axios
            .get(
                "https://api.hiring.masterkey.tech/api/v1/products?product_type=hot deals for you"
            )
            .then(res => res.data.products[0].productData);
    }
);

const hotProductSlice = createSlice({
    name: "hotProducts",
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchHotProducts.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(fetchHotProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
                state.error = "";
            })
            .addCase(fetchHotProducts.rejected, (state, action) => {
                state.loading = false;
                state.products = [];
                state.error = action.error.message;
            });
    },
});

export default hotProductSlice.reducer;
