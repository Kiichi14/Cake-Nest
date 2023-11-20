import { useNavigate } from "react-router-dom";

function OrderPage() {

    const navigate = useNavigate();

    const handleLogOut = () => {
        navigate('/');
    }

    return (
        <>
            <h1>Order Page</h1>
            <button onClick={handleLogOut}>Déconnexion</button>
        </>
    )
}

export default OrderPage;