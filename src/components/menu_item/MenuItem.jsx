import PropTypes from 'prop-types';
import { CardContainer } from '../../theme/Styled';
import IMAGES from '../../Images';
import { formatPrice } from '../../utils/maths';

function MenuItem(props) {

    const { title, price, id, addProduct } = props;

    return (
        <>
            <CardContainer>
                <img src={IMAGES.menuItem} alt="image de gateau" />
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
    addProduct: PropTypes.func
};