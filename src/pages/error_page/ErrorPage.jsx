import { Link } from "react-router-dom";

function ErrorPage() {
    return(
        <>
            <h1>Error Page</h1>
            <Link to="/"><button>Retourner a l&apos;acceuil</button></Link>
        </>
    )
}

export default ErrorPage;