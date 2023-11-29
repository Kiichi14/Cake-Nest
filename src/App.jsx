import MainRoutes from "./Routes"
import AdminProvider from "./store/Context";
import ItemProvider from "./store/ItemContext";
import UpdateProvider from "./store/UpdateContext";
import UserProvider from "./store/UserContext";
import { CartProvider } from "./store/CartContext";
import './App.css';


function App() {

  return (
    <>
      <UserProvider>
      <CartProvider>
      <ItemProvider>
      <UpdateProvider>
      <AdminProvider>
        <MainRoutes />
      </AdminProvider>
      </UpdateProvider>
      </ItemProvider>
      </CartProvider>  
      </UserProvider>
    </>
  )
}

export default App
