import React from "react";

const Service = (props) => {
    const { id, name, description, photoUrl, price } = props.service;
    return (
        <div className="h-[460px] border-4 border-teal-700 py-3 rounded-2xl drop-shadow-md">
            <div className="mx-auto">
                <img
                    className=" w-44 h-44 rounded-full border-4 border-cyan-700 mx-auto"
                    src={photoUrl}
                    alt={`service ${id}`}
                />
            </div>
            <h2 className="text-2xl text-cyan-800 my-3">{name}</h2>
            <p className="text-cyan-900 px-5 my-3">{description}</p>
            <h2 className="text-3xl text-cyan-600 my-3">{price}$</h2>
            <button className="text-xl hover:font-bold h-10 w-40 bg-yellow-600 hover:bg-yellow-700 rounded">
                Book Now
            </button>
        </div>
    );
};

export default Service;
