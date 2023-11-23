import { adminContext } from "../../store/Context"
import { itemContext } from "../../store/ItemContext";
import { useContext } from "react"
import { MainDiv } from "../../theme/Styled";
import fakeMenu2 from "../../fakeData/fakeMenu";

function NoProduct() {

    const [admin] = useContext(adminContext);
    const [,setCake] = useContext(itemContext);

    const handleGenerate = () => {
        setCake(fakeMenu2);
    }

    return(
        <>
            <MainDiv>
                {admin
                ?
                    <div className="no-product">
                        <p>Le menu est vide ?<br />Cliquez ci-dessous pour le réinitialiser</p>
                        <div className="no-product-button">
                            <button onClick={handleGenerate}>Générer de nouveaux gateaux</button>
                        </div>
                    </div>
                :
                    <div className="no-product">
                        <p>Victime de notre succés<br/>De nouvelles recette sont en préparation, revenez vite !</p>
                    </div>   
                }
            </MainDiv>
        </>
    )
}

export default NoProduct