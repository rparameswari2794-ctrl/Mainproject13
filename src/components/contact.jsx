import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Contact() {
    const navigate=useNavigate();
    const [email,setEmail]=useState("");
    const [name,setName]=useState("");
    const [phone,setPhone]=useState("");
    const [address, setAddress]=useState("");
    const [error,setError]=useState("");
    const OpenHome=(e)=>{
        e.preventDefault();
        setError("");
        if(!name || !email || !phone || !address){
            setError("Please Fill All Fields");
            return;
        }
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        if(!emailPattern.test(email)){
            setError("Please Enter Valid Email");
            return;
        }
        const phonePattern=/^[0-9]{10}$/;
        if(!phonePattern.test(phone)){
            setError("Please Enter 10 digit PhoneNumber");
            return;
        }
        navigate("/home");
    }
    return (<>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="co-card">
                        <h4>Contact Us</h4>
                        <p>We're here to help! Reach out to us for any questions, support, or demo requests. Our team is dedicated to providing you with the best assistance possible.</p>
                    </div>
                    <div className="co-card1">
                        <h6>Contact Information</h6>
                        <div className="co-card2">
                            <p className="co-pa">Email</p>
                            <p className="co-pa">Phone</p>
                            <p>support@edulink.com</p>
                            <p>+1 (555) 123-4567</p>
                        </div>
                        <div className="co-card3">
                            <p className="co-pa">Office Hours</p>
                            <p>Mon-Fri:9AM - 5PM <br/>(EST)</p>
                        </div>
                    </div>
                    <div className="co-card1">
                        <h6>Send Us a Message</h6>
                           <form  onSubmit={OpenHome}>
                            <p>Name</p>
                            <input type="text" value={name} placeholder="Your Name" onChange={(e) => setName(e.target.value)}/>
                            <p>Email</p>
                            <input type="email" value={email} placeholder="Your Email" onChange={(e) => setEmail(e.target.value)}/>
                            <p>Phone Number</p>
                            <input type="text" value={phone} placeholder="Your Phone Number" onChange={(e) => setPhone(e.target.value)}/>
                            <p>Message</p>
                            <textarea value={address} onChange={(e) => setAddress(e.target.value)}></textarea>
                            <p><button type="submit" className="con-btn">Submit Enquiry</button></p>
                            <br/>
                            {error && <p style={{color:"red"}}>{error}</p>}
                            </form>
                        </div>

                </div>
            </div>
        </div>
    </>)
}
export default Contact;