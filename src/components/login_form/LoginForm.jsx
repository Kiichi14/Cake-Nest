import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { theme } from "../../theme/Theme";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { RiLockPasswordLine } from "react-icons/ri";
import { SubTitleH3 } from "../../theme/Styled";
import { getUser } from "../../api/user";
import { userContext } from "../../store/UserContext";
import { itemContext } from "../../store/ItemContext";
import { useContext } from "react";
import { signInWithEmailAndPassword, setPersistence, browserSessionPersistence } from "firebase/auth";
import { auth } from "../../api/firebase-config";

function LoginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setUser } = useContext(userContext);
    const [, setCake] = useContext(itemContext);

    const navigate = useNavigate();

    const handleChange = (event) => {
        if(event.target.name === "email") {
            setEmail(event.target.value);
        }
        if(event.target.name === "password") {
            setPassword(event.target.value);
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await setPersistence(auth, browserSessionPersistence);
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            connectUser(user.uid);
          } catch (error) {
            const errorCode = error.code;
            if (errorCode) {
              alert('Identifiant incorrect');
            }
          }
    }

    async function connectUser(user) {
        try {
            const userData = await getUser(user);
            setUser(userData.username);
            setCake(userData.menu);
            navigate('/order');
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
                            <FormInput type="email" name="email" placeholder="Email" value={email} onChange={handleChange}></FormInput>
                        </InputContainer>
                        <InputContainer>
                            <RiLockPasswordLine className="svg-input"/>
                            <FormInput type="password" name="password" placeholder="Mot de Passe" value={password} onChange={handleChange}></FormInput>
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
