import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryItem.scss';

const CategoryItem = ({ name, altText, icon, link }) => {

    return (
        <li className="category-item">
            <Link to={link} className="category-link">
                <article className="category-article">
                    <img
                        className="category-icon"
                        src={icon}
                        alt={altText}
                    />
                    <p>{name}</p>
                </article>
            </Link>
        </li>
    );
}

export default CategoryItem;