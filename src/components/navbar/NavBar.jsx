import styled from 'styled-components';
import { theme } from '../../theme/Theme';
import MainIcon from '../main_icon/MainIcon';
import ProfileWidget from '../profile_widget/ProfileWidget';
import AdminSwitch from '../admin_switch/AdminSwitch';

function Navbar() {
    return (
        <NavBar>
            <MainIcon />
            <AdminSwitch />
            <ProfileWidget />
        </NavBar>
    )
}

export default Navbar;

const NavBar = styled.nav `
    display: flex;
    justify-content: space-between;
    background-color: ${theme.colors.white};
    border-radius: ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound} 0px 0px;
    padding: ${theme.spacing.md};
`
