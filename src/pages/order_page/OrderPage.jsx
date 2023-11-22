import { MainDiv } from "../../theme/Styled";
import MenuItem from "../../components/menu_item/MenuItem";
import fakeMenu2 from "../../fakeData/fakeMenu";
import { MenuItemContainer } from "../../theme/Styled";

function OrderPage() {

    const handleSubmit = (id) => {
        console.log(id);
    };

    return (
        <>
           <MainDiv>
                <MenuItemContainer>
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
           </MainDiv>
        </>
    )
}

export default OrderPage;