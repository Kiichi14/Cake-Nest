import MainRoutes from "./Routes"
import AdminProvider from "./store/Context";
import ItemProvider from "./store/ItemContext";
import UpdateProvider from "./store/UpdateContext";
import './App.css';


function App() {

  return (
    <>
      <ItemProvider>
      <UpdateProvider>
      <AdminProvider>
        <MainRoutes />
      </AdminProvider>
      </UpdateProvider>
      </ItemProvider>  
    </>
  )
}

export default App
