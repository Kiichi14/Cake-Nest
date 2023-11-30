import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { theme } from "../../theme/Theme";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { SubTitleH3 } from "../../theme/Styled";
import { RiLockPasswordLine } from "react-icons/ri";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../api/firebase-config";
import { createUser } from "../../api/user";
import { userContext } from "../../store/UserContext";
import { itemContext } from "../../store/ItemContext";
import { useContext } from "react";

function RegisterForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [, setUser] = useContext(userContext);
    const [, setCake] = useContext(itemContext);

    const navigate = useNavigate();

    const handleChange = (event) => {
        if(event.target.name === "email") {
            setEmail(event.target.value);
        }
        if(event.target.name === "password") {
            setPassword(event.target.value)
        }
        if(event.target.name === "username") {
            setUsername(event.target.value)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            create(user.email, username);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    }

    async function create(userId, username) {
        try {
            const userData = await createUser(userId, username);
            setUser(userData.username);
            setCake(userData.menu);
            navigate("/order");
        } catch (error) {
            console.error("Error:", error);
        }
    }

    return (
        <>
            <LoginFormContainer>
                <SubTitleH3>Enregistrez-vous</SubTitleH3>
                <form action="submit" onSubmit={handleSubmit}>
                    <FormLogin>
                        <InputContainer>
                            <MdOutlineEmail className="svg-input"/>
                            <FormInput type="email" name="email" placeholder="Email" value={email} onChange={handleChange}></FormInput>
                        </InputContainer>
                        <InputContainer>
                            <FaRegUserCircle className="svg-input"/>
                            <FormInput type="text" name="username" placeholder="Nom d'utilisateur" value={username} onChange={handleChange}></FormInput>
                        </InputContainer>
                        <InputContainer>
                            <RiLockPasswordLine className="svg-input"/>
                            <FormInput type="password" name="password" placeholder="Mot de passe" value={password} onChange={handleChange}></FormInput>
                        </InputContainer>
                        <FormButton type="submit">Mon espace <IoIosArrowForward /></FormButton>
                    </FormLogin>
                </form>
            </LoginFormContainer>
        </>
    )
}

export default RegisterForm;

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