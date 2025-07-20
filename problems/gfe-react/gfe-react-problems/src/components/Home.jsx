import React from "react";
import Navigation from "./Navigation";

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="home-header">
        {" "}
        <h1>Pick a Problem</h1>{" "}
      </div>
    </>
  );
}
