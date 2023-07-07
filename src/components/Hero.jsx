import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHotProducts } from "../store/hotProductSlice";

const Hero = () => {
    const dispatch = useDispatch();
    const hotProduct = useSelector(state => state.hot);

    useEffect(() => {
        dispatch(fetchHotProducts());
    }, []);

    return (
        <div className="py-16 flex justify-between items-center">
            <h2 className="text-8xl w-2/5">
                We picked some{" "}
                <span className="text-[#FFAE5D] font-bold">cool things</span>{" "}
                for you!
            </h2>
            <div className="w-2/5">
                <p className="py-3 border-b-2 border-dashed border-[#FFAE5D] text-2xl font-bold">
                    hot deals for you
                </p>
                <div className="grid grid-cols-3 gap-4 pt-3">
                    {!hotProduct.loading &&
                        hotProduct.products.map(item => (
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
        </div>
    );
};

export default Hero;
