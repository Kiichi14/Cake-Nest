import styled from "styled-components";
import { theme } from "../../theme/Theme";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from 'prop-types';

function AdminSwitch({isAdmin, toggleAdmin}) {
    return (
        <>
            <AdminDivStyled onClick={toggleAdmin}>
                {isAdmin === false
                ?
                    <>
                        <div className="switch-admin"></div>
                        <p className="switch-admin-text">Activer le Mode Admin</p>
                    </>
                :
                    <>
                        <div className="switch-admin active"></div>
                        <p className="switch-admin-text active">Désactiver le Mode Admin</p>
                    </>
                }
            </AdminDivStyled>
        </>
    )
}

export default AdminSwitch;

AdminSwitch.propTypes = {
    isAdmin: PropTypes.bool,
    toggleAdmin: PropTypes.func
};

const AdminDivStyled = styled.div `
    background : ${theme.colors.background_dark};
    display: flex;
    gap: ${theme.spacing.sm};
    align-items: center;
    justify-content: space-between;
    color: ${theme.colors.white};
    font-family: 'Open Sans';
    border-radius: 50px;
    padding: 10px;
    cursor: pointer;
    & .switch-admin {
        background: ${theme.colors.primary_cake};
        width: 30px;
        height: 30px;
        border-radius: 50%;
        order: 1;
    }
    & .switch-admin-text {
        color: ${theme.colors.primary_cake};
    }
    & .switch-admin-text {
        order: 2;
    }
    & .switch-admin.active {
        background: ${theme.colors.red};
        order: 2;
    }
    & .switch-admin-text.active {
        order: 1;
        color: ${theme.colors.red};
    }
    
`