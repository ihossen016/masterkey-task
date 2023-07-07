import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    products: [],
    error: "",
};

export const fetchSearchProducts = createAsyncThunk(
    "product/fetchSearchProducts",
    () => {
        return axios
            .get(
                "https://api.hiring.masterkey.tech/api/v1/products?product_type=Your searched items"
            )
            .then(res => res.data.products[0].productData);
    }
);

const searchProductSlice = createSlice({
    name: "searchProducts",
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchSearchProducts.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(fetchSearchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
                state.error = "";
            })
            .addCase(fetchSearchProducts.rejected, (state, action) => {
                state.loading = false;
                state.products = [];
                state.error = action.error.message;
            });
    },
});

export default searchProductSlice.reducer;
