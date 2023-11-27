import MainRoutes from "./Routes"
import AdminProvider from "./store/Context";
import ItemProvider from "./store/ItemContext";
import UpdateProvider from "./store/UpdateContext";
import { CartProvider } from "./store/CartContext";
import './App.css';


function App() {

  return (
    <>
      <CartProvider>
      <ItemProvider>
      <UpdateProvider>
      <AdminProvider>
        <MainRoutes />
      </AdminProvider>
      </UpdateProvider>
      </ItemProvider>
      </CartProvider>  
    </>
  )
}

export default App
