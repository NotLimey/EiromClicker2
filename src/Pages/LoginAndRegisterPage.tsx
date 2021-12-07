import Container from "@/Components/Container";
import React from "react";
import ButtonGroup from "@/Components/ButtonGroup";
import { Link } from "react-router-dom";

const LoginAndRegisterPage = () => {

    return (
        <React.Fragment>
            <div className="Login-table">
                <Container>
                    <h1>Sign In</h1>
                    <ButtonGroup>
                        <Link to="/auth/login">Login</Link>
                        <a href="https://vg.no" target="_blank" rel="noreferrer">register</a>
                    </ButtonGroup>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default LoginAndRegisterPage;