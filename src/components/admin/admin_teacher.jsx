function AdminTeacher(){
    return(<>
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="ad-te-card">
                    <h3>Teacher Management</h3>
                    <button type="button" className="home-btn3">Add Teacher</button>
                </div>
                <div className="ad-te-card1">
                    <table>
                        <thead>
                        <tr><th>Teacher Name</th><th>Subject</th><th>Class Assigned</th><th>Actions</th></tr></thead>
                        <tbody><tr><td>Ms.Emily Carter</td><td>Mathematics</td><td>Grade 10</td><td className="td1">Edit</td></tr>
                        <tr><td>Mr.David Lee</td><td>Science</td><td>Grade 11</td><td className="td1">Edit</td></tr>
                        <tr><td>Ms.Sarah Jones</td><td>English</td><td>Grade 12</td><td className="td1">Edit</td></tr>
                        <tr><td>Prof.Michael Brown</td><td>History</td><td>Grade 9</td><td className="td1">Edit</td></tr>
                        <tr><td>Ms.Olivia Green</td><td>physics</td><td>Grade 11</td><td className="td1">Edit</td></tr></tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    </>)
}

export default AdminTeacher;