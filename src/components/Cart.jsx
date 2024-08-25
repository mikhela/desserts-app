import React from 'react';
import '../styles/ProductscartStyle.css';
import { useCart } from 'react-use-cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import emptyIlustration from '../images/illustration-empty-cart.svg';

function Cart() {
  const {
    isEmpty,
    items,
    totalItems,
    cartTotal,
    removeItem,
  } = useCart();

  return (
    <div className="cart__container">
      <div className="row justify-content-center">
        <div className="col-12 p-3">
          <h3 style={{ color: "rgb(230, 135, 20)" }}>
            Your Cart ({totalItems})
          </h3>
          {isEmpty ? (
            <>
              <div className='d-flex align-items-center justify-content-center'>
                <img src={emptyIlustration} alt="Empty Cart" />
              </div>
              <div className='d-flex align-items-center justify-content-center'>
                <p style={{ color: '#caafa7' }}>Your added items will appear here</p>
              </div>
            </>
          ) : (
            <div className="cart-items">
              {items.map((item, index) => (
                <div key={index} className='cart-item d-flex justify-content-between align-items-center' style={{ borderBottom: "1px solid rgba(238, 238, 238, 0.656)", padding: '10px' }}>
                  <div className="content--left  align-items-center">
                    <strong>{item.title}</strong>
                    <div className="d-flex">
                    <span className='m-1' style={{ fontWeight: "400", color: "rgb(236, 160, 18)" }}>{item.quantity}x</span>
                    <span className='m-1' style={{ color: "gray" }}>@<span>${item.price.toFixed(2)}</span></span>
                    <span className='m-1' style={{ fontWeight: "400" }}>${(item.quantity * item.price).toFixed(2)}</span>
                    </div>
                  </div>
                  <div className="content--right">
                    <button
                      className="remove-button"
                      onClick={() => removeItem(item.id)}
                      style={{ border: "1px solid black", borderRadius: "50%", fontSize: "8px", padding: "3px 6px", background: "transparent" }}
                    >
                      <FontAwesomeIcon icon={faX} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
          {!isEmpty && (
            <div className="cart--mands">
              <div className="d-flex justify-content-between p-2">
                <p>Order Total</p>
                <h5><strong>${cartTotal.toFixed(2)}</strong></h5>
              </div>
              <div className="delivery m-auto d-flex justify-content-center align-items-center" style={{ backgroundColor: "rgba(252,248,245,255)", width: "300px", maxWidth: "100%", paddingTop: "10px", borderRadius: "12px" }}>
                <p>This is a <strong>carbon-neutral</strong> delivery</p>
              </div>
              <div className="contBtn d-flex justify-content-center mt-3" style={{ width: "100%" }}>
                <button type="button" className="btn btn-confirm">Confirm Order</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
