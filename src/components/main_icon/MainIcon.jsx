import styled from 'styled-components';
import { theme } from '../../theme/Theme';
import IMAGES from '../../Images';

function MainIcon() {
    return (
        <NavIcon>
            <Title>CAKE<TitleImg src={IMAGES.logo}></TitleImg>NEST</Title>
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
`

const TitleImg = styled.img `
    width: 50px;
`