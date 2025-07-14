// import { useState, useEffect, useRef } from "react";
import { useState, useEffect } from "react";
import "./jobBoardStyles/styles.css";
// 1. set up all your hooks
// 2. set up the useEffect function for the api calls
// 3. set up the function fetchData
// 4. set up your response to fetch ids
// 4a. try catch block inside of the fetchData function
// 4b. set up your fetch functionns inside the try block that will look for errors and convert response to JSON data
// 4c. map over all of the ids and use interpolation to enter those ides into a detalPromises url
// 5. Set up the promise all by assigning it to allDetails
// 6. setAllJobs to allDetails
// 7. setData to allDetails and slice allDetails from 0, to visitibleJobs;
// 8. setError to null
// 10. set errorMessage to err.message || something went wrong
// 11. setData to an empty array
// 12. Create a finally bock and set the loading to false
// 13. Set up function loadMoreJobs
// 13a. assign newVisibeleCount = visibleJobs + 6
// 13bb. Set up a newSlice that goes from 0 to newVisibleCount
// 13c. setData to the new slice
// 13d setVisibleJobs to newVisibleCount
// 14 create a function to format the time

export default function JobBoard() {
  const [data, setdata] = useState([]);
  const [allJobs, setAllJobs] = useState([]);
  // this helps with showing only six jobs per button click
  const [visibleJobs, setVisibleJobs] = useState(6);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const idsResponse = await fetch(
          "https://hacker-news.firebaseio.com/v0/jobstories.json"
        );
        if (!idsResponse.ok) throw new Error("Failed to fetch IDs");
        const ids = await idsResponse.json();
        const detailPromises = ids.map(async function handleId(id) {
          const response = await fetch(
            `https://hacker-news.firebaseio.com/v0/item/${id}.json`
          );
          if (!response.ok) {
            throw new Error(`Failed to fetch details for id ${id}`);
          }
          return response.json();
        });
        // A promise that resolves to x
        // Takes an array of promises and return an array of promise resolutions
        const allDetails = await Promise.all(detailPromises);
        setAllJobs(allDetails);
        setdata(allDetails.slice(0, visibleJobs));
        setError(null);
      } catch (err) {
        /// enter error info
        console.log("Error fetching data", error);
        setError(err.message || `Something went wrong. ${error}`);
        error;
        setdata([]);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // const loadingRef = useRef(null);
  // useEffect(() => {
  //   if (loading) {
  //     loadingRef.current.innerHTML = "Loading Job Search Data...";
  //   } else {
  //     loadingRef.current.remove();
  //   }
  // }, [loading]);

  // console.log(ids);
  // We incorporate the id into each promise so that we can get the details of each job that relates to a particular id

  // This is the secret sauce for displaying all the jobs to the DOM of the job board UI. It changes the data into an iterable JSON format where each job has specific details like who it was posted by and the job title

  const loadMoreJobs = () => {
    // each time through loading more jobs it goes from 0 to 6 of the allJobs array, So it slices six jobs at a time from the array and then we move that slice to the data by setting the data with that slice.
    const newVisibleCount = visibleJobs + 6;
    // nextSlice will make a new array out of all the jobs. This new array will only contain the next six job listings in the JSON data
    // visible jobs starts at  0 - 5 and then 6 - 11 then, 12 - 17,  18 - 23, 24 - 29 ...
    const nextSlice = allJobs.slice(0, newVisibleCount);
    // console.log(nextSlice);
    // Since we are iterating over the data, essentially allJobs are sliced (which creates a new array) and then set into the set data. This data is iterated over with a map mathod and displayed to the DOM.
    setdata(nextSlice);
    setVisibleJobs(newVisibleCount);
    // console.log(visibleJobs);
    // console.log(data);
  };

  function formatTime(time) {
    return new Date(time * 1000).toLocaleString();
  }

  return (
    <div className="job-board">
      <h1 id="jobBoardTitle"> Hacker News Job Baord</h1>
      {loading && <p>Loading jobs...</p>}
      {!loading && (
        <ul className="job-board-list">
          {data.map((job) => (
            <li key={job.id}>
              <a href={job.url} target="_blank">
                {job.title}
              </a>
              <p>
                {" "}
                By {job.by} • {formatTime(job.time)}
              </p>
            </li>
          ))}
        </ul>
      )}
      {data.length < allJobs.length && (
        <button id="loadMoreJobs" onClick={loadMoreJobs}>
          Load more jobs
        </button>
      )}
    </div>
  );
}

// return (
//   <div className="job-board">
//     <h1 id="jobBoardTitle">Hacker News Job Board</h1>
//     <p>
//       Showing {data.length} of {allJobs.length} jobs
//     </p>
//     <span ref={loadingRef}></span>
//     <ul className="job-board-list">
//       {data.map((job) => (
//         <li key={job.id}>
//           <a href={job.url} target="_blank" rel="noopener noreferrer">
//             {job.title}{" "}
//           </a>
//           {job.url && (
//             <>
//               <a href={job.url} target="_blank" rel="noopener noreferrer">
//                 (Apply)
//               </a>
//               <p>
//                 By {job.by} • {formatTime(job.time)}
//               </p>
//             </>
//           )}
//         </li>
//       ))}
//     </ul>
//     {data.length < allJobs.length && (
//       <button id="loadMoreJobs" onClick={loadMoreJobs}>
//         Load more jobs
//       </button>
//     )}
//   </div>
// );
// }
