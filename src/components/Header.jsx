import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

const Header = () => {
    return (
        <header>
            <div className="py-4 flex justify-between items-center">
                <h1 className="text-3xl">
                    <span className="font-bold">shop</span>cart
                </h1>
                <h3 className="flex justify-between items-center gap-2 text-xl">
                    <span>
                        <FaUserCircle />
                    </span>
                    Sign In
                </h3>
            </div>

            <div className="py-4 border-t-2 flex justify-between items-center">
                <button className="flex justify-between items-center gap-2 bg-[#FFAE5D] rounded-2xl p-3 text-base">
                    <CiLocationOn /> Dhaka, 1212
                </button>
                <div className="w-2/5 flex justify-between items-center gap-2 border-2 p-2 rounded-2xl">
                    <input className="w-4/5" type="text" placeholder="search" />
                    <CiSearch />
                </div>
            </div>

            <nav>
                <ul className="w-full flex justify-between items-center gap-4 text-base overflow-x-auto">
                    <li>Fresh</li>
                    <li>Today’s Deals</li>
                    <li>Mobiles</li>
                    <li>Gift Cards</li>
                    <li>Women Clothing</li>
                    <li>Men Clothing</li>
                    <li>Kids Clothing</li>
                    <li>Health</li>
                    <li>Pet corner</li>
                    <li>Books</li>
                    <li>Beauty</li>
                    <li>Kitchen</li>
                    <li>Bed Room</li>
                    <li>Sport</li>
                    <li>Bags</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
