import Footer from "../footer";
import AdminNavbar from "./admin_nav";
import { Outlet } from "react-router-dom";

function AdminLayout(){
    return(
        <>
            <AdminNavbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default AdminLayout;
