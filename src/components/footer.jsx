import {Link, NavLink} from "react-router-dom"; 
function Footer(){
    return(<>
    <footer>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="foot-card">
                        <Link className="foot-link" to="/about">About Us</Link>
                        <Link className="foot-link" to="/contact">Contact</Link>
                        <Link className="foot-link" to="/">Privacy Policy</Link>
                        <Link className="foot-link" to="/feature">Terms of Service</Link>                       
                    </div>
                    <div className="foot-card1">
                        <a href="https://x.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-twitter"></i></a> 
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook"></i></a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a> 
                    </div>
                    <div className="foot-card2">
                        <p>&copy; 2024 EduLink. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>)
}
export default Footer;