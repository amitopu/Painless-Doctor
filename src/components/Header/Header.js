import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const manageToggle = () => {
        if (toggle) {
            setToggle(false);
        } else {
            setToggle(true);
        }
    };
    return (
        <div>
            <nav className="flex flex-wrap justify-between bg-sky-400 p-4">
                <div className="text-white font-semibold text-3xl italic">
                    Painless Doctor
                </div>

                <div
                    onClick={manageToggle}
                    className="flex justify-end w-40 lg:hidden bg-sky-400"
                >
                    {toggle ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            viewBox="0 0 20 20"
                            fill="white"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            viewBox="0 0 20 20"
                            fill="white"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    )}
                </div>
                <div className="lg:flex">
                    <div className="mr-5 font-bold text-white hover:font-extrabold lg:hover:border-b-2 lg:hover:border-white w-40 lg:w-auto">
                        <Link to="/">Home</Link>
                    </div>
                    <div className="mr-5 font-bold text-white hover:font-extrabold lg:hover:border-b-2 lg:hover:border-white w-40 lg:w-auto">
                        <Link to="/checkout">Checkout</Link>
                    </div>
                    <div className="mr-5 font-bold text-white hover:font-extrabold lg:hover:border-b-2 lg:hover:border-white w-40 lg:w-auto">
                        <Link to="/blog">Blog</Link>
                    </div>
                    <div className="mr-5 font-bold text-white hover:font-extrabold lg:hover:border-b-2 lg:hover:border-white w-40 lg:w-auto">
                        <Link to="/about">About</Link>
                    </div>
                    <div className="mr-5 font-bold text-white hover:font-extrabold lg:hover:border-b-2 lg:hover:border-white w-40 lg:w-auto">
                        <Link to="/login">Login</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
