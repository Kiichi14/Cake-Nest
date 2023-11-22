import styled from 'styled-components';
import { theme } from '../../theme/Theme';
import PropTypes from 'prop-types';
import { CardTitle } from '../../theme/Styled';
import IMAGES from '../../Images';
import { formatPrice } from '../../utils/maths';

function MenuItem(props) {

    const { title, price, id } = props;

    const handleSubmit = (id) => {
        console.log(id);
    } 

    return (
        <>
            <CardContainer>
                <ItemImg src={IMAGES.menuItem}></ItemImg>
                <CardTitle>{title}</CardTitle>
                <ActionContainer>
                    <Price>{formatPrice(price)}</Price>
                    <Button onClick={() => handleSubmit(id)}>Ajouter</Button>
                </ActionContainer>
            </CardContainer>
        </>
    )
}

export default MenuItem;

// PROPS VALIDATION

MenuItem.propTypes = {
    title: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.number
};

// STYLED COMPONENTS

const CardContainer = styled.div `
    background: ${theme.colors.white};
    padding: ${theme.spacing.md};
    width: 20%;
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
    border-radius: ${theme.borderRadius.extraRound};
`

const ItemImg = styled.img `
    width: 100%;
    margin-bottom: ${theme.spacing.md};
`

const ActionContainer = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: ${theme.spacing.md};
`

const Price = styled.p `
    color: ${theme.colors.primary_cake};
    font-family: 'Open Sans';
`

const Button = styled.button `
    background: ${theme.colors.primary_cake};
    color: ${theme.colors.white};
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    border-radius: ${theme.borderRadius.round};
    border: none;
    cursor: pointer;
`