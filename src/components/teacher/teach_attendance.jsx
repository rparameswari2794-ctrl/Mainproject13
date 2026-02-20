function TeachAttendance() {
    return (<>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="ad-at-card">
                        <h3>Attendance Management</h3>
                        <p>Class</p>
                        <input type="text" className="class" placeholder="Select Class" readOnly />
                        <p>Date</p>
                        <input type="text" className="class" placeholder="Select Date" readOnly />
                    </div>
                    <div className="ad-at-card1">
                        <table>
                            <thead>
                                <tr><th>Student Name</th><th>Roll Number</th><th>Attendance</th></tr></thead>
                            <tbody><tr><td>Liam Harper</td><td>101</td><td><input type="checkbox" className="check" /></td></tr>
                                <tr><td>Olivia Bennett</td><td>102</td><td><input type="checkbox" className="check" /></td></tr>
                                <tr><td>Noah Carter</td><td>103</td><td><input type="checkbox" className="check" /></td></tr>
                                <tr><td>Emma Hayes</td><td>104</td><td><input type="checkbox" className="check" /></td></tr>
                                <tr><td>Jackson Reed</td><td>105</td><td><input type="checkbox" className="check" /></td></tr>
                                <tr><td>Ava Morgan</td><td>106</td><td><input type="checkbox" className="check" /></td></tr>
                                <tr><td>Alden Foster</td><td>107</td><td><input type="checkbox" className="check" /></td></tr>
                                <tr><td>Chloe Parker</td><td>108</td><td><input type="checkbox" className="check" /></td></tr>
                                <tr><td>Lucas Wright</td><td>109</td><td><input type="checkbox" className="check" /></td></tr>
                                <tr><td>Sophia Evans</td><td>110</td><td><input type="checkbox" className="check" /></td></tr></tbody>
                        </table>
                        <div className="te-at">
                            <button className="teach-btn" type="button">Save Attendance</button>
                            <button className="teach-btn1" type="button">Update Attendance</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default TeachAttendance;