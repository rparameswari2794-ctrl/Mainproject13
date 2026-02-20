function StudentResult() {
    return (<>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="admin-card">
                        <h3>My Results</h3>
                    </div>
                     <h5 className="admin-h5">Exam Results</h5>
                     <div className="ad-te-card1">
                    <table>
                        <thead>
                        <tr><th>Exam Name</th><th>Subject-wise Marks</th><th>Total Marks</th><th>Grade / Result Status</th><th>Actions</th></tr></thead>
                        <tbody><tr><td>Unit Test</td><td className="st-sub">Math:90,Science:85,English:92</td><td>267</td><td className="st-act"><button type="type" className="btn">Pass</button></td><td className="td1"><button className="home-btn4">View detailed result</button></td></tr>
                        <tr><td>Mid Test</td><td className="st-sub">Math:75,Science:80,English:78</td><td>233</td><td className="st-act"><button type="type" className="btn">Pass</button></td><td className="td1">View detaild result</td></tr>
                        <tr><td>Final</td><td className="st-sub">Math:88,Science:90,English:85</td><td>263</td><td className="st-act"><button type="type" className="btn">Pass</button></td><td className="td1">View detailed result</td></tr>
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
    </>)

}
export default StudentResult;