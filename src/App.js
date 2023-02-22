import "./App.css";
import LoginForm from "./routes/LoginForm/login.route";
import Navigation from "./routes/navigation/navigation.route";
import { Routes, Route } from "react-router";

import Jobs from "./routes/job/job.route";
import CreateJob from "./routes/create-job/create-job.route";
import EditJob from "./routes/edit-job/edit-job.route";
import JobDetail from "./routes/job-detail/job-detail.route";

import Application from "./routes/application/application.routes";
import Homepage from "./routes/Homepage/Homepage.component";

import create from "zustand";
import SignupForm from "./routes/SignupForm/Signup.component";
import Applicant from "./routes/Applicants/Applicant";
import Joblist from "./routes/Joblist/Joblist.route";
import Applicantslogin from "./routes/Applicantslogin/Applicant.login";
import Recruiter from "./routes/Recruitor/Recruitorsignup.route"
const useTestStore = create((set) => ({
  value: 0,
  increase: () => set((state) => ({ value: state.value + 1 })),
  decrease: () => set((state) => ({ value: state.value - 1 })),
}));

const user = true;

const App = () => {
  return (
    <Routes>
      <Route path="/recruitor-Applicant" element={<LoginForm />} />
      <Route path="/sign-up" element={<SignupForm />} />
       <Route path="/Applicant-login" element={<Applicantslogin />} />
      {user ? (
        <Route path="/" element={<Navigation />}>
          <Route index element={<Jobs />} />
          <Route path="CreateJob" element={<CreateJob />} />
          <Route path="EditJob/" element={<EditJob />} />
          <Route path=":title" element={<JobDetail />} />
          <Route path="/application" element={<Application />} />
          <Route path="/Applicant" element={<Applicant/>}/>
          <Route path="/joblist" element={<Joblist/>} />
             <Route path="/recruiter-register" element={<Recruiter/>}></Route>
        </Route>
      ) : (
        <Route path="/" element={<Homepage />} />
      )}
    </Routes>
  );
};

export default App;
