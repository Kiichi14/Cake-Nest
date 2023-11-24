import { useState, useContext } from "react";
import styled from "styled-components";
import { theme } from "../../theme/Theme";
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";
import { HiOutlinePlusSmall } from "react-icons/hi2";
import { MdModeEdit } from "react-icons/md";
import AddProductForm from "../add_product_form/AddProductForm";
import UpdateProduct from "../update_product_form/UpdateProduct";
import { updateContext } from "../../store/UpdateContext";

const AdminPanel = () => {
    const [display, setDisplay] = useState(false);
    const [addProduct, setAddProduct] = useState(true);
    // const [, setIsUpdate] = useContext(updateContext);
    const { isUpdate } = useContext(updateContext);
    const [, setSelectUpdate] = isUpdate;

    const handleAddUpdateToggle = (add) => {
        setAddProduct(add);
        setSelectUpdate(!add);
    }

    const handleDisplay = () => {
        setDisplay(!display);
    }

    return (
        <AdminPanelStyled>
            <div className="admin-panel-action">
                <button onClick={handleDisplay} className={`display-admin-panel ${display ? "active" : ""}`}>
                    {display ? <FaChevronDown /> : <FaChevronUp color="white" />}
                </button>
                {["add", "update"].map((action) => (
                    <button
                        key={action}
                        onClick={() => handleAddUpdateToggle(action === "add")}
                        className={`display-${action}-product ${addProduct === (action === "add") ? "active" : ""}`}
                    >
                        {action === "add" ? <HiOutlinePlusSmall /> : <MdModeEdit />} {action === "add" ? "Ajouter" : "Modifier"} un Produit
                    </button>
                ))}
            </div>
            {display && (
                <div className="admin-panel-form">
                    {addProduct
                    ?
                        <AddProductForm />
                    :
                        <UpdateProduct />
                    }
                </div>
            )}
        </AdminPanelStyled>
    );
}

export default AdminPanel;

const AdminPanelStyled = styled.div`
    position: absolute;
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
`;