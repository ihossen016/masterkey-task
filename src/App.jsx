import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFurnitureProducts } from "./store/furnitureSlice";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HotDeals from "./components/HotDeals";
import Search from "./components/Search";

function App() {
    const dispatch = useDispatch();
    const furniture = useSelector(state => state.furniture);

    useEffect(() => {
        dispatch(fetchFurnitureProducts());
    }, []);

    return (
        <div className="w-11/12 mx-auto border-red-700">
            <Header />
            <Hero />
            <HotDeals />
            <Search />
        </div>
    );
}

export default App;
