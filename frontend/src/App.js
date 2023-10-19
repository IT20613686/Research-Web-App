import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Component/Layout";
import UserLayout from './Component/UserLayout';
import JobPosting from "./Component/Job Posting/JobPosting";
import PostedJobs from "./Component/Posted Jobs/PostedJob";
import Register from './Component/Register/Register';
import Login from './Component/Login/Login';
import JobVacancies from './Component/Job Vacancies/JobVacancies';
import AppliedJobs from './Component/Applied Jobs/AppliedJobs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/job-posting" element={<Layout><JobPosting/></Layout>} />
        <Route path="/posted-jobs" element={<Layout><PostedJobs /></Layout>} />
        <Route path="/job-vacancies" element={<UserLayout><JobVacancies/></UserLayout>} />
        <Route path="/applied-jobs" element={<UserLayout><AppliedJobs/></UserLayout>} />
      </Routes>
    </Router>
  );
}

export default App;
