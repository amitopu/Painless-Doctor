import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className=" h-46 w-full bg-sky-900 py-3">
            <Link
                className="block text-xl hover:font-bold text-teal-600 w-40 mx-auto"
                to="/"
            >
                Home
            </Link>
            <Link
                className="block text-xl hover:font-bold text-teal-600 w-40 mx-auto"
                to="/checkout"
            >
                Checkout
            </Link>
            <Link
                className="block text-xl hover:font-bold text-teal-600 w-40 mx-auto"
                to="/blog"
            >
                Blog
            </Link>
            <Link
                className="block text-xl hover:font-bold text-teal-600 w-40 mx-auto"
                to="/about"
            >
                About
            </Link>

            <div className="mt-3 text-sm text-teal-600">
                All Right Reserved ©
                <span className="italic">Painless Doctor</span>
            </div>
        </div>
    );
};

export default Footer;
