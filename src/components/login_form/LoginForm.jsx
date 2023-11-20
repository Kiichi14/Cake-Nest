import { useState } from "react";

function LoginForm() {

    const [firstName, setFirstName] = useState("");

    const handleChange = (event) => {
        setFirstName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(firstName === "") {
            alert("Un prénom est obligatoire")
        } else {
            alert(`Bonjour : ${firstName}`);
            setFirstName("");
        }
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