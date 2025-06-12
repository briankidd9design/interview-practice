import { useState, useEffect, useRef } from "react";
import "./jobBoardStyles/styles.css";

export default function JobBoard() {
  const [data, setData] = useState([]);
  const [visibleJobs, setVisibleJobs] = useState(6);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [allJobs, setAllJobs] = useState([]);

  const loadingRef = useRef(null);
  useEffect(() => {
    if (loading) {
      loadingRef.current.innerHTML = "Loading Job Search Data...";
    } else {
      loadingRef.current.remove();
    }
  }, [loading]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const idsResponse = await fetch(
          "https://hacker-news.firebaseio.com/v0/jobstories.json"
        );
        if (!idsResponse.ok) throw new Error("Failed to fetch IDs");
        const ids = await idsResponse.json();

        const detailPromises = ids.map((id) =>
          fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
            (response) => {
              if (!response.ok)
                throw new Error(`Failed to fetch details for ID ${id}`);
              return response.json();
            }
          )
        );

        const allDetails = await Promise.all(detailPromises);
        setAllJobs(allDetails);
        setData(allDetails.slice(0, visibleJobs));
        setError(null);
      } catch (err) {
        console.error("Error fetching data", err);
        setError(err.message || "Something went wrong");
        setData([]);
      } finally {
        setLoading(false);
        document.getElementById("loadingJobs").remove();
      }
    };
    fetchData();
  }, []);

  if (error) return <p>Error: {error}</p>;

  function formatTime(time) {
    return new Date(time * 1000).toLocaleString();
  }
  const loadMoreJobs = () => {
    // each time through loading more jobs it goes from
    const newVisibleCount = visibleJobs + 6;
    // nextSlice will make a new array out of all the jobs. This new array will only
    // visible jobs starts at 6 and then 6 will be added to that
    const nextSlice = allJobs.slice(0, newVisibleCount);
    setData(nextSlice);
    setVisibleJobs(newVisibleCount);
    console.log(visibleJobs);
    console.log(data);
  };

  return (
    <div className="job-board">
      <h1 id="jobBoardTitle">Hacker News Job Board</h1>
      <p>
        Showing {data.length} of {allJobs.length} jobs
      </p>
      <span ref={loadingRef}></span>
      <ul className="job-board-list">
        {data.map((job) => (
          <li key={job.id}>
            {job.title}{" "}
            {job.url && (
              <>
                <a href={job.url} target="_blank" rel="noopener noreferrer">
                  (Apply)
                </a>
                <p>
                  By {job.by} • {formatTime(job.time)}
                </p>
              </>
            )}
          </li>
        ))}
      </ul>
      {data.length < allJobs.length && (
        <button id="loadMoreJobs" onClick={loadMoreJobs}>
          Load more jobs
        </button>
      )}
    </div>
  );
}
//   return (
//     <div className="job-board">
//       <h1 id="jobBoardTitle">Hacker News Job Board</h1>
//       <p>
//         Showing {data.length} of {allJobs.length} jobs
//       </p>
//       {/* <span id="loadingJobs"></span> */}
//       {loading && <p>Loading Jobs...</p>}
//       {!loading && (
//         <>
//           <ul className="job-board-list">
//             {data.map((job) => (
//               <li key={job.id}>
//                 {job.title}{" "}
//                 {job.url && (
//                   <>
//                     <a href={job.url} target="_blank" rel="noopener noreferrer">
//                       (Link)
//                     </a>
//                     <p>
//                       By {job.by} • {formatTime(job.time)}
//                     </p>
//                   </>
//                 )}
//               </li>
//             ))}
//           </ul>
//           {data.length < allJobs.length && (
//             <button onClick={loadMoreJobs}>Load More</button>
//           )}
//         </>
//       )}
//     </div>
//   );
// }
