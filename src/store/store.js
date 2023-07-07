import { configureStore } from "@reduxjs/toolkit";
import todaysHotProductReducer from "./todaysHotProductSlice";
import hotProductReducer from "./hotProductSlice";
import furnitureReducer from "./furnitureSlice";
import searchReducer from "./searchSlice";

export const store = configureStore({
    reducer: {
        todaysHot: todaysHotProductReducer,
        hot: hotProductReducer,
        furniture: furnitureReducer,
        search: searchReducer,
    },
});
