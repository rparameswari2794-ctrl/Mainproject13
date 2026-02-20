import Navbar from "./nav";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

function MainLayout(){
    return(
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default MainLayout;
