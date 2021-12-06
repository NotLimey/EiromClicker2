import React from "react";
import Logo from '@Images/LimeyfyLogo.png'
import { useSelector, useDispatch } from "react-redux";
import { Store } from "@/store/types";
import { DECREMENT_COOKIE, INCREMENT_COOKIE } from "@/store/actions";
import EiromCookie from "@/Components/EiromCookie";

const Home = () => {

    const cookies = useSelector((state : number) => state);
    const dispatch = useDispatch();

    console.log(cookies);

    return (
        <React.Fragment>
            <div className="text-center welcome-app">
                <h1>{cookies}</h1>
                <EiromCookie />
            </div>
        </React.Fragment>
    );
}

export default Home;