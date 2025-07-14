import { useState, useEffect } from "react";

export default function JobBoardAdvanced() {
  const [jobIds, setJobIds] = useState([]);
  const [jobDetails, setJobDetails] = useState([]);
  const [visibleJobs, setVisibleJobs] = useState(6);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // fetch ids once
  useEffect(() => {
    // const controller = new AbortController();
    // const signal = controller.signal;
    async function fetchJobIds() {
      try {
        const idsResponse = await fetch(
          "https://hacker-news.firebaseio.com/v0/jobstories.json"
        );
        if (!idsResponse.ok)
          console.error("There was a problem receiving the job ids");
        const ids = await idsResponse.json();
        setJobIds(ids);
      } catch (error) {
        console.error("The ids were not received");
        setError(error.message || "There was a problem");
      } finally {
        setLoading(false);
      }
    }
    fetchJobIds();
    // return () => {
    //   controller.abort();
    // };
  }, []);
  // fetching job details for visible jobs
  useEffect(() => {
    async function fetchVisibleJobDetails() {
      console.log("fetchVisibleJobDetails");
      try {
        const fetchedJobIds = jobIds.slice(jobDetails.length, visibleJobs);
        console.log(jobIds);
        console.log(jobDetails);
        console.log(jobDetails.length);
        // Because you are mapping over an array of ids, you have to use the PromiseAll
        // const detailPromises = fetchedJobIds.map(async (id) => {
        //   const response = await fetch(
        //     `https://hacker-news.firebaseio.com/v0/item/${id}.json`
        //   );
        //   if (!response.ok) {
        //     throw new Error(`Failed to fetch job details fo ID ${id}`);
        //   }
        //   return response.json();
        // });
        // we are combining the job ids with the job details
        const detailPromises = fetchedJobIds.map(async (id) => {
          const responseJobDetails = await fetch(
            `https://hacker-news.firebaseio.com/v0/item/${id}.json`
          );
          if (!responseJobDetails.ok)
            throw new Error(
              `There was a problem fetching job deatails for ID ${id}`
            );
          return responseJobDetails.json();
        });
        // this resolves the ids and the job details to create an iterable array of ids associated with job details
        const newJobDetails = await Promise.all(detailPromises);
        setJobDetails([...jobDetails, ...newJobDetails]);
        // passing an updater function to the state setter
        // setJobDetails((prevDetails) => [...prevDetails, ...newJobDetails]);
        setError(null);
      } catch (error) {
        console.error("Error fetching job details", error);
        setError(error.message || "Something went wrong");
      }
    }
    // if (jobIds.length > 0 && jobDetails.length < visibleJobs) {
    if (jobIds.length > 0) {
      fetchVisibleJobDetails();
    }
  }, [visibleJobs, jobIds]);

  function loadMoreJobs() {
    // takes whatever jobs are loaded and adds 6 to that
    setVisibleJobs(visibleJobs + 6);
  }

  function formatTime(time) {
    return new Date(time * 1000).toLocaleString();
  }

  return (
    <div className="job-board">
      <h1 id="jobBoardTitle">Hacker News Job Board</h1>
      {loading && <p>Loading Jobs...</p>}
      {error && <p>Loading jobs...</p>}
      {!loading && (
        <ul className="job-board-list">
          {jobDetails.map((job) => (
            <li key={job.id}>
              <a href={job.url} target="_blank">
                {job.title}
              </a>
              <p>
                {" "}
                {job.by} • {formatTime(job.time)}
              </p>
            </li>
          ))}
        </ul>
      )}
      {jobDetails.length < jobIds.length && (
        <button id="loadMoreJobs" onClick={loadMoreJobs}>
          Load more jobs
        </button>
      )}
    </div>
  );
}
