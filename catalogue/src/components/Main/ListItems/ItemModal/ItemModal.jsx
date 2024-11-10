import React from "react";
import './ItemModal.scss';

const ItemModal = ({ product, onHide }) => {
    if (!product) return null;
    const onHideModal = () => onHide();

    const LiItem = ({ c }) => {
        return (<li className="modal-char-item">
            <h4 className="char-name">{c.name}</h4>
            <p className="char-value">{c.value}</p>
        </li>);
    };

    return (
        <div className="modal-container" onClick={onHide}>
            <button type="button" className="close-modal" onClick={onHideModal}>x</button>
            <div className="modal-main">
                <div className="modal-image-container">
                    <div className="modal-image-box">
                        <img className="modal-image" src={product.image} alt={`Изображение на ${product.name}`} />
                    </div>
                </div>
                <div className="modal-main-info">
                    <h2 className="modal-title">Продукт: {product.name}</h2>
                    <h3 className="modal-price">Цена: {product.price} лв.</h3>
                    <p className="modal-description"><strong>Описание:</strong> {product.description}</p>
                </div>
            </div>
            <ul className="modal-characteristics">
                <h3 className="modal-char-title">Характеристики</h3>
                {product.characteristics && product.characteristics.length > 0
                    && product.characteristics.map((c) => (
                        <LiItem c={c} key={`${product.id}-${c.name}`} />
                    ))}
            </ul>
        </div>
    );
}

export default ItemModal;