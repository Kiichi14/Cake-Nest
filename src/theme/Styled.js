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
    -webkit-box-shadow: inset 0px 6px 11px 5px rgba(0,0,0,0.2); 
    box-shadow: inset 0px 6px 11px 5px rgba(0,0,0,0.2);
    border-radius: 0px 0px ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
    overflow-y: scroll;
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    &::-webkit-scrollbar { /* for Chrome*/
        display: none;
    }
    position: relative;
`

const MenuItemContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 60px;
    padding: 50px 50px 150px;
    margin: 0 auto;
    justify-content: center;
`

const CardContainer = styled.div `
    background: ${theme.colors.white};
    padding: ${theme.spacing.md};
    width: 230px;
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
    border-radius: ${theme.borderRadius.extraRound};
    & .item-title {
        color: ${theme.colors.dark};
        font-family: 'Pacifico', cursive;
        font-size: ${theme.fonts.size.P2};
        text-align: start;
    }
    & img {
        width: 100%;
        margin-bottom: ${theme.spacing.md};
    }
    & .item-action-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: ${theme.spacing.md};
    }
    & .item-action-container p {
        color: ${theme.colors.primary_cake};
        font-family: 'Open Sans';
    }
    & button {
        background: ${theme.colors.primary_cake};
        color: ${theme.colors.white};
        padding: ${theme.spacing.sm} ${theme.spacing.md};
        border-radius: ${theme.borderRadius.round};
        border: 1px solid ${theme.colors.primary_cake};
        transition: all linear 0.3s;
        cursor: pointer;
    }
    & button:hover {
        background: ${theme.colors.white};
        color: ${theme.colors.primary_cake};
    }
`

const LayoutContainer = styled.div `
    background: ${theme.colors.primary_cake};
    padding: ${theme.spacing.md} ${theme.spacing.xl};
    height: 100vh;
    display: flex;
    flex-direction: column;
`

export { 
    Title, 
    SubTitleH2, 
    TitleImg, 
    SubTitleH3, 
    MainDiv,
    MenuItemContainer,
    CardContainer,
    LayoutContainer
 };