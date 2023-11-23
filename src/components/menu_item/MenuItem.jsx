import PropTypes from 'prop-types';
import { CardContainer } from '../../theme/Styled';
import { formatPrice } from '../../utils/maths';
import { TiDelete } from "react-icons/ti";
import { theme } from '../../theme/Theme';

function MenuItem(props) {

    const { title, price, id, addProduct, imageSource, deleteItem, deleteFunc } = props;

    return (
        <>
            <CardContainer>
                {deleteItem
                ?
                    <div className="admin-delete-button"><TiDelete onClick={() => deleteFunc(id)} color={theme.colors.primary_cake} size={25}/></div>
                :
                    ""
                }
                <img src={imageSource} alt="image de gateau" />
                <p className="item-title">{title}</p>
                <div className="item-action-container">
                    <p>{formatPrice(price)}</p>
                    <button onClick={() => addProduct(id)}>Ajouter</button>
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