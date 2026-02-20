import frame10 from "../../images/frame10.jpg";
import frame11 from "../../images/frame11.jpg";
import frame12 from "../../images/frame12.jpg";
import frame13 from "../../images/frame13.jpg";
import frame14 from "../../images/frame14.jpg";


function StudentDashboard() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="admin-card">
                            <h3>Student Dashboard</h3>
                            <p>Welcome back, Here's a summary of your academic progress.</p>
                        </div>
                        <div className="student-card">
                                <div className="student-card1">
                                    <p>Attendance</p>
                                    <p className="count-pa">92%</p>
                                    <p className="count-pa1">+2%</p>
                                </div>
                                <div className="student-card1">
                                    <p>Overall Grade</p>
                                    <p className="count-pa">A</p>
                                    <p className="count-pa2">-1%</p>
                                </div>
                                <div className="student-card1">
                                    <p>Fees Due</p>
                                    <p className="count-pa">$0</p>
                                    <p className="count-pa1">0%</p>
                                </div>
                                </div>
                        <h5 className="admin-h5">Quick Actions</h5>
                        <div className="te-card">
                            <button className="teach-btn" type="button">View Attendance</button>
                            <button className="teach-btn1" type="button">View Results</button>
                        </div>
                        <h5 className="admin-h5">Academic Overview</h5>
                        <div className="te-card2">
                            <div className="te-div">
                                <p>Attendance</p>
                                <h6>Attendance Percentage</h6>
                                <p>Your attendance rate is currently at 92%. Keep Up the work good.</p>
                                
                            </div>
                            <img src={frame10} alt="frame" className="te-card-img" />
                        </div>
                        <div className="te-card2">
                            <div className="te-div">
                                <p>Grades</p>
                                <h6>Exam Results and Grades</h6>
                                <p>Check Your latest exam results and grades for all your courses.</p>
                                
                            </div>
                            <img src={frame11} alt="frame" className="te-card-img" />
                        </div>
                        <div className="te-card2">
                            <div className="te-div">
                                <p>Fees</p>
                                <h6>Fee Payment Status</h6>
                                <p>Your fee payment status is up to date. No Outstanding fees.</p>
                                
                            </div>
                            <img src={frame12} alt="frame" className="te-card-img" />
                        </div>
                        <div className="te-card2">
                            <div className="te-div">
                                <p>Report Card</p>
                                <h6>Download Report Card</h6>
                                <p>Download your latest report card for a detailed overview of your <br/>academic performance.</p>
                                
                            </div>
                            <img src={frame13} alt="frame" className="te-card-img" />
                        </div>
                        <h5 className="admin-h5">Profile Management</h5>
                        <div className="te-card2">
                            <div className="te-div">
                                <h6>Update Personal Profile</h6>
                                <p>Keep your personal information current by updating your profile.</p>
                                
                            </div>
                            <img src={frame14} alt="frame" className="te-card-img" />
                        </div>
                        
                    </div>
                </div>
            </div>

        </>
    )
}

export default StudentDashboard;