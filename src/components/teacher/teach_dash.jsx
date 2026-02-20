import frame2 from "../../images/frame2.jpg";
import frame3 from "../../images/frame3.jpg";
import frame4 from "../../images/frame4.jpg";
import frame5 from "../../images/frame5.jpg";
import frame6 from "../../images/frame6.jpg";

function TeachDashboard() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="admin-card">
                            <h3>Teacher Dashboard</h3>
                            <p>Manage your classes, attendance and student marks efficiently.</p>
                        </div>

                        <h5 className="admin-h5">Quick Actions</h5>
                        <div className="te-card">
                            <button className="teach-btn" type="button">Mark Attendance</button>
                            <button className="teach-btn1" type="button">Enter Marks</button>
                        </div>
                        <div className="te-card1">
                            <p>My Classes</p>
                        </div>
                        <div className="te-card2">
                            <div className="te-card3">
                                <img src={frame2} alt="frame" />
                                <div>
                                <p className="classli">Class 10A</p>
                                <h6>Mathematics</h6>
                                <p>Mrs.Emily Carter</p>
                                </div>
                            </div>
                            <div className="te-card3">
                                <img src={frame3} alt="frame" />
                                <div>
                                <p className="classli">Class 11B</p>
                                <h6>Physics</h6>
                                <p>Mr.David Lee</p>
                                </div>
                            </div>
                            <div className="te-card3">
                                <img src={frame4} alt="frame" />
                                <div>
                                <p className="classli">Class 12C</p>
                                <h6>Chemistry</h6>
                                <p>Mrs.Sarah Jones</p>
                                </div>
                            </div>
                        </div>
                        <div className="te-card1">
                            <p>Student Performance</p>
                        </div>
                        <div className="te-card4">
                            <img src={frame5} alt="frame" />
                            <div><h6>View Student Performance</h6>
                                <p>Analyze individual student progress and identify areas for improvement.</p>
                            </div>
                        </div>
                        <div className="te-card1">
                            <p>Reports</p>
                        </div>
                    
                        <div className="te-card4">
                            <img src={frame6} alt="frame" />
                            <div><h6>Download Class Reports</h6>
                                <p>Generate and download detailed reports for each class, including attendance and marks.</p>
                            </div>
                        </div>
                    </div>
                </div>
               </div>
            </>
            )
}

            export default TeachDashboard;