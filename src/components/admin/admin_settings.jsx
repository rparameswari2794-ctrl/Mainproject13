import { useNavigate } from "react-router-dom";


function AdminSettings(){
    const navigate=useNavigate();
    const OpenLogout=()=>{
        localStorage.clear();
        navigate("/home"), { replace: true }}
    return(<>
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="ad-te-card">
                    <h3>Account Settings</h3>
                </div>
                <div className="ad-set">
                  <div className="ad-set1"><div><i className="fa-solid fa-user"></i><p>Edit Profile<br/><span>Manage Your Personal Information</span></p></div><i className="fa-solid fa-angle-right right"></i>
</div>
                  <div className="ad-set1"><div><i className="fa-solid fa-lock"></i><p>Change Password<br/><span>Change Your Account Password</span></p></div><i className="fa-solid fa-angle-right right"></i>
</div>
                  <div className="ad-set1"><div><i className="fa-solid fa-right-from-bracket"></i><button type="button" className="log-btn" onClick={OpenLogout}>Logout</button></div></div>
                </div>
                
            </div>
        </div>
    </div>
    </>)
}

export default AdminSettings;