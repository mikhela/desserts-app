import React, { useState, useEffect } from 'react';
import '../styles/CardStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useCart } from 'react-use-cart';
function ProductsCard({ data }) {
    const { addItem, items, updateItemQuantity, removeItem } = useCart();
    const [isInCart, setIsInCart] = useState(false);
    const [quantity, setQuantity] = useState(0);

    const handleAddToCart = () => {
        addItem(data);
        setIsInCart(true);
        setQuantity(1);
    };

    const handleIncreaseQuantity = () => {
        updateItemQuantity(data.id, quantity + 1);
        setQuantity(quantity + 1);
    };

    const handleDecreaseQuantity = () => {
        if (quantity > 1) {
            updateItemQuantity(data.id, quantity - 1);
            setQuantity(quantity - 1);
        } else {
            removeItem(data.id); 
            setIsInCart(false);
            setQuantity(0);
        }
    };

    useEffect(() => {
        const cartItem = items.find(item => item.id === data.id);
        if (cartItem) {
            setIsInCart(true);
            setQuantity(cartItem.quantity);
        } else {
            setIsInCart(false);
            setQuantity(0);
        }
    }, [items, data.id]);

    return (
        <div className="card">
            <div className="innerCard--container">
                <img src={data.image} alt={data.title} />
                <button onClick={isInCart ? undefined : handleAddToCart} className="cart-button">
                    {isInCart ? (
                        <>
                            <button onClick={handleDecreaseQuantity} className="quantity-button">
                                <FontAwesomeIcon icon={faMinus} />
                            </button>
                            <span>{quantity}</span>
                            <button onClick={handleIncreaseQuantity} className="quantity-button">
                                <FontAwesomeIcon icon={faPlus} />
                            </button>
                        </>
                    ) : (
                        <>
                            <FontAwesomeIcon icon={faCartPlus} style={{ color: "rgb(236, 160, 18)" }} /> Add to Cart
                        </>
                    )}
                </button>

                <div className="information">
                    <p className="title">{data.title}</p>
                    <p className="description">{data.description}</p>
                    <p className="price">${data.price.toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
}

export default ProductsCard;
