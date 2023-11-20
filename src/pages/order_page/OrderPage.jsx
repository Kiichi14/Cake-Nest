import { useNavigate, useLocation } from "react-router-dom";

function OrderPage() {

    const navigate = useNavigate();

    const location = useLocation();

    const handleLogOut = () => {
        navigate('/');
    }

    return (
        <>
            <h1>Bonjour : {location.state.name}</h1>
            <button onClick={handleLogOut}>Déconnexion</button>
        </>
    )
}

export default OrderPage;