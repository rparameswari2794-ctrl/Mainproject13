import { useNavigate } from "react-router-dom";
import { useState } from "react";


function Login(){
    const navigate=useNavigate();
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [role, setRole]=useState("");
    const [error,setError]=useState("");
    const OpenNext=(e)=>{
       e.preventDefault();
        setError("");
        if(!email || !password || !role){
            setError("Please Fill all Fields");
            return;
        }
        
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        if(!emailPattern.test(email)){
            setError("Please Enter a Valid Email");
            return;
        }
        const passwordPattern = /^(?=.*[0-9])(?=.*[a-zA-Z]).{6,}$/;
        if(!passwordPattern.test(password)){
            setError("Please must be at least 6 characters and contain letters and numbers");
            return;
        }
       if (role === "Admin") {
    localStorage.setItem("role", "Admin");
    navigate("/admin_dash");
}
else if(role === "Teacher") {
    localStorage.setItem("role", "Teacher");
    navigate("/teach_dash");
}
else if(role === "Student") {
    localStorage.setItem("role", "Student");
    navigate("/student_dash");
}

    };      
    return (<>
    <div className="container-fluid p-0">
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="login-card">
                    <form onSubmit={OpenNext}>
                        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
                        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
                        <select value={role}  onChange={(e)=>setRole(e.target.value)}><option value="">Role</option><option value="Admin">Admin</option><option value="Teacher">Teacher</option><option value="Student">Student</option> </select>
                         {error && <p style={{ color: "red" }}>{error}</p>}
                        <button type="submit" className="home-btn2">Login</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
    );
}
export default Login;