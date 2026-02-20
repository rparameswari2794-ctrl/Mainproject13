function Upcoming(){
    return (
        <>
            <h6 className="ex-h6">Results</h6>
            <div className="ad-te-card3">
                <table>
                    <thead>
                        <tr>
                            <th>Exam Name</th>
                            <th>Class</th>
                            <th>Section</th>
                            <th>Exam Date</th>
                            <th>Time</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>Midterm Exam</td><td>Grade 10</td><td>A</td><td>2024-07-15</td><td>09:00 AM</td><td><button className="ex-pa-btn" type="button">Upcoming</button></td><td className="td1">View Details</td></tr>
                        <tr><td>Final Exam</td><td>Grade 11</td><td>B</td><td>2024-07-16</td><td>10:00 AM</td><td><button className="ex-pa-btn" type="button">Tomorrow</button></td><td className="td1">View Details</td></tr>
                        <tr><td>Quarterly Exam</td><td>Grade 9</td><td>C</td><td>2024-07-17</td><td>10:00 AM</td><td><button className="ex-pa-btn" type="button">This Week</button></td><td className="td1">View Details</td></tr>
                    </tbody>
                </table>
            </div>
           
        </>
    )
}

export default Upcoming;
