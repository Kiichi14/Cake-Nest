import styled from 'styled-components';
import { theme } from './Theme';

const Title = styled.h1 `
    color: ${theme.colors.primary_cake};
    font-family: 'Open Sans', sans-serif;
    text-transform: uppercase;
    font-size: ${theme.fonts.size.P5};
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
`

const TitleImg = styled.img `
    width: 70px;
    margin: 0px ${theme.spacing.md};
`


const SubTitleH2 = styled.h2 `
        color: ${theme.colors.white};
        font-family: 'Pacifico', cursive;
        font-size: ${theme.fonts.size.P5};
        border-bottom: 1px solid ${theme.colors.loginLine};
        padding: ${theme.spacing.sm};
        width: 100%;
        text-align: center;
`

const SubTitleH3 = styled.h3 `
    color: ${theme.colors.white};
    font-family: 'Pacifico', cursive;
    font-size: ${theme.fonts.size.P4};
    padding: ${theme.spacing.sm};
    text-align: center;
    margin-bottom: ${theme.spacing.md};
`

export { Title, SubTitleH2, TitleImg, SubTitleH3 };