import React from "react";
import { Link } from "react-router-dom";
import categories from '../../data/categories.json';
import "./Header.scss";
import Dropdown from "./Dropdown/Dropdown";

const Header = () => {

    return (
        <header>
            <nav className="nav-bar">
                <Link className="home-link" to="/"><h3>Начало</h3></Link>
                <Dropdown options={categories} />
            </nav>
        </header>
    );
}

export default Header;