function Result(){
    return (
        <>
        
            <h6 className="ex-h6">Results</h6>
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
                        <tr><td>Mathematics</td><td>85</td><td>100</td><td>A</td></tr>
                        <tr><td>Science</td><td>78</td><td>100</td><td>B+</td></tr>
                        <tr><td>English</td><td>92</td><td>100</td><td>A+</td></tr>
                        <tr><td>Social Studies</td><td>88</td><td>100</td><td>A</td></tr>
                        <tr><td>Computer Science</td><td>95</td><td>100</td><td>A+</td></tr>
                    </tbody>
                </table>
            </div>
            <p>Total Marks: 438/500 | Grade A</p>
        </>
    )
}

export default Result;
