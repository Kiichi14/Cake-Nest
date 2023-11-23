import styled from "styled-components";
import { theme } from "../../theme/Theme";
import { GiCupcake } from "react-icons/gi";
import { FaCamera } from "react-icons/fa";
import { FaEuroSign } from "react-icons/fa";

function AddProductForm() {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('submit');
    }

    return(
        <>
            <AddFormStyled action="submit" onSubmit={handleSubmit}>
                <div className="image-preview-container">
                    <p>Aucune Image</p>
                </div>
                <div className="add-product-form">
                    <div className="form-group">
                        <GiCupcake />
                        <input type="text" name="title" placeholder="Nom du produit" />
                    </div>
                    <div className="form-group">
                        <FaCamera />
                        <input type="text" name="imageSource" placeholder="Lien URL d'une image (ex:https://la-photo-de-mon-produit.png)"/>
                    </div>
                    <div className="form-group">
                        <FaEuroSign />
                        <input type="number" name="price" step="0.01" placeholder="Prix"/>
                    </div>
                    <button type="submit">Ajouter un nouveau produit</button>
                </div>
            </AddFormStyled>
        </>
    )
}

export default AddProductForm;

const AddFormStyled = styled.form `
    width: 100%;
    height: 30vh;
    background: white;
    border-radius: 0px 0px ${theme.borderRadius.round} ${theme.borderRadius.round};
    padding: ${theme.spacing.md};
    display: flex;
    justify-content: space-between;
    & p {
        font-family: 'Open Sans';
    }
    & .add-product-form {
        width: 70%;
        display: flex;
        flex-direction: column;
        gap: ${theme.spacing.sm};
    }
    & .add-product-form input {
        width: 50%;
        border: none;
        background: ${theme.colors.background_white};
        padding: ${theme.spacing.sm} ${theme.spacing.xl};
        border-radius: ${theme.borderRadius.round};
        font-family: 'Open Sans';
    }
    & .add-product-form input::placeholder {
        color: ${theme.colors.greyMedium};
    }
    & .form-group {
        position: relative;
    }
    & .form-group svg {
        position: absolute;
        top: 50%;
        left: 15px;
        transform: translateY(-50%);
    }
    & .image-preview-container {
        width: 30%;
        display: flex;
        justify-content: end;
        padding: 0px ${theme.spacing.xl};
    }
    & .image-preview-container p {
        border: 1px solid ${theme.colors.greyLight};
        color: ${theme.colors.greyLight};
        width: 70%;
        height: fit-content;
        text-align: center;
        padding: ${theme.spacing.xl};
    }
    & .add-product-form button {
        width: 200px;
        border: none;
        background: ${theme.colors.success};
        padding: ${theme.spacing.sm};
        border-radius: ${theme.borderRadius.round};
        color: ${theme.colors.white};
        font-family: 'Open Sans';
    }
`