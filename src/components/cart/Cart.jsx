import styled from "styled-components";
import { theme } from "../../theme/Theme";
import { useContext } from 'react';
import { CartContext } from "../../store/CartContext";
import CartItem from "../cart_item/CartItem";
import { itemContext } from "../../store/ItemContext";

function Cart() {

    const { cartItems, removeFromCart, getCartTotal } = useContext(CartContext);
    const [cakes] = useContext(itemContext);

    return (
        <>
            <CartStyled>
                <div className="cart-total-container">
                    <p>Total</p>
                    <p>{getCartTotal(cakes)}</p>
                </div>
                <div className={'cart-item-container ' + (cartItems.length > 0 ? 'active' : ' ')}>
                    {cartItems.length === 0
                    ?
                        <p>Votre commande est vide</p>
                    :
                        cartItems.map((item) => {
                            const cake = cakes.find(c => c.id === item.id)
                            if (cake) {
                                return (
                                    <CartItem 
                                        key={item.id}
                                        image={cake.imageSource}
                                        title={cake.title}
                                        price={cake.price}
                                        quantity={item.quantity}
                                        removeItem={() => removeFromCart(item)}
                                        id={item.id}
                                    />
                                );
                            }
                        })
                    }
                </div>
            </CartStyled>
        </>
    )
}

export default Cart;

const CartStyled = styled.div `
    /* width: 350px; */
    display: flex;
    flex-direction: column;
    height: 100%;
    font-family: 'Pacifico';
    font-size: ${theme.fonts.size.P2};
    box-shadow: inset 0px 6px 11px 5px rgba(0,0,0,0.2);
    overflow-y: scroll;
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    &::-webkit-scrollbar { /* for Chrome*/
        display: none;
    }
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
        flex-direction: column-reverse;
        gap: ${theme.spacing.md};
    }
    & .cart-item-container.active {
        justify-content: start;
        padding: ${theme.spacing.md} 0px;
    }
`;