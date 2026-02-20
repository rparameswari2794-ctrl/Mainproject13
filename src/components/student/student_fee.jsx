function StudentFee(){
    return(<>
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="admin-card">
                            <h3>Fees Details</h3>
                        </div>
                <div className="st-fe">
                    <div className="st-fe1">
                        <p className="st-fep">Total Fees</p>
                        <p>$12,000</p>
                    </div>
                    <div className="st-fe1">
                        <p className="st-fep">Paid Amount</p>
                        <p>$8,000</p>
                    </div>
                    <div className="st-fe1">
                        <p className="st-fep">Pending Amount</p>
                        <p>$4,000</p>
                    </div>
                    <div className="st-fe1">
                        <p className="st-fep">Due Date</p>
                        <p>July 31,2024</p>
                    </div>
                </div>
                <div className="st-at">
                            <button className="st-btn1" type="button">View Payment History</button>
                            <button className="teach-btn" type="button">Download Receipt</button>
                </div>
                <button className="teach-btn" type="button">Pay Now</button>
            </div>
        </div>
    </div>
    </>)

}
export default StudentFee;