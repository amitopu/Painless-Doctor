import React from "react";

const Blog = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold text-teal-700 my-5">
                Question-1: What is the difference between authorization and
                authentication?
            </h1>
            <p className="text-xl text-teal-700 my-5 md:w-3/4 mx-auto italic">
                <span className="font-bold">Answer:</span> Authentication is the
                process of knowing about someone on the other hand authorization
                is the providing/checking permission to access certain serices.
                In authentication process user details are collected and a
                profile is generated and in authorization process right to
                access some information is checked. If the profile has proper
                right then the profile is allowed t access certain information.
                Authentication is done before authorization.
            </p>
            <h1 className="text-2xl font-bold text-teal-700 my-5">
                Why are you using firebase? What other options do you have to
                implement authentication?
            </h1>
            <p className="text-xl text-teal-700 my-5 md:w-3/4 mx-auto italic">
                <span className="font-bold">Answer:</span> Firebase is a google
                service that I use to authenticate users using email and
                password, various social media login, google login, github login
                etc. I also use to verify email, update profile, reset password
                etc. There are also other platforms out there to implement
                authentication like AuthO, STYTCH, Ory, Supabase, Okta,
                Keycloak, Authress, Amazon Cognito, OneLogin etc.
            </p>
            <h1 className="text-2xl font-bold text-teal-700 my-5">
                What other services does firebase provide other than
                authentication?
            </h1>
            <p className="text-xl text-teal-700 my-5 md:w-3/4 mx-auto italic">
                <span className="font-bold">Answer:</span> Firebase is a app
                development platform on google cloud platform which is a
                backend-as-a-service BaaS platform. Other than auhtentication
                service it provides services like realtime database, file
                storage, hosting static files, ready made API for app
                development, cloud messeging, A/B testing etc.
            </p>
        </div>
    );
};

export default Blog;
