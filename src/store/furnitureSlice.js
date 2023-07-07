import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    products: [],
    error: "",
};

export const fetchFurnitureProducts = createAsyncThunk(
    "product/fetchFurnitureProducts",
    () => {
        return axios
            .get(
                "https://api.hiring.masterkey.tech/api/v1/products?product_type=Deals on furniture"
            )
            .then(res => res.data.products[0].productData);
    }
);

const furnitureProductSlice = createSlice({
    name: "furnitureProducts",
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchFurnitureProducts.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(fetchFurnitureProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
                state.error = "";
            })
            .addCase(fetchFurnitureProducts.rejected, (state, action) => {
                state.loading = false;
                state.products = [];
                state.error = action.error.message;
            });
    },
});

export default furnitureProductSlice.reducer;
