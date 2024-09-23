import { useState, useEffect } from 'react';
import JobListing from './JobListing';
import Spinner from './Spinner';

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]); // state to fetch jobs data from the API
  const [loading, setLoading] = useState(true); // state for the loading when fetching data from the API.
  const accessToken = localStorage.getItem('accessToken');

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome
        ? '/api/jobs?_limit=3' // For home page only fetch three jobs
        : '/api/jobs';
      try {
        const res = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const allJobs = await res.json();
        setJobs(allJobs.data); // fetching jobs from the backend and putting into the jobs state
      } catch (error) {
        console.log('Error fetching data', error);
      } finally {
        // set loading to false whether its successful or not
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <>
      {/* <!-- Browse Jobs --> */}
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? 'Recent Jobs' : 'Browse Jobs'}
          </h2>
          {loading ? (
            <Spinner loading={loading} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobs.map(job => (
                <JobListing key={job.id} job={job} /> // Always pass a key with the list or else it will throw error
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default JobListings;
