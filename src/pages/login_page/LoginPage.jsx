import LoginForm from "../../components/login_form/LoginForm";
import IMAGES from "../../Images";
import './loginPage.css';

function LoginPage() {
    return (
        <>
            <div className="login-container">
                <img src={IMAGES.logo} alt="logo Cake Nest" />
                <h2>Bienvenue chez nous !</h2>
                <LoginForm />
            </div>
        </>
    )
}

export default LoginPage;