import styled from "styled-components";
import { theme } from "../../theme/Theme";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import PropTypes from 'prop-types';

function EditProfileForm(props) {

    const { editFunc, title, type, inputValue, inputChange, errorMessageEmail, errorMessagePassword, successMessagePassword, inputName } = props;

    return(
        <>
            <EditProfileFormStyled className="profile-manager" action="submit" onSubmit={editFunc}>
                <p className="form-title">{title}</p>
                <div className="form-group">
                    {type === "email" ? <MdOutlineEmail className="svg-input"/> : <RiLockPasswordLine className="svg-input"/>}
                    <input type={type} name={inputName} value={inputValue} onChange={inputChange}/>
                </div>
                {type === "email" && errorMessageEmail ? <p className="errorMessage">Une erreur est apparue réessayer plus tard</p> : "" }
                {type === "password" && errorMessagePassword ? <p className="errorMessage">Une erreur est apparue réessayer plus tard</p> : "" }
                {type === "password" && successMessagePassword ? <p className="succesMessage">Mot de passe mis a jour</p> : "" }
                <button type="submit">Enregistrer</button>
            </EditProfileFormStyled>
        </>
    )
}

export default EditProfileForm;

// PROPS VALIDATION
EditProfileForm.propTypes = {
    editFunc: PropTypes.func,
    title: PropTypes.string,
    type: PropTypes.string,
    inputValue: PropTypes.string,
    inputChange: PropTypes.func,
    errorMessageEmail: PropTypes.bool,
    errorMessagePassword: PropTypes.bool,
    successMessagePassword: PropTypes.bool,
    inputName: PropTypes.string,
};

// STYLED COMPONENTS
const EditProfileFormStyled = styled.form `
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
`