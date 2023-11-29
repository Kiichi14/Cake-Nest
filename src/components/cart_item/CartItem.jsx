import styled, { keyframes } from "styled-components";
import { theme } from "../../theme/Theme";
import PropTypes from 'prop-types';
import { formatPrice } from '../../utils/maths';
import { MdDeleteForever } from "react-icons/md";
import IMAGES from "../../Images";
import { adminContext } from "../../store/Context";
import { updateContext } from "../../store/UpdateContext";
import { useContext } from "react";

function CartItem(props) {

    const { image, title, price, quantity, removeItem, id, isInStock } = props;
    const { isUpdate, isSelect }= useContext(updateContext);
    const [selectUpdate] = isUpdate;
    const [itemSelect, setItemSelect] = isSelect;
    const [admin] = useContext(adminContext);

    const handleSelect = (id) => {
        setItemSelect(id);
    }

    return(
        <> 
            <CartItemStyled active={selectUpdate && admin} onClick={() => handleSelect(id)} cardSelect={selectUpdate && admin && itemSelect === id}>
                <img src={image !== "" ? image : IMAGES.menuItem} alt="image de gateau" />
                <div className="cart-item-description">
                    <p className="cart-item-title">{title}</p>
                    {isInStock 
                    ?
                        <p className="cart-item-price">{formatPrice(price)}</p>
                    :
                        <p className="cart-item-price">Non disponible</p>
                    }
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
    removeItem: PropTypes.func,
    id: PropTypes.number,
    isInStock: PropTypes.string,
};

// STYLED COMPONENTS

const bounce = keyframes`
    0% {
        transform: scale(1);
        animation-timing-function: ease-in-out;
    }

    14% {
        transform: scale(1.05);
        animation-timing-function: ease-in-out;
    }

    28% {
        transform: scale(1);
        animation-timing-function: ease-in-out;
    }

    42% {
        transform: scale(1.05);
        animation-timing-function: ease-in-out;
    }

    70% {
        transform: scale(1);
        animation-timing-function: ease-in-out;
    }

    100% {
        transform: scale(1);
        animation-timing-function: ease-in-out;
    }
`

const CartItemStyled = styled.div `
    background: ${props => props.cardSelect ? theme.colors.primary_cake : theme.colors.white};
    box-shadow: 0px 6px 11px 5px rgba(0,0,0,0.2);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 90%;
    padding: ${theme.spacing.sm};
    border-radius: ${theme.borderRadius.round};
    position: relative;
    overflow: hidden;
    cursor: ${props => props.active ? "pointer" : "default"};
    transition: all linear 0.3s;
    animation: ${bounce} 1.3s ease 0s 1 normal both running;
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
        color: ${props => props.cardSelect ? theme.colors.white : theme.colors.background_dark};
        font-size: ${theme.fonts.size.P2};
        width: 130px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    & .cart-item-price {
        color: ${props => props.cardSelect ? theme.colors.white : theme.colors.primary_cake};
        font-family: 'Open Sans';
        font-size: ${theme.fonts.size.P1};
    }
    & .cart-item-quantity {
        display: flex;
        align-items: center;
        justify-content: end;
        color: ${props => props.cardSelect ? theme.colors.white : theme.colors.primary_cake};
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
    &:hover {
        box-shadow: ${props => props.active ? "0 0 12px 0 rgb(122 180 184 / 100%)" : ""};
        transform: ${props => props.active ? "scale(1.05)" : ""};
    }
    &:hover .delete-item-button {
        top: 0%;
    }
`