import React from "react";
import { useSelector } from "react-redux";
import EiromCookie from "@/Components/EiromCookie";
import { DefaultHelmet } from 'nl-ui/build/index'
import '@Scss/surfaces.scss';

const Home = () => {

    const cookies = useSelector((state : number) => state);

    return (
        <React.Fragment>
            <div className="text-center welcome-app">
                <DefaultHelmet Title={`${cookies} Cookies`} SubTitle="Eirik er dum" />
                <h1>{cookies}</h1>
                <EiromCookie />
            </div>
        </React.Fragment>
    );
}

export default Home;