import React, { useEffect, useState } from "react";
import {
    useAuthState,
    useSendPasswordResetEmail,
    useSignInWithEmailAndPassword,
    useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPass, setErrorPass] = useState("");

    // sign in with email and pass hook
    const [signInWithEmailAndPassword, , loading, error] =
        useSignInWithEmailAndPassword(auth);

    //sign in with google hook
    const [signInWithGoogle, , updating, errorGoogle] =
        useSignInWithGoogle(auth);
    const [user] = useAuthState(auth);

    // password reset hook
    const [sendPasswordResetEmail, sending, errorReset] =
        useSendPasswordResetEmail(auth);

    // hooks and states for redirect to intended page
    const navigate = useNavigate();
    let location = useLocation();
    let path = location.state?.from?.pathname || "/";

    // for capturing emaill
    const captureEmail = (event) => {
        let email = event.target.value;
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setEmail(email);
            setErrorEmail("");
        } else {
            setErrorEmail("Please Enter a valid Email");
        }
    };

    // for capturing password
    const capturePassword = (event) => {
        let password = event.target.value;
        if (password.length >= 6) {
            setPassword(password);
            setErrorPass("");
        } else {
            setErrorPass("Password should contain at least 6 characters");
        }
    };

    // handling submit button
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (email && password) {
            console.log(password, email);
            await signInWithEmailAndPassword(email, password);
        }
    };

    // handler for sign in with google
    const handleGoogleSignIn = () => {
        signInWithGoogle();
    };

    // handler for jpassword reset
    const resetPassword = () => {
        if (email) {
            sendPasswordResetEmail(email);
        } else {
            toast("Enter email please!!");
        }
    };

    useEffect(() => {
        if (user) {
            navigate(path, { replace: true });
        }

        if (sending) {
            toast("Sending...");
        }
    });

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
                    onBlur={captureEmail}
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
                    onBlur={capturePassword}
                />
                {/* for showing error in password */}
                <p className="mt-2 text-center text-red-600 ml-2 font-bold">
                    {errorPass}
                </p>
                <input
                    className="block h-10 w-80 mx-auto bg-cyan-500 hover:bg-cyan-700 rounded text-xl text-gray-100 hover:font-bold mt-3"
                    type="submit"
                    name=""
                    id=""
                    value="submit"
                />
            </form>
            {/* showing register link */}
            <p className="mt-2 text-center">
                Don't have an account?
                <span className="text-cyan-600 ml-2 font-bold">
                    <Link to="/register">Register</Link>
                </span>
            </p>
            {/* showing password reset link */}
            <p className="mt-2 text-center">
                Or
                <span>
                    <button
                        onClick={resetPassword}
                        className="text-cyan-600 ml-2 font-bold"
                    >
                        Forgot Password
                    </button>
                </span>
            </p>
            <ToastContainer />
            <div className="flex mx-auto justify-center items-center mt-5">
                <div className="w-2/5 h-[2px] bg-slate-700"></div>
                <div className="w-2 h-2 rounded-full bg-slate-700 mx-1"></div>
                <div className="w-2/5 h-[2px] bg-slate-700"></div>
            </div>
            {/* google sign in button */}
            <button
                onClick={handleGoogleSignIn}
                className="flex justify-center items-center mx-auto mt-5 text-center w-80 h-10 border-[2px] border-cyan-500 rounded"
            >
                <span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="32"
                        height="32"
                        viewBox="0 0 48 48"
                    >
                        <path
                            fill="#fbc02d"
                            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                        ></path>
                        <path
                            fill="#e53935"
                            d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                        ></path>
                        <path
                            fill="#4caf50"
                            d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                        ></path>
                        <path
                            fill="#1565c0"
                            d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                        ></path>
                    </svg>
                </span>
                <span>SignIn With Google</span>
            </button>

            {/* Showing error messages */}
            <p className="mt-2 text-center text-red-600 ml-2 font-bold">
                {error?.message}
            </p>
            <p className="mt-2 text-center text-red-600 ml-2 font-bold">
                {errorGoogle?.message}
            </p>
            <p className="mt-2 text-center text-red-600 ml-2 font-bold">
                {errorReset?.message}
            </p>
            <p className="mt-2 text-center text-cyan-600 ml-2 font-bold">
                {loading || updating ? "Loading..." : ""}
            </p>
        </div>
    );
};

export default Login;
