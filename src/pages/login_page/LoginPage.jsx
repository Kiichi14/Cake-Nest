import LoginForm from "../../components/login_form/LoginForm";

function LoginPage() {
    return (
        <>
            <div className="login-container">
                <h2>Bienvenue chez nous !</h2>
                <LoginForm />
            </div>
        </>
    )
}

export default LoginPage;