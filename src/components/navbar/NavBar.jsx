import styled from 'styled-components';
import { theme } from '../../theme/Theme';
import MainIcon from '../main_icon/MainIcon';
import ProfileWidget from '../profile_widget/ProfileWidget';
import AdminSwitch from '../admin_switch/AdminSwitch';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function Navbar() {

    const [admin, setAdmin] = useState(false);

    const handleChange = () => {
        if(admin === false) {
            setAdmin(true);
            toast.info('Admin Activé', {
                position: toast.POSITION.BOTTOM_RIGHT,
                theme: "dark",
            });
        } else {
            setAdmin(false);
        }
    }

    return (
        <>
            <NavBar>
                <MainIcon />
                <div className="container-profile-widget">
                    <AdminSwitch isAdmin={admin} toggleAdmin={handleChange}/>
                    <ProfileWidget />
                </div>
            </NavBar>
            <ToastContainer />
        </>
    )
}

export default Navbar;

const NavBar = styled.nav `
    display: flex;
    justify-content: space-between;
    background-color: ${theme.colors.white};
    border-radius: ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound} 0px 0px;
    padding: ${theme.spacing.md};
    & .container-profile-widget {
        display: flex;
        gap: ${theme.spacing.md}
    }
`
