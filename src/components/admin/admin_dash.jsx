        import { useNavigate } from "react-router-dom";
    

        function AdminDashboard(){
            const navigate=useNavigate();
            const OpenStudent=()=>{navigate("/admin_dash/admin_students")}
            const OpenMark=()=>{navigate("/admin_dash/attendance")}
            const OpenView=()=>{navigate("/admin_dash/exam")}
            const OpenTeacher=()=>{navigate("/admin_dash/admin_teacher")}
            const OpenClass=()=>{navigate("/admin_dash/admin_students")}
            const OpenGenerate=()=>{navigate("/admin_dash/exam")}

            return(
                <>
                  
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="admin-card">
                                <h3>Dashboard</h3>
                                <p>Welcome back Admin! Here is quick overview of your school's activities.</p>
                            </div>
                            <div className="admin-card1">
                                <div className="admin-card2">
                                    <p>Total Students</p>
                                    <p className="count-pa">450</p>
                                </div>
                                <div className="admin-card2">
                                    <p>Total Teachers</p>
                                    <p className="count-pa">30</p>
                                </div>
                                <div className="admin-card2">
                                    <p>Classes</p>
                                    <p className="count-pa">15</p>
                                </div>
                                <div className="admin-card2">
                                    <p>Attendance %</p>
                                    <p className="count-pa">92%</p>
                                </div>
                                <div className="admin-card2">
                                    <p>Fees Status</p>
                                    <p className="count-pa">Paid</p>
                                </div>
                            </div>
                            <h5 className="admin-h5">Quick Actions</h5>
                            <div className="admin-card3">
                            <button type="button" className="home-btn3" onClick={OpenStudent}>Add Student</button>
                            <button type="button" className="home-btn3" onClick={OpenMark}>Mark Attendance</button>
                            <button type="button" className="home-btn3" onClick={OpenView}>View Reports</button>
                            <button type="button" className="home-btn3" onClick={OpenTeacher}>Add Teacher</button>
                            <button type="button" className="home-btn3" onClick={OpenClass}>Create Class</button>
                            <button type="button" className="home-btn3" onClick={OpenGenerate}>Generate Report</button>
                            </div>
                            <h5 className="admin-h5">Recent Activities</h5>
                            <div className="admin-card4">
                            <div className="admin-card5">
                                <i className="fa-solid fa-graduation-cap"></i>
                                <span></span>
                                <i className="fa-solid fa-users"></i> 
                                <span></span>
                                <i className="fa-solid fa-graduation-cap"></i>
        
                            </div>
                            <div className="admin-card6">
                                <div className="div-admin">
                                    <h6>New Student Enrolled</h6>
                                    <p>Sophia Clark enrolled in Class 10A</p>
                                </div>
                                <div className="div-admin">
                                    <h6>Teacher added</h6>
                                    <p>Mr.David Miller Joined the faculty</p>
                                </div>
                                <div className="div-admin">
                                    <h6>Class Created</h6>
                                    <p>Class 10B created</p>
                                </div>
                            </div>
                            </div>
                        </div>  
                    </div>
                </div>

                </>
            )
        } 

        export default AdminDashboard;