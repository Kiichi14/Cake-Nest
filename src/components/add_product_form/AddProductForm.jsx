import { GiCupcake } from "react-icons/gi";
import { FaCamera } from "react-icons/fa";
import { FaEuroSign } from "react-icons/fa";
import { itemContext } from "../../store/ItemContext";
import { useContext, useState } from "react";
import { CiCircleCheck } from "react-icons/ci";
import { AddFormStyled } from "../../theme/Styled";
import { addProduct } from "../../api/product";
import { auth } from "../../api/firebase-config";

function AddProductForm() {

    const [cake, setCake] = useContext(itemContext);
    const [title, setTitle] = useState("");
    const [imageSource, setImageSource] = useState("");
    const [price, setPrice] = useState(0);
    const [success, setSuccess] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const cakeCopy = [...cake];
        const id = new Date().getTime();
        const newTitle = title;
        const newImageSource = imageSource;
        const newPrice = price;
        cakeCopy.push({id: id, title: newTitle, imageSource: newImageSource, price: newPrice});
        addProduct(auth.currentUser.uid, {id: id, title: newTitle, imageSource: newImageSource, price: newPrice, isAvailable: true});
        setCake(cakeCopy);
        setSuccess(!success);
        setTimeout(() => {
            setSuccess(false);
        }, 2000);
    }

    return(
        <>
            <AddFormStyled action="submit" onSubmit={handleSubmit}>
                <div className="image-preview-container">
                    {imageSource !== ""
                    ?
                        <img src={imageSource} alt="image de gateau"/>
                    :
                        <p>Aucune Image</p>
                    }
                </div>
                <div className="add-product-form">
                    <div className="form-group">
                        <GiCupcake />
                        <input type="text" name="title" placeholder="Nom du produit" value={title} onChange={(event) => setTitle(event.target.value)}/>
                    </div>
                    <div className="form-group">
                        <FaCamera />
                        <input type="text" name="imageSource" value={imageSource} onChange={(event) => setImageSource(event.target.value)} placeholder="Lien URL d'une image (ex:https://la-photo-de-mon-produit.png)"/>
                    </div>
                    <div className="form-group">
                        <FaEuroSign />
                        <input type="number" name="price" step="0.01" value={price} onChange={(event) => setPrice(event.target.value)} placeholder="Prix"/>
                    </div>
                    <div className="success-submit">
                        <button type="submit">Ajouter un nouveau produit</button>
                        {success ?<p><CiCircleCheck size={20}/> Ajouté avec succès</p> : ""}
                    </div>
                </div>
            </AddFormStyled>
        </>
    )
}

export default AddProductForm;