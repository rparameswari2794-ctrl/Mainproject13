function Classes(){
    return(<>
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="ad-te-card">
                    <h3>My Classes </h3>
                    <button type="button" className="home-btn3">Add New Classes</button>
                </div>
                <div className="ad-te-card1">
                    <table>
                        <thead>
                        <tr><th>Class Name</th><th>Section</th><th>Subject Taught</th><th>Number of Students</th><th>Actions</th></tr></thead>
                        <tbody><tr><td>Class 10</td><td>A</td><td>Mathematics</td><td>45</td><td className="td1"><button className="home-btn4">View|Edit|Delete</button></td></tr>
                        <tr><td>Class 11</td><td>B</td><td>Physics</td><td>38</td><td className="td1">View|Edit|Delete</td></tr>
                        <tr><td>Class 12</td><td>C</td><td>Chemistry</td><td>42</td><td className="td1">View|Edit|Delete</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    </>)
}

export default Classes;