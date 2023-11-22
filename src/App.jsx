import MainRoutes from "./Routes"
import AdminProvider from "./store/Context";
import './App.css';


function App() {

  return (
    <>
      <AdminProvider>
        <MainRoutes />
      </AdminProvider>  
    </>
  )
}

export default App
