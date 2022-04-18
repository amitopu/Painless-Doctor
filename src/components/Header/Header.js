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
        <div className="sticky">
            <nav className="flex flex-wrap justify-between bg-sky-400 p-4 h-16">
                <div className="text-white font-semibold text-3xl italic sm:w-1/2 md:w-auto">
                    Painless Doctor
                </div>

                <div
                    onClick={manageToggle}
                    className="flex justify-end sm:w-1/2 md:w-auto md:hidden bg-sky-400"
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
                <div
                    className={`${
                        toggle
                            ? "fixed top-20 right-4 p-5 rounded"
                            : "fixed top-5 right-[-200px]"
                    } md:right-auto md:top-auto md:relative md:flex bg-sky-400 w-40 md:w-auto md:p-0 transition-all duration-500 ease-in-out `}
                >
                    <div className="mx-auto md:mr-5 font-bold text-white hover:font-extrabold md:hover:border-b-2 md:hover:border-white w-40 md:w-auto">
                        <Link to="/">Home</Link>
                    </div>
                    <div className="mx-auto md:mr-5 font-bold text-white hover:font-extrabold md:hover:border-b-2 md:hover:border-white w-40 md:w-auto">
                        <Link to="/checkout">Checkout</Link>
                    </div>
                    <div className="mx-auto md:mr-5 font-bold text-white hover:font-extrabold md:hover:border-b-2 md:hover:border-white w-40 md:w-auto">
                        <Link to="/blog">Blog</Link>
                    </div>
                    <div className="mx-auto md:mr-5 font-bold text-white hover:font-extrabold md:hover:border-b-2 md:hover:border-white w-40 md:w-auto">
                        <Link to="/about">About</Link>
                    </div>
                    <div className="mx-auto md:mr-5 font-bold text-white hover:font-extrabold md:hover:border-b-2 md:hover:border-white w-40 md:w-auto">
                        <Link to="/login">Login</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
