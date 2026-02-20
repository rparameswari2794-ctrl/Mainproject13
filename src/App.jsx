import { Routes, Route } from "react-router-dom";
import Nav from './components/nav';
import Home from './components/home';
import About from './components/about';
import Features from './components/feature';
import Login from './components/login';
import Contact from './components/contact';
import Footer from './components/footer';
import MainLayout from "./components/MainLayout";
import AdminLayout from "./components/admin/AdminLayout";
import AdminDashboard from "./components/admin/admin_dash";
import AdminTeacher from "./components/admin/admin_teacher";
import AdminStudents from "./components/admin/admin_students";
import Attendance from "./components/admin/attendance";
import AdminExam from "./components/admin/exam";
import AdminFees from "./components/admin/fees";
import AdminSettings from "./components/admin/admin_settings";
import TeachLayout from "./components/teacher/TeachLayout";
import TeachDashboard from "./components/teacher/teach_dash";
import TeachAttendance from "./components/teacher/teach_attendance";
import Marks from "./components/teacher/marks";
import Classes from "./components/teacher/classes";
import Report from "./components/teacher/report";
import Profile from "./components/teacher/teach_profile";
import StudentDashboard from "./components/student/student_dash";
import StudentAttendance from "./components/student/student_attendance";
import StudentFee from "./components/student/student_fee";
import StudentResult from "./components/student/student_result";
import StudentLayout from "./components/student/StudentLayout";
import StudentSetting from "./components/student/student_profile";
import Result from "./components/admin/exam_result";
import Upcoming from "./components/admin/exam_upcome";
import Past from "./components/admin/exam_past";
import StudentPro from "./components/admin/ad_student_profile";


function App() {
  return (<>

    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="feature" element={<Features />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
      </Route>

      <Route path="/admin_dash" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="admin_teacher" element={<AdminTeacher />} />
        <Route path="admin_students" element={<AdminStudents />} />
        <Route path="ad_student_profile" element={<StudentPro />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="exam" element={<AdminExam />}>
          <Route index element={<Result />} />   {/* Default = Result */}
          <Route path="exam_upcome" element={<Upcoming />} />
          <Route path="exam_past" element={<Past />} />
          <Route path="exam_result" element={<Result />} />
        </Route>
        <Route path="fees" element={<AdminFees />} />
        <Route path="admin_settings" element={<AdminSettings />} />
      </Route>

      <Route path="/teach_dash" element={<TeachLayout />}>
        <Route index element={<TeachDashboard />} />
        <Route path="teach_attendance" element={<TeachAttendance />} />
        <Route path="marks" element={<Marks />} />
        <Route path="classes" element={<Classes />} />
        <Route path="report" element={<Report />} />
        <Route path="teach_profile" element={<Profile />} />

      </Route>
      <Route path="/student_dash" element={<StudentLayout />}>
        <Route index element={<StudentDashboard />} />
        <Route path="student_attendance" element={<StudentAttendance />} />
        <Route path="student_result" element={<StudentResult />} />
        <Route path="student_fee" element={<StudentFee />} />
        <Route path="student_profile" element={<StudentSetting />} />

      </Route>
    </Routes>


  </>
  );
}
export default App;
