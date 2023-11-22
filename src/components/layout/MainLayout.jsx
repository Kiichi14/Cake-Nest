import { Outlet } from "react-router-dom";
import Navbar from "../navbar/NavBar";
import { LayoutContainer } from "../../theme/Styled";

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