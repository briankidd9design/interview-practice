import { useState, useEffect } from "react";

export default function AsyncAwait() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_ENDPOINT = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(API_ENDPOINT);
        if (!response.ok) throw new Error("Netowrk response was not OK");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error.message || "Something went wrong");
        console.error("There was and error fetching the data", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  console.log(users);
  //   if (loading) return <p>Loading...</p>;
  return (
    <>
      <div>{error ? <span>{error}</span> : null}</div>
      {loading ? (
        <p>Loading Users... </p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </>
  );
}
