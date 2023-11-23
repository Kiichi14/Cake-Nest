import MainRoutes from "./Routes"
import AdminProvider from "./store/Context";
import ItemProvider from "./store/ItemContext";
import './App.css';


function App() {

  return (
    <>
      <ItemProvider>
      <AdminProvider>
        <MainRoutes />
      </AdminProvider>
      </ItemProvider>  
    </>
  )
}

export default App
