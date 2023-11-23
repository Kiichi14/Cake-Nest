import { useState } from "react";
import styled from "styled-components";
import { theme } from "../../theme/Theme";
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";
import { HiOutlinePlusSmall } from "react-icons/hi2";
import { MdModeEdit } from "react-icons/md";

const AdminPanel = () => {
    const [display, setDisplay] = useState(false);
    const [addProduct, setAddProduct] = useState(true);
    const [, setUpdateProduct] = useState(false);

    const handleAddUpdateToggle = (add) => {
        setAddProduct(add);
        setUpdateProduct(!add);
    }

    const handleDisplay = () => {
        setDisplay(!display);
    }

    const handleSubmit = (action) => {
        console.log(action);
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
                    <form action="submit" onSubmit={() => handleSubmit(addProduct ? 'submit' : 'update')}>
                        <p>{addProduct ? 'Ajouter' : 'Modifier'} un produit</p>
                    </form>
                </div>
            )}
        </AdminPanelStyled>
    );
}

export default AdminPanel;

const AdminPanelStyled = styled.div`
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
`;