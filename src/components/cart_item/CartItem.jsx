import styled from "styled-components";
import { theme } from "../../theme/Theme";
import PropTypes from 'prop-types';
import { formatPrice } from '../../utils/maths';
import { MdDeleteForever } from "react-icons/md";
import IMAGES from "../../Images";

function CartItem(props) {

    const { image, title, price, quantity, removeItem } = props;

    return(
        <> 
            <CartItemStyled>
                <img src={image !== "" ? image : IMAGES.menuItem} alt="image de gateau" />
                <div className="cart-item-description">
                    <p className="cart-item-title">{title}</p>
                    <p className="cart-item-price">{formatPrice(price)}</p>
                </div>
                 <p className="cart-item-quantity">x {quantity}</p>
                 <button className="delete-item-button" onClick={removeItem}><MdDeleteForever size={25} color="white"/></button>
            </CartItemStyled> 
        </>
    )
}

export default CartItem;

// PROPS VALIDATION

CartItem.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
    removeItem: PropTypes.func
};

// STYLED COMPONENTS

const CartItemStyled = styled.div `
    background: ${theme.colors.background_white};
    box-shadow: 0px 6px 11px 5px rgba(0,0,0,0.2);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 90%;
    padding: ${theme.spacing.sm};
    border-radius: ${theme.borderRadius.round};
    position: relative;
    overflow: hidden;
    & img, .cart-item-description, .cart-item-quantity {
        width: 33%;
        display: flex;
    }
    & .cart-item-description {
        display: flex;
        flex-direction: column;
        gap: ${theme.spacing.sm};
    }
    & .cart-item-title {
        color: ${theme.colors.background_dark};
        font-size: ${theme.fonts.size.P2};
    }
    & .cart-item-price {
        color: ${theme.colors.primary_cake};
        font-family: 'Open Sans';
        font-size: ${theme.fonts.size.P1};
    }
    & .cart-item-quantity {
        display: flex;
        align-items: center;
        justify-content: end;
        color: ${theme.colors.primary_cake};
        font-family: 'Open Sans';
        font-size: ${theme.fonts.size.P1};
    }
    & .delete-item-button {
        position: absolute;
        width: 25%;
        height: 100%;
        background: ${theme.colors.red};
        right: 0px;
        border: none;
        border-radius: 0px ${theme.borderRadius.round} ${theme.borderRadius.round} 0px;
        cursor: pointer;
        top: 100%;
        transition: all linear 0.2s;
    }
    &:hover .delete-item-button {
        top: 0%;
    }
`