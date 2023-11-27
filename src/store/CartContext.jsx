import { createContext, useState } from 'react';
import { formatPrice } from '../utils/maths';
import PropTypes from 'prop-types';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
      
        if (isItemInCart) {
        setCartItems(
            cartItems.map((cartItem) =>
            cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem 
            )
        );
        } else {
        setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
    };

    const getCartTotal = () => {
        const total = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
        return formatPrice(total);
    };

    const removeFromCart = (item) => {
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
    
        if (isItemInCart.quantity === 1) {
          setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
        } else {
          setCartItems(
            cartItems.map((cartItem) =>
              cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
            )
          );
        }
      };

    return (
        <CartContext.Provider
          value={{
            cartItems,
            addToCart,
            getCartTotal,
            removeFromCart
          }}
        >
          {children}
        </CartContext.Provider>
      );

}

CartProvider.propTypes = {
    children: PropTypes.node
};