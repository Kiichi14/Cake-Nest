import { auth } from "../../api/firebase-config";
import styled from "styled-components";
import { theme } from "../../theme/Theme";
import PropTypes from 'prop-types';
import { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { updatePassword, onAuthStateChanged, signOut, verifyBeforeUpdateEmail } from "firebase/auth";
import { RiLockPasswordLine } from "react-icons/ri";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
            console.log(error);
            setErrorEmail(true);
        }
    }

    const handleSubmitPassword = async (event) => {
        event.preventDefault();
        updatePassword(auth.currentUser, newPassword).then(() => {
            console.log('updated');
            setSuccessPassword(true);
            setTimeout(() => {
                setSuccessPassword(false);
            }, 3000)
        }).catch(() => {
            setErrorPassword(true);
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
                    <form className="email-manager" action="submit" onSubmit={handleSubmitEmail}>
                        <p className="form-title">Email</p>
                        <div className="form-group">
                            <MdOutlineEmail className="svg-input"/>
                            <input type="email" name="email" value={emailAuth} onChange={handleChange}/>
                        </div>
                        {errorEmail ? <p className="errorMessage">Une erreur est apparue réessayer plus tard</p> : "" }
                        <button type="submit">Enregistrer</button>
                    </form>
                    <form className="password-manager" action="submit" onSubmit={handleSubmitPassword}>
                        <p className="form-title">Mot de passe</p>
                        <div className="form-group">
                            <RiLockPasswordLine className="svg-input"/>
                            <input type="password" name="password" value={newPassword} onChange={handleChange}/>
                        </div>
                        {successPassword ? <p className="succesMessage">Mot de passe mis a jour</p> : "" }
                        {errorPassword ? <p className="errorMessage">Une erreur est apparue réessayer plus tard</p> : "" }
                        <button type="submit">Enregistrer</button>
                    </form>
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
        form {
            display: flex;
            flex-direction: column;
            gap: ${theme.spacing.md};
            align-items: center;
            .form-title {
                font-family: 'Pacifico';
                font-size: ${theme.fonts.size.P2};
            }
            .form-group {
                width: 100%;
                position: relative;
            }
            & .form-group svg {
                position: absolute;
                top: 50%;
                left: 15px;
                transform: translateY(-50%);
            }
            input{
                width: 100%;
                padding: ${theme.spacing.sm} ${theme.spacing.xl};
                border-radius: ${theme.borderRadius.extraRound};
                border: none;
                background: ${theme.colors.greyLight};
            }
            button {
                background: ${theme.colors.primary_cake};
                color: ${theme.colors.white};
                padding: ${theme.spacing.sm};
                width: 50%;
                border-radius: ${theme.borderRadius.extraRound};
                border: none;
            }
            .succesMessage, .errorMessage {
                width: 100%;
                padding: ${theme.spacing.sm};
                color: ${theme.colors.white};
                border-radius: ${theme.borderRadius.round};
                font-family: 'Open Sans';
            }
            .succesMessage {
                background: ${theme.colors.success};
            }
            .errorMessage {
                background: ${theme.colors.success};
            }
        }
    }
`