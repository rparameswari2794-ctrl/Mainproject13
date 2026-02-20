function Marks(){
    return(<>
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
                
                <div className="ad-at-card">
                        <h3>Marks & Results</h3>
                        <p></p>
                        <input type="text" className="class" placeholder="Select Exam" readOnly />
                        <p></p>
                        <input type="text" className="class" placeholder="Select Class & Subject" readOnly />
                    </div>
                
                <div className="ad-te-card3">
                    
                    <table>
                            <thead>
                                <tr><th>Student Name</th><th>Roll Number</th><th>Marks</th><th>Total / Grade</th></tr></thead>
                            <tbody><tr><td>Liam Harper</td><td>101</td><td>85</td><td>A</td></tr>
                                <tr><td>Olivia Bennett</td><td>102</td><td>92</td><td>A+</td></tr>
                                <tr><td>Noah Carter</td><td>103</td><td>78</td><td>B</td></tr>
                                <tr><td>Emma Hayes</td><td>104</td><td>88</td><td>A</td></tr>
                                <tr><td>Jackson Reed</td><td>105</td><td>95</td><td>A+</td></tr>
                                <tr><td>Ava Morgan</td><td>106</td><td>72</td><td>C</td></tr>
                                <tr><td>Alden Foster</td><td>107</td><td>80</td><td>B</td></tr>
                                <tr><td>Chloe Parker</td><td>108</td><td>90</td><td>A</td></tr>
                                <tr><td>Lucas Wright</td><td>109</td><td>65</td><td>D</td></tr>
                                <tr><td>Sophia Evans</td><td>110</td><td>82</td><td>B</td></tr></tbody>
                        </table>
                </div>
                <div className="te-at1">
                            <button className="teach-btn" type="button">Save Marks</button>
                            <button className="teach-btn1" type="button">Edit Marks</button>
                        </div>
                        <button className="teach-btn2" type="button">Submit for Approval</button>
            </div>
        </div>
    </div>
    </>)
}

export default Marks;