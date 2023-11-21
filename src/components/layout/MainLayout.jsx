import { Outlet } from "react-router-dom";
import Navbar from "../navbar/NavBar";
import styled from 'styled-components';
import { theme } from "../../theme/Theme";

function Layout()
{
    return (
        <>
            <LayoutContainer>
                <Navbar />
                <Outlet />
            </LayoutContainer>
        </>
    )
}

export default Layout;

const LayoutContainer = styled.div `
    background: ${theme.colors.primary_cake};
    padding: ${theme.spacing.md} ${theme.spacing.xl};
`