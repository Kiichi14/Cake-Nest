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

const MainDiv = styled.div `
    flex-grow: 1;
    background: ${theme.colors.white};
    -webkit-box-shadow: inset 0px 6px 11px 5px rgba(0,0,0,0.6); 
    box-shadow: inset 0px 6px 11px 5px rgba(0,0,0,0.6);
    border-radius: 0px 0px ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
    overflow-y: scroll;
`

const CardTitle = styled.p `
    color: ${theme.colors.dark};
    font-family: 'Pacifico', cursive;
    font-size: ${theme.fonts.size.P2};
    text-align: start;
`

export { Title, SubTitleH2, TitleImg, SubTitleH3, MainDiv, CardTitle };