import { auth } from "../../api/firebase-config";
import styled from "styled-components";
import { theme } from "../../theme/Theme";
import PropTypes from 'prop-types';
import { useState } from "react";
import { updatePassword, onAuthStateChanged, signOut, verifyBeforeUpdateEmail } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EditProfileForm from "../edit-profile-form/EditProfileForm";

function ProfileManage(props) {

    const { active, control } = props;
    const [emailAuth, setEmailAuth] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [successPassword, setSuccessPassword] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            setEmailAuth(user.email || "");
          }
        });
    }, []);

    const handleChange = (event) => {
        if(event.target.name === 'email') {
            setEmailAuth(event.target.value);
        }
        if(event.target.name === 'password') {
            setNewPassword(event.target.value);
        }
    }

    const handleSubmitEmail = async (event) => {
        event.preventDefault();
        try {
            await verifyBeforeUpdateEmail(auth.currentUser, emailAuth);
            await signOut(auth);
            navigate('/');
        } catch (error) {
            setErrorEmail(true);
        }
    }

    const handleSubmitPassword = async (event) => {
        event.preventDefault();
        updatePassword(auth.currentUser, newPassword).then(() => {
            setSuccessPassword(true);
            setTimeout(() => {
                setSuccessPassword(false);
            }, 3000)
        }).catch(() => {
            setErrorPassword(true);
            setTimeout(() => {
                setSuccessPassword(false);
            }, 5000)
        });
    }

    return(
        <>
            <ProfilManageStyled display={active}>
                <div className="close-manage">
                    <button onClick={control}>X</button>
                </div>
                <div className="manage-title">
                    <h3>Editer vos informations</h3>
                </div>
                <div className="manage-form">
                    <EditProfileForm 
                        editFunc={handleSubmitEmail}
                        title="Email"
                        type="email"
                        inputValue={emailAuth}
                        inputChange={handleChange}
                        errorMessageEmail={errorEmail}
                        inputName="email"
                    />
                    <EditProfileForm 
                        editFunc={handleSubmitPassword}
                        title="Mot de Passe"
                        type="password"
                        inputValue={newPassword}
                        inputChange={handleChange}
                        errorMessagePassword={errorPassword}
                        successMessagePassword={successPassword}
                        inputName="password"
                    />
                </div>
            </ProfilManageStyled>
        </>
    )
}

export default ProfileManage;

// PROPS VALIDATION
ProfileManage.propTypes = {
    active: PropTypes.bool,
    control: PropTypes.func
};

// COMPONENTS STYLED

const ProfilManageStyled = styled.div `
    background: ${theme.colors.background_white};
    height: 100vh;
    width: 500px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: ${props => props.display ? '0%' : '-100%'};
    -webkit-box-shadow: 0px 6px 11px 5px rgba(0,0,0,0.2); 
    box-shadow: 0px 6px 11px 5px rgba(0,0,0,0.2);
    z-index: 100;
    transition: all linear 0.3s;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.xl};
    & .close-manage {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: ${theme.spacing.md};
        button {
            border: none;
            background: none;
            color: ${theme.colors.primary_cake};
            font-size: ${theme.fonts.size.P2};
            cursor: pointer;
        }
    }
    & .manage-title {
        text-align: center;
        font-family: 'Pacifico';
        font-size: ${theme.fonts.size.P3};
        border-bottom: 1px solid ${theme.colors.primary_cake};
        padding: 0px 0px ${theme.spacing.md} 0px;
        margin: 0 ${theme.spacing.xl};
    }
    & .manage-form {
        margin: 0 ${theme.spacing.xl};
        display: flex;
        flex-direction: column;
        gap: ${theme.spacing.md};
    }
`