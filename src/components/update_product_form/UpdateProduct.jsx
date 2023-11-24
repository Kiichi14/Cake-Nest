import { HiCursorClick } from "react-icons/hi";
import { updateContext } from "../../store/UpdateContext";
import { itemContext } from "../../store/ItemContext";
import { useContext, useEffect, useState } from "react";
import { GiCupcake } from "react-icons/gi";
import { FaCamera } from "react-icons/fa";
import { FaEuroSign } from "react-icons/fa";
import { AddFormStyled } from "../../theme/Styled";

function UpdateProduct() {

    const { isSelect } = useContext(updateContext);
    const [itemSelect] = isSelect;
    const [cake, setCake] = useContext(itemContext);

    const [selectTitle, setSelectTitle] = useState("");
    const [selectImg, setSelectImg] = useState("");
    const [selectPrice, setSelectPrice] = useState(0);

    useEffect(() => {
        if(itemSelect) {
            const selectCake = cake.filter(item => item.id === itemSelect);
            setSelectTitle(selectCake[0].title);
            setSelectImg(selectCake[0].imageSource);
            setSelectPrice(selectCake[0].price);
        }
    }, [itemSelect, cake]);

    const handleChange = (event) => {
        const updatedCakes = [...cake];
        const cakeToUpdate = updatedCakes.find(item => item.id === itemSelect);
        if(event.target.name === "title") {
            cakeToUpdate.title = event.target.value;
        }
        if(event.target.name === "price") {
            cakeToUpdate.price = event.target.value;
        }
        if(event.target.name === "imageSource") {
            cakeToUpdate.imageSource = event.target.value;
        }
        setCake(updatedCakes);
    }

    return (
        <>
            <AddFormStyled>
                {itemSelect 
                ?
                    <>
                    <div className="image-preview-container">
                        <img src={selectImg} alt="image de gateau" />
                    </div>
                    <div className="add-product-form">
                        <div className="form-group">
                            <GiCupcake />
                            <input type="text" name="title" value={selectTitle} onChange={handleChange}/>
                        </div>
                        <div className="form-group">
                            <FaCamera />
                            <input type="text" name="imageSource" value={selectImg} onChange={handleChange}/>
                        </div>
                        <div className="form-group">
                            <FaEuroSign />
                            <input type="number" step="0.01" name="price" value={selectPrice} onChange={handleChange}/>
                        </div>
                    </div>
                    </>
                :
                    <p className="add-update-product">Cliquez sur un produit pour le modifier <HiCursorClick /></p>   
                }
            </AddFormStyled> 
        </>
    )
}

export default UpdateProduct