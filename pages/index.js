import { useEffect, useState } from "react";
import axios from "axios";
import { useJobListings } from "../context/JobListings";
import Layout from "../components/Layout";
import JobListings from "../components/JobListings";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const { jobListings, setJobListings } = useJobListings();

  const fetchJobListings = async () => {
    try {
      let jobListings = await axios.get("https://devjobs-o85v.vercel.app/api/jobs");
      if (jobListings) {
        setJobListings(jobListings.data);
        console.log(jobListings.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJobListings();
  }, []);
  return (
    <Layout>
      <SearchBar />
      <div className="flex relative 
                      xl:right-[21rem] ">
        {jobListings ? (
          <JobListings jobListings={jobListings} />
        ) : (
          <h1 className="text-h1 font-bold">
            Cant retrieve current job listings
          </h1>
        )}
      </div>
    </Layout>
  );
}
