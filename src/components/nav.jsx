import {Link, NavLink} from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Nav(){
    const navigate=useNavigate();
    const OpenLogin=()=>{navigate("/login")};
    return(<>
    <nav className="navbar navbar-expand-lg bg-light nav-light">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/"><div className="brand-pa"><span className="span-i"><i className="fa-solid fa-square one"></i><i className="fa-solid fa-square two"></i><i className="fa-solid fa-square three"></i></span><p className="brand-pa1 ">EduLink</p></div> </Link>
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span></button>        
            <div className="collapse navbar-collapse" id="navbarNav">
               <ul className="navbar-nav">
                <li className="nav-item"><NavLink className={({isActive})=>isActive? "nav-link active":"nav-link"} to="/">Home</NavLink></li>
                <li className="nav-item"><NavLink className={({isActive})=>isActive? "nav-link active":"nav-link"} to="/about">About Us</NavLink></li>
                <li className="nav-item"><NavLink className={({isActive})=>isActive? "nav-link active":"nav-link"} to="/feature">Features</NavLink></li>
                <li className="nav-item"><NavLink className={({isActive})=>isActive? "nav-link active":"nav-link"} to="/contact">Contact</NavLink></li>
                <li className="nav-item"><button type="button" className="home-btn" onClick={OpenLogin}>Login</button></li>
                </ul> 
            </div>
            </div>
    </nav>
    </>
    );
    
}

export default Nav;
