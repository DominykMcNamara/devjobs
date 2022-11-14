import { useEffect } from "react";
import { useJobListings } from "../context/JobListings";
import JobListing from "./JobListing";
import Layout from "./Layout";

export default function JobListings() {
  const { jobListings } = useJobListings();
  const listJobs = (
    <ul className="flex flex-wrap desktop:flex-row tablet:flex-row mobile:flex-col justify-around desktop:w-[75rem] tablet:w-[100vw] mobile:w-[100vw] mobile:ml-96 tablet:px-7 tablet:mx-2  flex-wrap mx-auto">
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
