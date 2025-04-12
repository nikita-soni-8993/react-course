import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/Header";

const Layout = () => {
    return (  
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
 
export default Layout;