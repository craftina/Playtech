import React from "react";
import Header from "../Header/Header";
import ListItem from "./ListItems/ListItems";
import "./Main.scss";

const Main = () => {

    return (
        <div className="main-container">
            <Header />
            <ListItem />
        </div>
    );
}

export default Main;