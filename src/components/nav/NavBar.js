import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";



//The <Link/> component comes from the React Router package that was installed. It has an attribute named to.
//It will render a hyperlink in the DOM and when clicked, it will change the URL in the browser to the value of the to attribute.

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">NSS Kandy Korner</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/locations">Locations</Link>
            </li>

            <li className="navbar__item">
                <Link className="navbar__link" to="/products">Products</Link>
            </li>
            {/* <li className="navbar__item">
                <Link className="navbar__link" to="/customers">Customers</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/employees">Employees</Link>
            </li> */}
        </ul>
    )
}