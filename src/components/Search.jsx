import React, { useEffect } from "react";
import { fetchSearchProducts } from "../store/searchSlice";
import { useDispatch, useSelector } from "react-redux";

const Search = () => {
    const dispatch = useDispatch();
    const search = useSelector(state => state.search);

    useEffect(() => {
        dispatch(fetchSearchProducts());
    }, []);

    return (
        <div className="pt-12">
            <p className="py-3 border-b-2 border-dashed border-[#FFAE5D] text-2xl font-bold">
                Your searched items
            </p>
            <div className="grid grid-cols-6 gap-4 pt-8">
                {!search.loading &&
                    search.products.map(item => (
                        <div className="grid grid-cols-1" key={item._id}>
                            <img src={item.product_img} alt="product" />
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Search;
