import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import NoNavbarLayout from './layouts/NoNavbarLayout';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';
import HomePage from './pages/HomePage';
import JobPage, { jobLoader } from './pages/JobPage'; // No curly braces with jobPage because it is exported as default
import JobsPages from './pages/JobsPages';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import RegistrationPage from './pages/RegistrationPage';

const App = () => {
  const accessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiUmVjcnVpdGVyIiwidXNlcklkIjoxLCJpYXQiOjE3MjcwNzE2MTgsImV4cCI6MTcyNzE1ODAxOH0.llsjtIvf2a4TOyNsp_hCHR6UK3SkWK8G3sohuncW_QQ';
  // Add new job
  const addJob = async newJob => {
    await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  // Delete job
  const deleteJobById = async id => {
    await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return;
  };

  // Update job
  const updateJob = async job => {
    await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(job),
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/jobs" element={<JobsPages />} />
          <Route
            path="/add-job"
            element={<AddJobPage addJobSubmit={addJob} />}
          />
          <Route
            path="/jobs/:id"
            element={<JobPage deleteJob={deleteJobById} />}
            loader={jobLoader}
          />
          <Route
            path="/edit-job/:id"
            element={<EditJobPage updateJobSubmit={updateJob} />}
            loader={jobLoader} // also pass in the loader to the edit page cause it requires job data for editing the job.
          />
        </Route>

        {/* Use NoNavbarLayout for login */}
        <Route path="/login" element={<NoNavbarLayout />}>
          <Route index element={<LoginPage />} />
        </Route>

        <Route path="/register" element={<NoNavbarLayout />}>
          <Route index element={<RegistrationPage />} />
        </Route>

        {/* Fallback for 404 Not Found */}
        <Route path="*" element={<NotFoundPage />} />
      </>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
