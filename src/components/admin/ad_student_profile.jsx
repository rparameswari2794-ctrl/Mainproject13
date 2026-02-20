import frame15 from "../../images/frame15.jpg";

function StudentPro() {
    return (<>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="co-card">
                        <h4>Student Details</h4>
                        <p>View and manage student information</p>
                    </div>
                    <div className="ad-te-card">
                        <div className="ad-st-pro">
                            <img src={frame15} alt="frame" className="ad-img" />
                            <div className="ad-st-pro1">
                                <h6>Sophia Clark</h6>
                                <p>Student ID: 2023001</p>
                                <p>Class: 12th Grade</p>
                            </div>
                        </div>
                        <button className="st-pro-btn" type="button">Edit Details</button>
                    </div>
                    <h5 className="st-h5">Personal Details</h5>
                    <div className="co-card2">
                        <p className="co-pa">Full Name</p>
                        <p className="co-pa">Date of Birth</p>
                        <p>Sophia Clark</p>
                        <p>July 15, 2004</p>
                    </div>
                    <div className="co-card2">
                        <p className="co-pa">Gender</p>
                        <p className="co-pa">Address</p>
                        <p>Female</p>
                        <p>123 Maple Street, Anytown, USA</p>
                    </div>
                    <div className="co-card2">
                        <p className="co-pa">Phone Number</p>
                        <p className="co-pa">Email</p>
                        <p>(555) 123-4567</p>
                        <p>sophia.clark@email.com</p>
                    </div>
                    <h5 className="st-h5">Academic Details</h5>
                    <div className="co-card2">
                        <p className="co-pa">Class</p>
                        <p className="co-pa">Roll Number</p>
                        <p>12th Grade</p>
                        <p>101</p>
                    </div>
                    <div className="co-card2">
                        <p className="co-pa">Admission Date</p>
                        <p className="co-pa">Subjects</p>
                        <p>August 20, 2022</p>
                        <p>Math,Science,English,History</p>
                    </div>
                    <div className="co-card2">
                        <p className="co-pa">Grade</p>
                        <p className="co-pa">GPA</p>
                        <p>A</p>
                        <p>3.8</p>
                    </div>
                    <h5 className="st-h5">Attendance Summary</h5>
                    <div className="st-pro-card">
                        <div className="st-pro-card1">
                            <p>Total Classes</p>
                            <h6>150</h6>
                        </div>
                        <div className="st-pro-card1">
                            <p>Classes Attended</p>
                            <h6>140</h6>
                        </div>
                        <div className="st-pro-card1">
                            <p>Attendance Percentage</p>
                            <h6>93%</h6>
                        </div>
                    </div>
                    <h5 className="st-h5">Marks Summary</h5>
                    <div className="ad-te-card3">
                        <table>
                            <thead>
                                <tr>
                                    <th>Subject</th>
                                    <th>Marks Obtained</th>
                                    <th>Total Marks</th>
                                    <th>Grade</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>Mathematics</td><td>95</td><td>100</td><td>A+</td></tr>
                                <tr><td>Science</td><td>88</td><td>100</td><td>B+</td></tr>
                                <tr><td>English</td><td>92</td><td>100</td><td>A+</td></tr>
                                <tr><td>History</td><td>90</td><td>100</td><td>A</td></tr>

                            </tbody>
                        </table>
                    </div>
                    <h5 className="st-h5">Fee Status</h5>
                    <div className="st-pro-card">
                        <div className="st-pro-card1">
                           <p>Total Fees</p>
                            <h6>$5000</h6>
                        </div>
                        <div className="st-pro-card1">
                           <p>Fees Paid</p>
                            <h6>$4500</h6>
                        </div>
                    </div>
                    <button type="button" className="st-pro-btn1">Download Report</button>
                </div>

            </div>
        </div>
    </>)
}

export default StudentPro;