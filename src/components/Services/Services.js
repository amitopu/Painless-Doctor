import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("servicedata.json")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 md:px-10 gap-8 mt-10 mx-auto mb-10">
            {services.map((s) => (
                <Service key={s.id} service={s}></Service>
            ))}
        </div>
    );
};

export default Services;
