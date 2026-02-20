import {Link, NavLink} from "react-router-dom";
import { useNavigate } from "react-router-dom";
function TeachNavbar(){
    const navigate=useNavigate();
    const OpenLogout=()=>{
        localStorage.clear();
        sessionStorage.clear();
        navigate("/home",{replace:true})};
    return(<>
    <nav className="navbar navbar-expand-lg bg-light nav-light">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/teach_dash"><div className="brand-pa"><span className="span-i"><i className="fa-solid fa-square one"></i><i className="fa-solid fa-square two"></i><i className="fa-solid fa-square three"></i></span><p className="brand-pa1 ">EduLink</p></div> </Link>
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span></button>        
            <div className="collapse navbar-collapse" id="navbarNav">
               <ul className="navbar-nav">
                <li className="nav-item"><NavLink className={({isActive})=>isActive? "nav-link active":"nav-link"} to="">Dashboard</NavLink></li>
                <li className="nav-item"><NavLink className={({isActive})=>isActive? "nav-link active":"nav-link"} to="teach_attendance">Attendance</NavLink></li>
                <li className="nav-item"><NavLink className={({isActive})=>isActive? "nav-link active":"nav-link"} to="marks">Marks</NavLink></li>
                <li className="nav-item"><NavLink className={({isActive})=>isActive? "nav-link active":"nav-link"} to="classes">Classes</NavLink></li>
                <li className="nav-item"><NavLink className={({isActive})=>isActive? "nav-link active":"nav-link"} to="report">Report</NavLink></li>
                <li className="nav-item"><NavLink className={({isActive})=>isActive? "nav-link active":"nav-link"} to="teach_profile">Profile</NavLink></li>
                <li className="nav-item"><button type="button" className="home-btn" onClick={OpenLogout}>Logout</button></li>
                </ul> 
            </div>
            </div>
    </nav>
    </>
    );
    
}
export default TeachNavbar;