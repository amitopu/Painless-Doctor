import React from "react";
import { useParams } from "react-router-dom";
import CheckService from "../CheckService/CheckService";

const Checkout = () => {
    const { name } = useParams();

    return (
        <div>
            {name ? (
                <CheckService services={name}></CheckService>
            ) : (
                <h1 className="mt-5 text-2xl md:w-3/4 mx-auto text-sky-800">
                    You have not choosen any services. Please choose one from
                    homepage.
                </h1>
            )}
        </div>
    );
};

export default Checkout;
