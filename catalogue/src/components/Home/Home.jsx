import React from "react";
import "./Home.scss";
import CategoryItem from "./CategoryItem/CategoryItem";
import categories from "../../data/categories.json";

const Home = () => {

    return (
        <div className="home-container">
            <h1>Добре дошли в нашия продуктов каталог!</h1>
            <h2>Разгледайте нашите категории:</h2>
            <ul className="categories-container">
                {categories.map((category, index) => (
                    <CategoryItem
                        key={index}
                        name={category.name}
                        altText={category.altText}
                        icon={category.icon}
                        link={category.link}
                    >
                    </CategoryItem>
                ))}
            </ul>
        </div>
    );
}

export default Home;