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
import Applicants from "./routes/Applicants/Applicants";

const useTestStore = create((set) => ({
  value: 0,
  increase: () => set((state) => ({ value: state.value + 1 })),
  decrease: () => set((state) => ({ value: state.value - 1 })),
}));

const user = false;

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/sign-up" element={<SignupForm />} />

      {user ? (
        <Route path="/" element={<Navigation />}>
          <Route index element={<Jobs />} />
          <Route path="CreateJob" element={<CreateJob />} />
          <Route path="EditJob/:title" element={<EditJob />} />
          <Route path=":title" element={<JobDetail />} />
          <Route path="/application" element={<Application />} />
          <Route path="/applicants" element={<Applicants/>}/>
        </Route>
      ) : (
        <Route path="/" element={<Homepage />} />
      )}
    </Routes>
  );
};

export default App;
