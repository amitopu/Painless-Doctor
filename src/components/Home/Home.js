import React from "react";
import Footer from "../Footer/Footer";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-5">
                <div className="mt-5 md:mt-16 order-last md:order-first">
                    <h2 className="text-5xl mb-3 md:mb-5 text-cyan-500">
                        Painless Ophthalmologist
                    </h2>
                    <h3 className="text-3xl mb-5 md:mb-5 text-cyan-600">
                        For Pain Free Treatment
                    </h3>
                    <p className="text-2xl text-teal-900 px-4 md:px-8 lg:px-16 mt-5 md:mt-10">
                        My patient's comfort is the highest priority to me. I
                        follow the best treatment methods out there with latest
                        lechnology and devices. I love to treat my patients with
                        love and care which is my passion.
                    </p>
                </div>
                <div className="mx-auto">
                    <img src="banner.jpg" alt="" />
                </div>
            </div>
            <div className="flex justify-center items-center w-3/4 h-6 mx-auto my-5">
                <div className="h-1 bg-slate-300 w-2/5 rounded"></div>
                <div className="h-3 w-3 rounded-[50%] bg-slate-200 m-2"></div>
                <div className="h-1 bg-slate-300 w-2/5 rounded"></div>
            </div>
            <Services></Services>
            <Footer></Footer>
        </>
    );
};

export default Home;
