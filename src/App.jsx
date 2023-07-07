import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodaysHotProducts } from "./store/todaysHotProductSlice";
import { fetchHotProducts } from "./store/hotProductSlice";
import { fetchFurnitureProducts } from "./store/furnitureSlice";
import { fetchSearchProducts } from "./store/searchSlice";

function App() {
    const dispatch = useDispatch();
    const todaysHotProduct = useSelector(state => state.todaysHot);
    const hotProduct = useSelector(state => state.hot);
    const furniture = useSelector(state => state.furniture);
    const search = useSelector(state => state.search);

    useEffect(() => {
        dispatch(fetchTodaysHotProducts());
        dispatch(fetchHotProducts());
        dispatch(fetchFurnitureProducts());
        dispatch(fetchSearchProducts());
    }, []);

    return (
        <>
            <h1>test</h1>
        </>
    );
}

export default App;
