import React from "react";

const About = () => {
    return (
        <div>
            <h2 className="text-2xl italic text-sky-900 my-5">
                Thank you for your curiosity about me!!
            </h2>
            <h1 className="text-3xl text-sky-900 my-5">
                I am Dr. Robinson Crosue
            </h1>
            <div>
                <img
                    className="mx-auto h-96 w-96 my-5 border-4 border-sky-500"
                    src="doctor.jpg"
                    alt=""
                />
            </div>
            <p className="text-sky-900 text-xl italic w-[400px] mx-auto">
                My patient's comfort is the highest priority to me. I follow the
                best treatment methods out there with latest lechnology and
                devices. I love to treat my patients with love and care which is
                my passion. My only goal is to be in my patients' heart. Come
                and visit my chamber- you may not be cured completely but will
                never feel hopeless. I will be with you in your journey to heal.
            </p>
        </div>
    );
};

export default About;
