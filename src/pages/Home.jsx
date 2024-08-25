import React from 'react';
import Products from '../components/Products';
import Cart from '../components/Cart';
import '../styles/HomeStyle.css';
import { CartProvider } from 'react-use-cart';

function Home() {
  return (
    <div className="container home">
      <CartProvider>
        <div className="row">
          <div className="col-lg-8 col-md-12 mb-4">
            <Products />
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="cart-pr" style={{ minHeight: "400px" }}>
              <Cart />
            </div>
          </div>
        </div>
      </CartProvider>
    </div>
  );
}

export default Home;
