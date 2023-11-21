import LoginForm from "../../components/login_form/LoginForm";
import IMAGES from "../../Images";
import styled from 'styled-components';
import { theme } from "../../theme/Theme";
import { Title, SubTitleH2, TitleImg } from "../../theme/Styled";

function LoginPage() {

    return (
        <>
            <LoginContainer className="login-container">
                <LoginContainerElement>
                    <Title>Cake<TitleImg src={IMAGES.logo} alt="logo Cake Nest"></TitleImg>Nest</Title>
                    <SubTitleH2>Bienvenue chez nous !</SubTitleH2>
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