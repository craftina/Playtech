import React from "react";
import "./Item.scss";

const Item = ({ product, onClick }) => {
    
    return (
        <li className="list-card-container" onClick={onClick}>
            <article className="item-card">
                <div className="card-image-container">
                <img className="card-image" src={product.image} alt="изображение" />
                </div>
                <h3 className="card-title">{product.name}</h3>
                <p className="card-price">Цена: {product.price.toFixed(2)} лв.</p>
            </article>
        </li>
    );
}

export default Item;