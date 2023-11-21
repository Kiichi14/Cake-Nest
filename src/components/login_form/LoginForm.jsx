import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { theme } from "../../theme/Theme";

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
            <div className="login-form-container">
                <SubTitle>Connectez-vous</SubTitle>
                <form action="submit" onSubmit={handleSubmit}>
                    <FormLogin>
                        <FormInput type="text" name="firstname" placeholder="Entrez votre prénom" value={firstName} onChange={handleChange}></FormInput>
                        <FormButton type="submit">Mon espace</FormButton>
                    </FormLogin>
                </form>
            </div>
        </>
    )
}

export default LoginForm;

const SubTitle = styled.h3 `
    color: ${theme.colors.white};
    font-family: 'Pacifico', cursive;
    font-size: ${theme.fonts.size.P4};
    padding: ${theme.spacing.sm};
    text-align: center;
    margin-bottom: ${theme.spacing.md};
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
`

const FormInput = styled.input `
    border: none;
    padding: ${theme.spacing.sm} ${theme.spacing.xl};
    border-radius: ${theme.borderRadius.round};
`
