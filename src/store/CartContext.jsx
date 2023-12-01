/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useState } from 'react';
import { formatPrice } from '../utils/maths';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { userContext } from './UserContext';

export const CartContext = createContext();


export const CartProvider = ({ children }) => {

    const {user} = useContext(userContext);

    const [cartItems, setCartItems] = useState(localStorage.getItem(`cartItems_${user}`) ? JSON.parse(localStorage.getItem(`cartItems_${user}`)) : []);

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
        setCartItems([...cartItems, { id: item.id , quantity: 1 }]);
        }
    };

    const getCartTotal = (itemContext) => {
        const total = cartItems.reduce((acc, item) => {
            const foundItem = itemContext.find(contextItem => contextItem.id === item.id);
    
            if (foundItem && !isNaN(foundItem.price) && foundItem.isAvailable) {
                const itemPrice = foundItem.price;
                return acc + itemPrice * item.quantity;
            } else {
                console.error(`Prix non trouvé pour l'item avec l'ID ${item.id}`);
                return acc;
            }
        }, 0);
    
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

      useEffect(() => {
        localStorage.setItem(`cartItems_${user}`, JSON.stringify(cartItems));
      }, [cartItems]);

      useEffect(() => {
        const cartSave = localStorage.getItem(`cartItems_${user}`);
        if (cartSave) {
        setCartItems(JSON.parse(cartSave));
        } else {
          setCartItems([]);
          localStorage.setItem(`cartItems_${user}`, JSON.stringify(cartItems));
        }
      }, [user]);

    return (
        <CartContext.Provider
          value={{
            cartItems,
            setCartItems,
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