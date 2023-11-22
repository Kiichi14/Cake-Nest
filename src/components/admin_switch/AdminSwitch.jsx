import styled from "styled-components";
import { theme } from "../../theme/Theme";
import { useState } from "react";

function AdminSwitch() {

    const [admin, setAdmin] = useState(false);

    const handleChange = () => {
        admin === false ? setAdmin(true) : setAdmin(false);
    }

    return (
        <>
            <AdminDivStyled onClick={handleChange}>
                {admin === false ?
                    <>
                        <div className="switch-admin"></div>
                        <p className="switch-admin-text">Activer le Mode Admin</p>
                    </>
                :
                    <>
                        <div className="switch-admin active"></div>
                        <p className="switch-admin-text">Désactiver le Mode Admin</p>
                    </>
                }
            </AdminDivStyled>
        </>
    )
}

export default AdminSwitch;

const AdminDivStyled = styled.div `
    background : ${theme.colors.background_dark};
    display: flex;
    gap: ${theme.spacing.sm};
    align-items: center;
    justify-content: space-between;
    color: ${theme.colors.white};
    font-family: 'Open Sans';
    cursor: pointer;
    & .switch-admin {
        background: ${theme.colors.primary_cake};
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
    & .switch-admin.active {
        background: ${theme.colors.red}
    }
`