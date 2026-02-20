import Footer from "../footer";
import StudentNavbar from "./student_nav";
import { Outlet } from "react-router-dom";

function StudentLayout(){
    return(
        <>
            <StudentNavbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default StudentLayout;
