import { MainDiv } from "../../theme/Styled";
import MenuItem from "../../components/menu_item/MenuItem";
import fakeMenu2 from "../../fakeData/fakeMenu";
import styled from "styled-components";

function OrderPage() {


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
                    />
                ))}
               </MenuItemContainer> 
           </MainDiv>
        </>
    )
}

export default OrderPage;

const MenuItemContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 60px;
    padding: 50px 50px 150px;
    margin: 0 auto;
`