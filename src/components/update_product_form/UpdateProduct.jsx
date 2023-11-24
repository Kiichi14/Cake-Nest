import styled from "styled-components";
import { theme } from "../../theme/Theme";
import { HiCursorClick } from "react-icons/hi";
import { updateContext } from "../../store/UpdateContext";
import { itemContext } from "../../store/ItemContext";
import { useContext, useEffect, useState } from "react";

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
            <UpdateFormStyled>
                {itemSelect 
                ?
                    <>
                    <div className="update-image-preview">
                        <img src={selectImg} alt="image de gateau" />
                    </div>
                    <div className="update-input-container">
                        <div className="form-group">
                            <input type="text" name="title" value={selectTitle} onChange={handleChange}/>
                        </div>
                        <div className="form-group">
                            <input type="text" name="imageSource" value={selectImg} onChange={handleChange}/>
                        </div>
                        <div className="form-group">
                            <input type="number" step="0.01" name="price" value={selectPrice} onChange={handleChange}/>
                        </div>
                    </div>
                    </>
                :
                    <p className="add-update-product">Cliquez sur un produit pour le modifier <HiCursorClick /></p>   
                }
            </UpdateFormStyled> 
        </>
    )
}

export default UpdateProduct

const UpdateFormStyled = styled.form `
    width: 100%;
    height: 30vh;
    background: white;
    border-radius: 0px 0px ${theme.borderRadius.round} ${theme.borderRadius.round};
    padding: ${theme.spacing.md};
    display: flex;
    justify-content: space-between;
    & p.add-update-product {
        font-family: 'Pacifico';
        color: ${theme.colors.greyDark};
        font-size: ${theme.fonts.size.P3};
        padding: ${theme.spacing.xl};
    }
`