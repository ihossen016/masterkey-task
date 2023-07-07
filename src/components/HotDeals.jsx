import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodaysHotProducts } from "../store/todaysHotProductSlice";

const HotDeals = () => {
    const dispatch = useDispatch();
    const todaysHotProduct = useSelector(state => state.todaysHot);

    useEffect(() => {
        dispatch(fetchTodaysHotProducts());
    }, []);

    return (
        <div>
            <p className="py-3 border-b-2 border-dashed border-[#FFAE5D] text-2xl font-bold">
                Today's hot deals for you
            </p>
            <div className="grid grid-cols-5 gap-4 pt-8">
                {!todaysHotProduct.loading &&
                    todaysHotProduct.products.map(item => (
                        <div className="grid grid-cols-1" key={item._id}>
                            <img src={item.product_img} alt="product" />
                            <h3 className="text-base font-bold">
                                {item.product_name}
                            </h3>
                            <div className="flex justify-between items-center text-base">
                                <p>₹{item.product_price}</p>
                                <p className="text-red-500">
                                    -{item.product_discount}% off
                                </p>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default HotDeals;
