import { useEffect } from "react";
import { useJobListings } from "../context/JobListings";
import JobListing from "./JobListing";
import Layout from "./Layout";

export default function JobListings() {
  const { jobListings } = useJobListings();
  const listJobs = (
    <ul className="h-fit ">
      {jobListings
        ? jobListings.map((job) => (
            <li  key={job}>
              <JobListing job={job} />
            </li>
          ))
        : "Please wait while we retrieve job listings"}
    </ul>
  );

  return <div>{listJobs}</div>;
}
