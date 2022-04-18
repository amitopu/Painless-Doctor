import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPass, setErrorPass] = useState("");
    const [error, setError] = useState("");

    // for capturing emaill
    const captureEmail = (event) => {
        setEmail(event.target.value);
    };

    // for capturing password
    const capturePassword = (event) => {
        setPassword(event.target.value);
    };

    // handling submit button
    const handleSubmit = (event) => {
        event.preventDefault();
        // for email validation
        let localErrorEmail = false;
        let localErrorPass = false;
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            localErrorEmail = true;
            setErrorEmail("Please Enter a valid Email");
        } else {
            setErrorEmail("");
        }

        // for password validation
        if (password.length < 6) {
            localErrorPass = true;
            setErrorPass("Password should contain at least 6 characters");
        } else {
            setErrorPass("");
        }

        if (!localErrorEmail && !localErrorPass) {
            console.log(password, email);
        }
    };

    return (
        <div className="w-[400px] mx-auto text-left mt-10 border-4 border-cyan-500 p-5">
            <form onSubmit={handleSubmit}>
                <label
                    className="block text-xl font-bold text-cyan-500 mb-2 ml-4"
                    htmlFor="email"
                >
                    Email
                </label>

                <input
                    className="block h-10 w-80 mx-auto border-2 border-cyan-500 rounded p-3 text-lg text-cyan-700"
                    type="email"
                    name=""
                    id="email"
                    required
                    placeholder="email"
                />
                {/* for showing error in email */}
                <p className="mt-2 text-center text-red-600 ml-2 font-bold">
                    {errorEmail}
                </p>

                <label
                    className="block text-xl font-bold text-cyan-500 mb-2 ml-4"
                    htmlFor="password"
                >
                    Password
                </label>

                <input
                    className="block h-10 w-80 mx-auto border-2 border-cyan-500 rounded p-3 text-lg text-cyan-700"
                    type="password"
                    name=""
                    id="password"
                    required
                    placeholder="password"
                />
                {/* for showing error in password */}
                <p className="mt-2 text-center text-red-600 ml-2 font-bold">
                    {errorPass}
                </p>
                <label
                    className="block text-xl font-bold text-cyan-500 mb-2 ml-4"
                    htmlFor="password"
                >
                    Re-type Password
                </label>

                <input
                    className="block h-10 w-80 mx-auto border-2 border-cyan-500 rounded p-3 text-lg text-cyan-700"
                    type="password"
                    name=""
                    id="password"
                    required
                    placeholder="password"
                />

                <input
                    className="block h-10 w-80 mx-auto bg-cyan-500 hover:bg-cyan-700 rounded text-xl text-gray-100 hover:font-bold mt-3"
                    type="submit"
                    name=""
                    id=""
                    value="submit"
                />
            </form>
            <p className="mt-2 text-center">
                Already have an account?
                <span className="text-cyan-600 ml-2 font-bold">
                    <Link to="/login">Login</Link>
                </span>
            </p>
        </div>
    );
};

export default Register;
