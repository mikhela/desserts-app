import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import '../styles/ConfirmStyle.css';

function Confirmed({ items, total, startNewOrder }) {
  return (
    <>
      <div className="overlay"></div>
      <div className='confirm__container'>
        <div className="inner__container">
          <FontAwesomeIcon icon={faCheck} id='check' />
          <h6><strong>Order Confirmed</strong></h6>
          <p id='pr'>We hope you enjoy your food!</p>

          <div className="content">
            {items.map((item, index) => (
              <div key={index} className='confirmed-item d-flex justify-content-between align-items-center'>
                  <div className="content--left">
                  <strong>{item.title}</strong>
                      <div className="d-flex mb-4">
                        <span className='m-1'>{item.quantity}x</span>
                        <span className='m-1'>@${item.price.toFixed(2)}</span>
                      </div>
                  </div>
                  <div className="content--right">
                  <span className='m-1'>${(item.quantity * item.price).toFixed(2)}</span>
                  </div>

              </div>
            ))}
            <div className="d-flex justify-content-between align-items-center">
            <h5>Order Total:</h5>
            <h3><strong>${total.toFixed(2)}</strong></h3>

            </div>
          </div>

          <button className='startOv mt-4' onClick={startNewOrder}>Start New Order</button>
        </div>
      </div>
    </>
  );
}

export default Confirmed;
