import React, { useEffect, useState } from "react";
import categories from "../../../data/categories.json";
import data from "../../../data/product-data.json";
import { useParams } from "react-router-dom";
import Item from "./Item/Item";
import "./ListItems.scss";
import ItemModal from "./ItemModal/ItemModal";

const ListItem = () => {
    const { categoryName } = useParams();
    const [category, setCategory] = useState({});
    const [dataProducts, setDataProducts] = useState([]);
    const [loadedProducts, setLoadedProducts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [currentProduct, setCurrentProduct] = useState(null);
    const loadNumber = 4;

    useEffect(() => {
        const foundCategory = categories.find((c) =>
            c.link === `/category/${categoryName}`);
        if (foundCategory) {
            setCategory(foundCategory);
        }
    }, [categoryName]);

    useEffect(() => {
        const foundProducts = data.find((d) => d.category === category.name)?.products || [];
        setDataProducts(foundProducts);
    }, [category])

    useEffect(() => {
        if (dataProducts.length > 0) {
            setLoadedProducts(dataProducts.slice(0, loadNumber));
        }
    }, [dataProducts])

    const handleLoadProducts = () => {
        const currentLength = loadedProducts.length;
        const moreProducts = dataProducts.slice(currentLength, currentLength + loadNumber);
        setLoadedProducts((prev) => [...prev, ...moreProducts]);
    }

    const onHideModal = () => {
        setCurrentProduct(null);
        setShowModal(false);
    }

    const handleOnClickItem = (product) => {
        setCurrentProduct(product)
        setShowModal(true);
    }

    return (
        <div className="list-items-container">
            <div className="list-header">
                <h2>{category.name}</h2>
            </div>
            <ul className="unordered-list-items">
                {dataProducts.length > 0 && loadedProducts.length > 0
                    ? loadedProducts.map(product => <Item key={product.id} product={product} onClick={() => handleOnClickItem(product)} />)
                    : <div>Няма налични продукти в тази категория</div>
                }
            </ul>
            {loadedProducts.length < dataProducts.length
                && (<button type="button" className="load-button" onClick={handleLoadProducts}>Зареди още продукти ...</button>)
            }
            <ItemModal
                product={currentProduct}
                onHide={onHideModal}
            />
        </div>
    );
}

export default ListItem;