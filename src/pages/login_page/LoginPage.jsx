import LoginForm from "../../components/login_form/LoginForm";
import IMAGES from "../../Images";
import styled from 'styled-components';
import { theme } from "../../theme/Theme";
import './loginPage.css';

function LoginPage() {

    return (
        <>
            <div className="login-container">
                <div className="login-container-element">
                    <Title>Cake<img className="title-img" src={IMAGES.logo} alt="logo Cake Nest" />Nest</Title>
                    <SubTitle>Bienvenue chez nous !</SubTitle>
                </div>
                <LoginForm />
            </div>
        </>
    )
}

export default LoginPage;

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
`