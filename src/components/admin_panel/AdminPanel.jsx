import { useState } from "react";
import styled from "styled-components";
import { theme } from "../../theme/Theme";
import { FaChevronUp } from "react-icons/fa6";
import { HiOutlinePlusSmall } from "react-icons/hi2";
import { MdModeEdit } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa6";


function AdminPanel() {

    const [display, setDisplay] = useState(false);
    const [addProduct, setAddProduct] = useState(true);
    const [updateProduct, setUpdateProduct] = useState(false);

    const handleAdd = () => {
        setAddProduct(true)
        setUpdateProduct(false);
    }

    const handleUpdate = () => {
        setAddProduct(false)
        setUpdateProduct(true);
    }

    const handleDisplay = () => {
        if(display === false) {
            setDisplay(true);
        } else {
            setDisplay(false);
        }
    }

    const handleSubmit = () => {
        console.log('submit');
    }

    const handleSubmitUpdate = () => {
        console.log('update');
    }

    return(
        <>
            <AdminPanelStyled>
                <div className="admin-panel-action">
                    {display
                    ?
                        <button onClick={handleDisplay} className="display-admin-panel active"><FaChevronDown /></button>
                    :
                        <button onClick={handleDisplay} className="display-admin-panel"><FaChevronUp color="white" /></button>
                    }
                    {addProduct 
                    ?
                        <button onClick={handleAdd} className="display-add-product active"><HiOutlinePlusSmall /> Ajouter un Produit</button>
                    :
                        <button onClick={handleAdd} className="display-add-product"><HiOutlinePlusSmall /> Ajouter un Produit</button>
                    }
                    {updateProduct
                    ?
                        <button onClick={handleUpdate} className="display-update-product active"><MdModeEdit /> Modifier un Produit</button>
                    :
                        <button onClick={handleUpdate} className="display-update-product"><MdModeEdit /> Modifier un Produit</button>
                    }
                </div>
                {display
                ?
                    <div className="admin-panel-form">
                        {addProduct
                        &&
                            <form action="submit" onSubmit={handleSubmit}>
                                <p>Ajouter un produit</p>
                            </form>
                        }
                        {updateProduct
                        &&
                            <form action="submit" onSubmit={handleSubmitUpdate}>
                                <p>Modifier un produit</p>
                            </form>
                        }
                    </div>
                :
                ""
                }
            </AdminPanelStyled>
        </>        
    )
}

export default AdminPanel;

const AdminPanelStyled = styled.div `
    position: sticky;
    bottom: 0px;
    left: 0px;
    width: 100%;
    & .admin-panel-action {
        margin-left: 100px;
    }
    & .display-admin-panel, .display-add-product, .display-update-product {
        background: ${theme.colors.background_dark};
        padding: ${theme.spacing.sm};
        border: none;
        border-radius: ${theme.borderRadius.round} ${theme.borderRadius.round} 0px 0px;
        font-family: 'Open Sans';
        box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
        cursor: pointer;
        color: ${theme.colors.white};
    }
    & .display-add-product.active, .display-update-product.active {
        background: ${theme.colors.white};
        color: ${theme.colors.greyMedium};
    }
    & .admin-panel-form form {
        width: 100%;
        height: 40vh;
        background: white;
        border-radius: 0px 0px ${theme.borderRadius.round} ${theme.borderRadius.round};
        padding: ${theme.spacing.md};
    }
    & .admin-panel-form form p {
        font-family: 'Open Sans';
    }
`