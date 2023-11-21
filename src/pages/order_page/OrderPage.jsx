import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

function OrderPage() {

    const navigate = useNavigate();

    const location = useLocation();

    useEffect(() => {
        if(location.state === null) {
            navigate('/');
        }    
    }, [location.state, navigate]);

    const handleLogOut = () => {
        navigate('/');
    }

    return (
        <>
        {location.state &&
            <>
                <h1>Bonjour : {location.state.name}</h1>
                <button onClick={handleLogOut}>Déconnexion</button>
            </>
        }
        </>
    )
}

export default OrderPage;