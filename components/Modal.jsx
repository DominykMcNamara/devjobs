import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import { useJobListings } from "../context/JobListings";
import Image from "next/image";
import SearchBar from "./SearchBar";
import SearchIcon from "../public/assets/desktop/icon-search.svg";
import LocationIcon from "../public/assets/desktop/icon-location.svg";

export default function Modal({ modal, searchTerm, showModal }) {
  const { setJobListings } = useJobListings();

  const [location, setLocation] = useState("");
  const [fullTime, setFullTime] = useState(false);

  const [isBrowser, setIsBrowser] = useState(false);

  const handleSubmit = async () => {
    if (!searchTerm && !location && !fullTime) {
      const jobListings = await axios.get("http://localhost:3000/api/jobs");
      setJobListings(jobListings.data);
    } else if (!searchTerm && !location && fullTime) {
      const jobListings = await axios.get(
        "http://localhost:3000/api/jobs/filter/fulltime"
      );
      setJobListings(jobListings.data);
    } else {
      const jobListings = await axios.get(`http://localhost:3000/api/jobs/filter/${searchTerm ? searchTerm : "''"}/${location ? location : "''"}/${fullTime ? "Full Time" : "Part Time"}`)
      setJobListings(jobListings.data)
    }
    showModal(false);
  };

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent = modal ? (
    <>
      <SearchBar mobileLocation={location} mobileFullTime={fullTime} />
      <div className="absolute  w-screen h-screen flex justify-center align-center  top-0 left-0
                      bg-[black]/50 z-50">
        <div className=" w-[20.438rem] h-[14rem] rounded-[0.375rem] py-[1rem]   my-auto flex flex-col
                        bg-secondary-white dark:bg-[#19202D]">
          <span>
            <button
              className=" font-bold justify-end relative pr-[1rem] flex w-full  text-h2 
                          text-[#19202D] cursor-pointer dark:text-secondary-white"
              onClick={() => showModal(false)}
            >
              x
            </button>
          </span>
          <label
            className=" border-b-2 px-[1rem] border-[#6E8098] w-full
                       dark:border-secondary-white"
          >
            <Image
              src={LocationIcon}
              height={24}
              width={24}
              alt="Icon shaped like a location pin"
              className="relative top-[1.544rem]"
            />
            <input
              className=" desktop:w-[18rem]  text-h3 ml-10 
                          dark:bg-[#19202D] focus:outline-0  "
              name="location"
              placeholder="Filter by location..."
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </label>

          <label
            for="fullTime"
            className=" font-bold text-h3  my-[1rem]  flex flex-row   px-[1.5rem]
                        text-[#19202D] dark:text-secondary-white"
          >
            <input
              type="checkbox"
              name="fullTime"
              checked={fullTime}
              onChange={() => setFullTime(!fullTime)}
            />
            Full Time
          </label>
          <button
            className=" h-[3rem]  w-[17.438rem] mx-auto my-auto py-[1rem] rounded-[0.313rem]  font-bold text-p text-center 
                        text-secondary-white bg-[#5964E0] hover:bg-[#939BF4]"
            type="submit"
            onClick={handleSubmit}
          >
            Search
          </button>
        </div>
      </div>
    </>
  ) : null;
  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
}
