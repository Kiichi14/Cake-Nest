import { MainDiv } from "../../theme/Styled";
import MenuItem from "../../components/menu_item/MenuItem";
import { MenuItemContainer } from "../../theme/Styled";
import { adminContext } from "../../store/Context";
import { useContext, useState } from "react";
import AdminPanel from "../../components/admin_panel/AdminPanel";
import { itemContext } from "../../store/ItemContext";
import NoProduct from "../../components/no_product/NoProduct";
import Cart from "../../components/cart/Cart";
import { CartContext } from "../../store/CartContext";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

function OrderPage() {

    const [admin] = useContext(adminContext);
    const [cake] = useContext(itemContext);
    const { addToCart } = useContext(CartContext);
    const [isVisible, setIsVisible] = useState(true);

    const handleSubmit = (item) => {
       addToCart(item);
    };

    const handleCollapse = () => {
        setIsVisible(!isVisible);
    }

    return (
        <>
            {cake.length === 0
            ?
                <NoProduct />
            :
                <MainDiv className="main-container">
                    <div className={'main-cart-container ' + (isVisible ? '' : 'collapse')}>
                        <Cart />
                        <button className="btn-collapse-cart" onClick={handleCollapse}>{isVisible ? <FaMinus color="white"/> : <FaPlus color="white"/>}</button>
                    </div>
                    <div className="main-item-container">
                        <MenuItemContainer className="item-container">
                        {cake.map((item, index) => (
                            <MenuItem 
                                key={index}
                                {...item}
                                addProduct={() => handleSubmit(item)}
                                deleteItem={admin}
                            />
                        ))}
                        </MenuItemContainer> 
                        {admin && <AdminPanel />}
                    </div>
                </MainDiv>
            }
        </>
    )
}

export default OrderPage;