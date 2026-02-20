import frame7 from "../../images/frame7.jpg";
import frame8 from "../../images/frame8.jpg";
import frame9 from "../../images/frame9.jpg";

function Report() {
    return (<>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="admin-card">
                        <h3>Academic Report</h3>
                        <p>Generate and view reports related to attendance and academic performance.</p>
                    </div>
                    <h5 className="admin-h5">Attendance</h5>
                    <div className="te-card2">
                        <div className="te-div">
                            <h6>Attendance Report(Class - wise)</h6>
                            <p>View attendance reports for all classes you teach.</p>
                            <button type="button" className="rep-btn">View Report<span>&rarr;</span></button>
                        </div>
                        <img src={frame7} alt="frame" className="te-card-img" />
                    </div>
                    <h5 className="admin-h5">Exam Performance</h5>
                    <div className="te-card2">
                    <div className="te-div">
                        <h6>Exam Performance Report</h6>
                        <p>View exam performance reports for all classes you teach.</p>
                        <button type="button" className="rep-btn">View Report<span>&rarr;</span></button>
                    </div>
                    <img src={frame8} alt="frame" className="te-card-img" />
                </div>
                <h5 className="admin-h5">Student Progress</h5>
                <div className="te-card2">
                    <div className="te-div">
                        <h6>Student Progress Summary</h6>
                        <p>View attendance reports for all classes you teach.</p>
                        <button type="button" className="rep-btn">View Report<span>&rarr;</span></button>
                    </div>
                    <img src={frame9} alt="frame" className="te-card-img" />
                </div>
                <div className="te-at">
                            <button className="teach-btn1" type="button">Download PDF</button>
                            <button className="teach-btn" type="button">Share with Admin</button>
                        </div>
            </div>
        </div>
    </div >
    </>)
}
export default Report;