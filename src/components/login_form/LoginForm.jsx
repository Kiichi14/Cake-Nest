import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { theme } from "../../theme/Theme";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { SubTitleH3 } from "../../theme/Styled";
import { getUser, createUser } from "../../api/user";
import { userContext } from "../../store/UserContext";
import { itemContext } from "../../store/ItemContext";
import { useContext } from "react";

function LoginForm() {

    const [firstName, setFirstName] = useState("");
    const [, setUser] = useContext(userContext);
    const [, setCake] = useContext(itemContext);

    const navigate = useNavigate();

    const handleChange = (event) => {
        setFirstName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // appel api get de un user
        getUser(firstName)
        .then((user) => {
            if(user) {
                setUser(user.username);
                setCake(user.menu);
            } else {
                create(firstName);
            }
            navigate("/order", {state:{name:firstName}});
        })
        .catch((error) => {
            console.error("Erreur lors de la récupération de l'utilisateur:", error);
        });
        firstName === "" 
        ? 
        alert("Un prénom est obligatoire") 
        : 
        setFirstName("");
    }

    async function create(user) {
        try {
            const userData = await createUser(user);
            setUser(userData.username);
            setCake(userData.menu);
        } catch (error) {
            console.error("Error:", error);
        }
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
