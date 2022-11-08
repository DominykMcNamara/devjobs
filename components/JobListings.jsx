import { useEffect } from "react";
import { useJobListings } from "../context/JobListings";
import JobListing from "./JobListing";
import Layout from "./Layout";

export default function JobListings() {
  const { jobListings } = useJobListings();
  useEffect(() => console.log(jobListings));

  const listJobs = (
    <ul className="flex flex-wrap justify-between w-[69.375rem]  flex-wrap mx-auto spacing-3">
      {jobListings.map((job) => (
        <li key={job.id}>
          <JobListing job={job} />
        </li>
      ))}
    </ul>
  );

  return <div>{listJobs}</div> 
}
