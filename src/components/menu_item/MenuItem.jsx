import PropTypes from 'prop-types';
import { CardContainer } from '../../theme/Styled';
import { formatPrice } from '../../utils/maths';
import { TiDelete } from "react-icons/ti";
import { theme } from '../../theme/Theme';
import { updateContext } from '../../store/UpdateContext';
import { adminContext } from '../../store/Context';
import { useContext } from 'react';
import { itemContext } from '../../store/ItemContext';
import { CartContext } from '../../store/CartContext';
import IMAGES from '../../Images';
import styled from 'styled-components';
import { deleteProduct } from '../../api/product';
import { auth } from '../../api/firebase-config';


function MenuItem(props) {

    const { title, price, id, addProduct, imageSource, deleteItem, isAvailable } = props;
    const { isUpdate, isSelect }= useContext(updateContext);
    const { cartItems, setCartItems } = useContext(CartContext);
    const [selectUpdate] = isUpdate;
    const [itemSelect, setItemSelect] = isSelect;
    const [admin] = useContext(adminContext);
    const [cake, setCake] = useContext(itemContext);

    const handleSelect = (id) => {
        setItemSelect(id);
    }

    const handleAdd = (event) => {
        event.stopPropagation();
        addProduct();
    } 

    const handleDelete = (event) => {
        event.stopPropagation();
        const cakeCopy = [...cake];
        const cartCopy = [...cartItems];
        const newCartList = cartCopy.filter(item => item.id !== id);
        const newCakeList = cakeCopy.filter(item => item.id !== id);
        deleteProduct(auth.currentUser.uid, id);
        setCake(newCakeList);
        setCartItems(newCartList);
    }

    return (
        <>
            <SectionCardContainer>
                {!isAvailable 
                ?
                    <NoStockStyled>
                        <p>EPUISÉ</p>
                    </NoStockStyled>
                :
                    ""
                }
                <CardContainer instock={isAvailable} active={selectUpdate && admin} onClick={admin && selectUpdate ? () => handleSelect(id) : null} cardSelect={selectUpdate && admin && itemSelect === id}>
                    {deleteItem
                    ?
                        <div className="admin-delete-button"><TiDelete onClick={handleDelete} color={theme.colors.primary_cake} size={25}/></div>
                    :
                        ""
                    }
                    <img src={imageSource !== "" ? imageSource : IMAGES.menuItem} alt="image de gateau" />
                    <p className="item-title">{title}</p>
                    <div className="item-action-container">
                        <p>{formatPrice(price)}</p>
                        <button onClick={handleAdd}>Ajouter</button>
                    </div>
                </CardContainer>
            </SectionCardContainer>
        </>
    )
}

export default MenuItem;

// PROPS VALIDATION

MenuItem.propTypes = {
    title: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.number,
    addProduct: PropTypes.func,
    imageSource: PropTypes.string,
    deleteItem: PropTypes.bool,
    deleteFunc: PropTypes.func,
    isAvailable: PropTypes.bool
};

const SectionCardContainer = styled.div `
    position: relative;
`

const NoStockStyled = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.red};
    font-family: 'Open Sans';
    font-size: ${theme.fonts.size.P4};
    transform: rotate(310deg);
    z-index: 1;
`