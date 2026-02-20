import { useNavigate } from "react-router-dom";

function AdminStudents(){
    const navigate=useNavigate();
    const OpenProfile=()=>{navigate("/admin_dash/ad_student_profile")};
    return(<>
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="ad-te-card">
                    <h3>Students </h3>
                    <button type="button" className="home-btn3">Add New Student</button>
                </div>
                <div className="ad-te-card1">
                    <table>
                        <thead>
                        <tr><th>Student Name</th><th>Roll No</th><th>Class </th><th>Section</th><th>Status</th><th>Actions</th></tr></thead>
                        <tbody><tr><td>Sophia Clark</td><td>101</td><td>10th</td><td>A</td><td className="td2">Active</td><td className="td1"><button className="home-btn4" onClick={OpenProfile}>View|Edit|Delete</button></td></tr>
                        <tr><td>Ethan Walker</td><td>102</td><td>10th</td><td>B</td><td className="td2">Active</td><td className="td1">View|Edit|Delete</td></tr>
                        <tr><td>Olivia Reed</td><td>103</td><td>10th</td><td>A</td><td className="td2">Inactive</td><td className="td1">View|Edit|Delete</td></tr>
                        <tr><td>Liam Hayes</td><td>104</td><td>10th</td><td>B</td><td className="td2">Active</td><td className="td1">View|Edit|Delete</td></tr>
                        <tr><td>Ava Morgan</td><td>105</td><td>10th</td><td>A</td><td className="td2">Active</td><td className="td1">View|Edit|Delete</td></tr></tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    </>)
}

export default AdminStudents;