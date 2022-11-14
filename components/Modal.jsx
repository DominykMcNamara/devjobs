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
      <div className="absolute  w-screen h-screen flex justify-center align-center bg-[black]/50 z-50 top-0 left-0">
        <div className="h-80 w-80 p-6 rounded-lg bg-secondary-white dark:bg-[#19202D] my-auto flex flex-col">
          <span>
            <button
              className="text-[#19202D] cursor-pointer font-bold relative flex w-full justify-end text-h2 dark:text-secondary-white"
              onClick={() => showModal(false)}
            >
              x
            </button>
          </span>
          <label
            for
            location
            className="p-3 border-b-2 dark:border-secondary-white w-full"
          >
            <Image
              src={LocationIcon}
              height={24}
              width={24}
              alt="Icon shaped like a magnifying glass"
              className="relative top-8 "
            />
            <input
              className=" focus:outline-0 desktop:w-[18rem] p-3 text-h3 ml-10 dark:bg-[#19202D] "
              name="location"
              placeholder="Filter by location..."
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </label>

          <label
            for="fullTime"
            className=" font-bold text-h3 text-[#19202D] my-auto  flex flex-row p-3 dark:text-secondary-white ml-2 "
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
            className="desktop:ml-10 tablet:mt-4 tablet:p-3 h-[3rem] desktop:w-[7.688rem] tablet-[5rem] bg-[#5964E0] hover:bg-[#939BF4] rounded-[0.313rem] mobile:my-3 text-secondary-white font-bold text-p text-center "
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
