import styled from 'styled-components';
import { theme } from '../../theme/Theme';
import IMAGES from '../../Images';
import { useLocation, useNavigate } from 'react-router-dom';

function MainIcon() {

    const location = useLocation();
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate("/order", {state: {name: location.state.name}})
    }

    return (
        <NavIcon>
            <Title onClick={handleRedirect}>CAKE<TitleImg src={IMAGES.logo}></TitleImg>NEST</Title>
        </NavIcon>
    )
}

export default MainIcon;

const NavIcon = styled.div `
    display: flex;
    gap: ${theme.spacing.sm};
    align-items: center;
`

const Title = styled.p `
    color: ${theme.colors.primary_cake};
    font-size: ${theme.fonts.size.P4};
    font-family: 'Open sans';
    display: flex;
    align-items: center;
    gap: ${theme.spacing.xs};
    cursor: pointer;
`

const TitleImg = styled.img `
    width: 50px;
`