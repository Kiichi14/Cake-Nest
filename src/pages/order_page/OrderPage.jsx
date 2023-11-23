import { MainDiv } from "../../theme/Styled";
import MenuItem from "../../components/menu_item/MenuItem";
import { MenuItemContainer } from "../../theme/Styled";
import { adminContext } from "../../store/Context";
import { useContext } from "react";
import AdminPanel from "../../components/admin_panel/AdminPanel";
import { itemContext } from "../../store/ItemContext";

function OrderPage() {

    const [admin] = useContext(adminContext);
    const [cake] = useContext(itemContext);

    const handleSubmit = (id) => {
        console.log(id);
    };

    return (
        <>
           <MainDiv className="main-container">
                <MenuItemContainer className="item-container">
                {cake.map((item, index) => (
                    <MenuItem 
                        key={index}
                        title={item.title}
                        price={item.price}
                        id={item.id}
                        addProduct={handleSubmit}
                        images={item.imageSource}
                    />
                ))}
               </MenuItemContainer> 
               {admin && <AdminPanel />}
           </MainDiv>
        </>
    )
}

export default OrderPage;