import React from "react";

const CheckService = ({ service }) => {
    return (
        <>
            <h1 className="mt-5 text-2xl md:w-3/4 mx-auto text-sky-800">
                Congratulations!! You have taken a great decision to take eye
                care services
            </h1>
            <h1 className="mt-5 text-2xl md:w-3/4 mx-auto text-sky-800">
                It seems that you are willing to take {service} service. <br />
                Please fill up the below form to proceede...
            </h1>

            <div className="w-[400px] mx-auto text-left mt-10 border-4 border-cyan-500 p-5">
                <form>
                    <label
                        className="block text-xl font-bold text-cyan-500 mb-2 ml-4"
                        htmlFor="name"
                    >
                        Full Name
                    </label>
                    <input
                        className="block h-10 w-80 mx-auto border-2 border-cyan-500 rounded p-3 text-lg text-cyan-700"
                        type="text"
                        name=""
                        id="name"
                        required
                        placeholder="full name"
                    />

                    <label
                        className="block text-xl font-bold text-cyan-500 mb-2 ml-4"
                        htmlFor="address"
                    >
                        Address
                    </label>
                    <input
                        className="block h-10 w-80 mx-auto border-2 border-cyan-500 rounded p-3 text-lg text-cyan-700"
                        type="text"
                        name=""
                        id="address"
                        required
                        placeholder="Address"
                    />

                    <label
                        className="block text-xl font-bold text-cyan-500 mb-2 ml-4"
                        htmlFor="mobile"
                    >
                        Phone Number
                    </label>
                    <input
                        className="block h-10 w-80 mx-auto border-2 border-cyan-500 rounded p-3 text-lg text-cyan-700"
                        type="text"
                        name=""
                        id="mobile"
                        required
                        placeholder="Phone Number"
                    />

                    <input
                        className="block h-10 w-80 mx-auto bg-cyan-500 hover:bg-cyan-700 rounded text-xl text-gray-100 hover:font-bold mt-3"
                        type="submit"
                        name=""
                        id=""
                        value="submit"
                    />
                </form>
            </div>
        </>
    );
};

export default CheckService;
