import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/Header";
import UserContextProvider from "./context/UserContextProvider";

const Layout = () => {
    return (  
        <UserContextProvider>
            <Header />
            <Outlet />
            <Footer />
        </UserContextProvider>
    )
}
 
export default Layout;