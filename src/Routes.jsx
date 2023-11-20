import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login_page/LoginPage";
import OrderPage from "./pages/order_page/OrderPage";
import ErrorPage from "./pages/error_page/ErrorPage";

function MainRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />}/>
                <Route path="/order" element={<OrderPage />}/>
                <Route path='*' element={<ErrorPage />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default MainRoutes;