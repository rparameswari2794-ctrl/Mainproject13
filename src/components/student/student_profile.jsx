import { useNavigate } from "react-router-dom";


function StudentSetting(){
    const navigate=useNavigate();
    const OpenLogout=()=>{
        localStorage.clear();
        navigate("/home"), { replace: true }}
    return(<>
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="ad-te-card">
                        <h3>My Profile</h3>
                    </div>
                     <h5 className="admin-h5">Personal Information</h5>
                     <div className="te-pro">
                        <p className="st-pa">Student Name</p>
                        <p className="st-pa">Roll Number</p>
                        <p>Ethan Harper</p>
                        <p>2023-SH-1234</p>
                     </div>
                     <div className="te-pro2">
                        <p className="st-pa">Class & Sections</p>
                        <p>Grade 10 - A</p>
                        
                     </div>
                     <h5 className="admin-h5">Contact Details</h5>
                      <div className="te-pro3">
                        <p className="st-pa">Email</p>
                        <p className="st-pa">Phone Number</p>
                        <p>ethan.harper@example.com</p>
                        <p>+1 (555) 123-4567</p>
                     </div>
                     <h5 className="admin-h5">Actions</h5>
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

export default StudentSetting;