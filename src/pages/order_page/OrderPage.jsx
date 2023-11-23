import { MainDiv } from "../../theme/Styled";
import MenuItem from "../../components/menu_item/MenuItem";
import fakeMenu2 from "../../fakeData/fakeMenu";
import { MenuItemContainer } from "../../theme/Styled";
import { adminContext } from "../../store/Context";
import { useContext } from "react";
import AdminPanel from "../../components/admin_panel/AdminPanel";

function OrderPage() {

    const [admin] = useContext(adminContext);

    const handleSubmit = (id) => {
        console.log(id);
    };

    return (
        <>
           <MainDiv className="main-container">
                <MenuItemContainer className="item-container">
                {fakeMenu2.map((item, index) => (
                    <MenuItem 
                        key={index}
                        title={item.title}
                        price={item.price}
                        id={item.id}
                        addProduct={handleSubmit}
                    />
                ))}
               </MenuItemContainer> 
               {admin && <AdminPanel />}
           </MainDiv>
        </>
    )
}

export default OrderPage;