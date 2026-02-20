import { useNavigate } from "react-router-dom";


function Profile() {
    const navigate = useNavigate();
    const OpenLogout = () => {
        localStorage.clear();
        navigate("/home"), { replace: true }
    }
    return (<>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="ad-te-card">
                        <h3>My Profile</h3>
                    </div>
                     <h5 className="admin-h5">Name & Employee ID</h5>
                     <div className="te-pro">
                        <p>Name</p>
                        <p>Employee ID</p>
                        <input type="text" id="name" disabled />
                        <input type="text" id="id" disabled />
                     </div>
                     <h5 className="admin-h5">Assigned Classes & Subjects</h5>
                     <div className="te-pro">
                        <p>Class</p>
                        <p>Subject</p>
                        <input type="text" id="class" disabled />
                        <input type="text" id="subject" disabled />
                        <p>Class</p>
                        <p>Subject</p>
                        <input type="text" id="p_class" disabled />
                        <input type="text" id="p_subject" disabled />
                     </div>
                     <h5 className="admin-h5">Contact Details</h5>
                      <div className="te-pro">
                        <p>Email</p>
                        <p>Phone</p>
                        <input type="email" id="eamil" disabled />
                        <input type="text" id="phone" disabled />
                     </div>
                     <div className="te-pro1">
                        <button type="button" className="teach-btn">Edit Profile</button>
                        <button className="teach-btn1" type="button">Change Password</button>
                        <button type="button" className="teach-btn" onClick={OpenLogout}><i className="fa-solid fa-right-from-bracket"></i>Logout</button>
                     </div>
                    
                </div>
            </div>
        </div>
    </>)
}

export default Profile;