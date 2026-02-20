function AdminFees(){
    return(<>
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="ad-te-card">
                    <h3>Fees Management</h3>
                    
                    </div>
                <h6 className="ex-h6">Fee Structure</h6>
                <div className="ad-te-card3">
                    
                    <table>
                        <thead>
                        <tr><th>Class</th><th>Total Fees</th><th>Paid</th><th>Pending</th></tr></thead>
                        <tbody><tr><td className="ex1">Class 10</td><td>$5000</td><td>$4500</td><td>$500</td></tr>
                        <tr><td className="ex1">Class 11</td><td>$6000</td><td>$5500</td><td>$500</td></tr>
                        <tr><td className="ex1">Class 12</td><td>$7000</td><td>$6500</td><td>$500</td></tr></tbody>
                    </table>
                </div>
                
            </div>
        </div>
    </div>
    </>)
}

export default AdminFees;