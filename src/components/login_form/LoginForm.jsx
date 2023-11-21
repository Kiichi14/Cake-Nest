import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { theme } from "../../theme/Theme";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { SubTitleH3 } from "../../theme/Styled";

function LoginForm() {

    const [firstName, setFirstName] = useState("");

    const navigate = useNavigate();

    const handleChange = (event) => {
        setFirstName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        firstName === "" 
        ? 
        alert("Un prénom est obligatoire") 
        : 
        setFirstName("");
        navigate("/order", {state:{name:firstName}});
    }

    return (
        <>
            <LoginFormContainer>
                <SubTitleH3>Connectez-vous</SubTitleH3>
                <form action="submit" onSubmit={handleSubmit}>
                    <FormLogin>
                        <InputContainer>
                            <FaRegUserCircle className="svg-input"/>
                            <FormInput type="text" name="firstname" placeholder="Entrez votre prénom" value={firstName} onChange={handleChange}></FormInput>
                        </InputContainer>
                        <FormButton type="submit">Mon espace <IoIosArrowForward /></FormButton>
                    </FormLogin>
                </form>
            </LoginFormContainer>
        </>
    )
}

export default LoginForm;

const LoginFormContainer = styled.div `
    width: 500px;
    z-index: 1;
`

const InputContainer = styled.div `
    width: 100%;
    position: relative;
    & .svg-input {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 20px;
    }
`

const FormLogin = styled.div `
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.sm};
`

const FormButton = styled.button `
    background: ${theme.colors.primary_cake};
    color: ${theme.colors.white};
    padding: ${theme.spacing.sm};
    border-radius: ${theme.borderRadius.round};
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${theme.spacing.sm};
`

const FormInput = styled.input `
    border: none;
    padding: ${theme.spacing.sm} ${theme.spacing.xl};
    border-radius: ${theme.borderRadius.round};
    width: 100%;
`
