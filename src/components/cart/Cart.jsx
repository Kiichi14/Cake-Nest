import styled from "styled-components";
import { theme } from "../../theme/Theme";

function Cart() {
    return (
        <>
            <CartStyled>
                <div className="cart-total-container">
                    <p>Total</p>
                    <p>0,00€</p>
                </div>
                <div className="cart-item-container">
                    <p>Votre commande est vide</p>
                </div>
            </CartStyled>
        </>
    )
}

export default Cart;

const CartStyled = styled.div `
    width: 300px;
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
    }
`;