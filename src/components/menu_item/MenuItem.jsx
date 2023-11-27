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

function MenuItem(props) {

    const { title, price, id, addProduct, imageSource, deleteItem } = props;
    const { isUpdate, isSelect }= useContext(updateContext);
    const { cartItems, setCartItems } = useContext(CartContext);
    const [selectUpdate] = isUpdate;
    const [itemSelect, setItemSelect] = isSelect;
    const [admin] = useContext(adminContext);
    const [cake, setCake] = useContext(itemContext)

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
        setCake(newCakeList);
        setCartItems(newCartList);
    }

    return (
        <>
            <CardContainer active={selectUpdate && admin} onClick={admin ? () => handleSelect(id) : null} cardSelect={selectUpdate && admin && itemSelect === id}>
                {deleteItem
                ?
                    <div className="admin-delete-button"><TiDelete onClick={handleDelete} color={theme.colors.primary_cake} size={25}/></div>
                :
                    ""
                }
                <img src={imageSource} alt="image de gateau" />
                <p className="item-title">{title}</p>
                <div className="item-action-container">
                    <p>{formatPrice(price)}</p>
                    <button onClick={handleAdd}>Ajouter</button>
                </div>
            </CardContainer>
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
    deleteFunc: PropTypes.func
};