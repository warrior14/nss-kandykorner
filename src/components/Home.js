
import React from "react";
import { UserGreeting } from "./UserGreeting.js";
// import "./Home.css";

export const Home = () => (
    <>
        <h2>Kandy Korner</h2>
        <small>Get Lost In The ... Sauce!</small>

        <address className="address">
            <div>Visit Us at Luke's Willy Wonka!</div>
            <div>49 Luke's Kandy Way</div>
        </address>

        <UserGreeting userName={"Luke Madrazo"} />

    </>
);