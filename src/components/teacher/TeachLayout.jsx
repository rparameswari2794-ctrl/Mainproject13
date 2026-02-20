import Footer from "../footer";
import TeachNavbar from "./teach_nav";
import { Outlet } from "react-router-dom";

function TeachLayout(){
    return(
        <>
            <TeachNavbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default TeachLayout;
