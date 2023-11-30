import LoginForm from "../../components/login_form/LoginForm";
import RegisterForm from "../../components/register_form/RegisterForm";
import IMAGES from "../../Images";
import styled from 'styled-components';
import { theme } from "../../theme/Theme";
import { Title, SubTitleH2, TitleImg } from "../../theme/Styled";
import { useState } from "react";

function LoginPage() {

    const [isSignUpActive, setIsSignUpActive] = useState(false);

    const handleSignUpActive = () => {
        setIsSignUpActive(!isSignUpActive);
    }

    return (
        <>
            <LoginContainer>
                <LoginContainerElement>
                    <Title>Cake<TitleImg src={IMAGES.logo} alt="logo Cake Nest"></TitleImg>Nest</Title>
                    <SubTitleH2>Bienvenue chez nous !</SubTitleH2>
                </LoginContainerElement>
                {isSignUpActive ? <RegisterForm /> : <LoginForm />}
                <div className="sign-in-up-switch">
                    <button onClick={handleSignUpActive}>{isSignUpActive ? "Deja enregistré" : "s'inscire"}</button>
                </div>
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
    & .sign-in-up-switch {
        padding: ${theme.spacing.xl} 0px;
        z-index: 1;
    }
    & .sign-in-up-switch button {
        color: ${theme.colors.white};
        font-family: 'Pacifico';
        background: none;
        border: none;
        font-size: ${theme.fonts.size.P3};
        position: relative;
        cursor: pointer;

        &:before {
            content: "";
            width: 100%;
            height: 2px;
            background: ${theme.colors.white};
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            transform-origin: left;
            transform: scaleX(0);
            transition: all linear 0.2s;
        }
        &:hover::before {
            transform: scaleX(1);
        }
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