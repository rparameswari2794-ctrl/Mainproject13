import { useNavigate, Outlet } from "react-router-dom";

function AdminExam() {

    const navigate = useNavigate();

    return (
        <>
            <div className="container-fluid">
                <div className="ad-te-card">
                    <h3>Exams & Results</h3>
                    <button className="home-btn3">Create Exam</button>
                </div>

                <div className="ad-te-card2">
                    <button onClick={() => navigate("exam_upcome")}>
                        Upcoming Exams
                    </button>

                    <button onClick={() => navigate("exam_past")}>
                        Past Exams
                    </button>

                    <button onClick={() => navigate("exam_result")}>
                        Result
                    </button>
                </div>

                {/* Child pages render here */}
                <Outlet />

            </div>
        </>
    )
}

export default AdminExam;
