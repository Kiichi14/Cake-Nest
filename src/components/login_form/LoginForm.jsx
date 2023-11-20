import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {

    const [firstName, setFirstName] = useState("");

    const navigate = useNavigate();

    const handleChange = (event) => {
        setFirstName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        firstName === "" 
        ? 
        alert("Un prénom est obligatoire") 
        : 
        setFirstName("");
        navigate("/order", {state:{name:firstName}});
    }

    return (
        <>
            <div className="login-form-container">
                <h3>Connectez-vous</h3>
                <form action="submit" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input type="text" name="firstname" placeholder="Entrez votre prénom..." value={firstName} onChange={handleChange}/>
                        <button type="submit">Accéder à votre espace</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default LoginForm;