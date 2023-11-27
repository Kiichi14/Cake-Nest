import { MainDiv } from "../../theme/Styled";
import MenuItem from "../../components/menu_item/MenuItem";
import { MenuItemContainer } from "../../theme/Styled";
import { adminContext } from "../../store/Context";
import { useContext } from "react";
import AdminPanel from "../../components/admin_panel/AdminPanel";
import { itemContext } from "../../store/ItemContext";
import NoProduct from "../../components/no_product/NoProduct";

function OrderPage() {

    const [admin] = useContext(adminContext);
    const [cake] = useContext(itemContext);

    const handleSubmit = (id) => {
        console.log(id);
    };

    return (
        <>
            {cake.length === 0
            ?
                <NoProduct />
            :
                <MainDiv className="main-container">
                    <MenuItemContainer className="item-container">
                    {cake.map((item, index) => (
                        <MenuItem 
                            key={index}
                            {...item}
                            addProduct={handleSubmit}
                            deleteItem={admin}
                        />
                    ))}
                    </MenuItemContainer> 
                    {admin && <AdminPanel />}
                </MainDiv>
            }
        </>
    )
}

export default OrderPage;