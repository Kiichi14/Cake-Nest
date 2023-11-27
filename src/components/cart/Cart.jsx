import styled from "styled-components";
import { theme } from "../../theme/Theme";
import { useContext } from 'react';
import { CartContext } from "../../store/CartContext";
import CartItem from "../cart_item/CartItem";

function Cart() {

    const { cartItems, removeFromCart, getCartTotal } = useContext(CartContext);

    return (
        <>
            <CartStyled>
                <div className="cart-total-container">
                    <p>Total</p>
                    <p>{getCartTotal()}</p>
                </div>
                <div className="cart-item-container">
                    {cartItems.length === 0
                    ?
                        <p>Votre commande est vide</p>
                    :
                        cartItems.map((item) => (
                            <>
                                <CartItem 
                                    image={item.imageSource}
                                    title={item.title}
                                    price={item.price}
                                    quantity={item.quantity}
                                    removeItem={() => removeFromCart(item)}
                                />
                            </>
                        ))
                    }
                </div>
            </CartStyled>
        </>
    )
}

export default Cart;

const CartStyled = styled.div `
    width: 350px;
    display: flex;
    flex-direction: column;
    height: 100%;
    font-family: 'Pacifico';
    font-size: ${theme.fonts.size.P2};
    box-shadow: inset 0px 6px 11px 5px rgba(0,0,0,0.2);
    & .cart-total-container {
        background: ${theme.colors.background_dark};
        color: ${theme.colors.primary_cake};
        display: flex;
        justify-content: space-between;
        padding: ${theme.spacing.md};
    }
    & .cart-item-container {
        height: inherit;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${theme.colors.greyMedium};
        flex-direction: column;
        gap: ${theme.spacing.md};
    }
`;