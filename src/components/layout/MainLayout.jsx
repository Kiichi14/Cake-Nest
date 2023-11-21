import { Outlet } from "react-router-dom";

function Layout()
{
    return (
        <>
            <div className="container-nav">
                <h1>NavBar</h1>
            </div>
            <Outlet />
        </>
    )
}

export default Layout;