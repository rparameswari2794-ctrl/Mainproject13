import { useNavigate } from "react-router-dom";
function Home() {
    const navigate=useNavigate();
    const OpenLogin=()=>{navigate("/login")};
    return (<>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="home-card">
                        <h2>Smart Student Management Made Simple</h2>
                        <p>Manage students, attendance, exams and fees easily with one powerful system. </p>
                        <button type='button' className='home-btn1' onClick={OpenLogin}>Get Started</button>
                    </div>
                    <div className="home-card1">
                        <h3>Our System's Advantages </h3>
                        <p>Discover the benefits of using our student management System to streamline your academic administration and improve communication.</p>
                    </div>
                    <div className="home-card2">
                        <div className="home-card3">
                         <i className="fa-solid  fa-user-group"></i>
                         <h6>Centralized Student Data</h6>
                         <p>Keep all student information in one place for easy access and management.</p>
                        </div>
                        <div className="home-card3">
                         <i className="fa-solid  fa-calendar-days"></i>
                         <h6>Easy Attendance</h6>
                         <p>Streamline attendance tracking with digital tools and automated reports.</p>
                        </div>
                        <div className="home-card3">
                         <i className="fa-solid  fa-tv"></i>
                         <h6>Accurate Exam Management</h6>
                         <p>Manage exams, results and grading efficiently with automated processes.</p>
                        </div>
                        <div className="home-card3">
                         <i className="fa-solid  fa-dollar-sign"></i>
                         <h6>Transparent Fee Monitoring</h6>
                         <p>Monitor fee payments, track outstanding balances, and generate reports.</p>
                        </div>
                        <div className="home-card3">
                         <i className="fa-solid  fa-shield-halved"></i>
                         <h6>Role-Based Access</h6>
                         <p>Control access levels for different users, ensuring data security and privacy.</p>
                        </div>
                    </div>
                    <div className="home-card1">
                        <h3>Explore Our Modules</h3>
                        <p>Our System offers a range of modules to cover all aspects of student management, admissions to reporting.</p>
                    </div>
                    <div className="home-card2">
                        <div className="home-card3">
                            <i className="fa-solid fa-user-group"></i>
                            <h6>Student Management</h6>
                            <p>Manage Student records, admissions, and profiles efficiently.</p>
                        </div>
                         <div className="home-card3">
                            <i className="fa-solid fa-calender-days"></i>
                            <h6>Attendance Management</h6>
                            <p>Track student attendance, generate reports, and monitor trends.</p>
                        </div>
                         <div className="home-card3">
                            <i className="fa-solid fa-tv"></i>
                            <h6>Exams & Results</h6>
                            <p>Create exams, publish results, and manage grading systems.</p>
                        </div>
                         <div className="home-card3">
                            <i className="fa-solid fa-dollar-sign"></i>
                            <h6>Fees Management</h6>
                            <p>Manage fee structures, track payments, and generate financial reports.</p>
                        </div>
                         <div className="home-card3">
                            <i className="fa-solid fa-users"></i>
                            <h6>Teacher Management</h6>
                            <p>Manage teacher profiles, schedules and assignments.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}
export default Home;