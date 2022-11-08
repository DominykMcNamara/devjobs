import { createContext, useContext, useState } from "react";

export const JobListingsContext = createContext({
  jobListings: undefined,
  setJobListings: async (jobListings) => null
});

export const useJobListings = () => useContext(JobListingsContext)

export const JobListingsProvider = ({ children}) => {
  const [jobListings, setJobListings] = useState([])
  return <JobListingsContext.Provider value={{ jobListings, setJobListings }}>{ children } </JobListingsContext.Provider>
}

