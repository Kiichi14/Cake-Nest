import LoginForm from "../../components/login_form/LoginForm";
import IMAGES from "../../Images";
import styled from 'styled-components';
import { theme } from "../../theme/Theme";
import './loginPage.css';

function LoginPage() {

    return (
        <>
            <LoginContainer className="login-container">
                <LoginContainerElement>
                    <Title>Cake<TitleImg src={IMAGES.logo} alt="logo Cake Nest"></TitleImg>Nest</Title>
                    <SubTitle>Bienvenue chez nous !</SubTitle>
                </LoginContainerElement>
                <LoginForm />
            </LoginContainer>
        </>
    )
}

export default LoginPage;

const LoginContainer = styled.div `
    height: 100vh;
    background-image: url(${IMAGES.loginBackground});
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    &:before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.5);
    }
`

const LoginContainerElement = styled.div `
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: ${theme.spacing.xxl};
    z-index: 1;
`

const TitleImg = styled.img `
    width: 70px;
    margin: 0px ${theme.spacing.md};
`

const SubTitle = styled.h2 `
        color: ${theme.colors.white};
        font-family: 'Pacifico', cursive;
        font-size: ${theme.fonts.size.P5};
        border-bottom: 1px solid ${theme.colors.loginLine};
        padding: ${theme.spacing.sm};
        width: 100%;
        text-align: center;
    `

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