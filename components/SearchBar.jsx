import { useEffect, useState } from "react";
import { useJobListings } from "../context/JobListings";
import Image from "next/image";
import SearchIcon from "/public/assets/desktop/icon-search.svg";
import LocationIcon from "/public/assets/desktop/icon-location.svg";
import FilterIcon from "/public/assets/mobile/icon-filter.svg";
import Modal from "./Modal";
import axios from "axios";
export default function SearchBar({ mobileLocation, mobileFullTime }) {
  const { setJobListings } = useJobListings();
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [fullTime, setFullTime] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async () => {
    if (
      !searchTerm &&
      (!location || !mobileLocation) &&
      (!fullTime || !mobileFullTime)
    ) {
      const jobListings = await axios.get("http://localhost:3000/api/jobs");
      setJobListings(jobListings.data);
    } else if (
      !searchTerm &&
      (!location || !mobileLocation) &&
      (fullTime || mobileFullTime)
    ) {
      const jobListings = await axios.get(
        "http://localhost:3000/api/jobs/filter/fulltime"
      );
      setJobListings(jobListings.data);
    } else if (
      searchTerm &&
      (!location || !mobileLocation) &&
      (!fullTime || !mobileFullTime)
    ) {
      const jobListings = await axios.get(
        `http://localhost:3000/api/jobs/filter/companyortitle/${searchTerm}`
      );
      setJobListings(jobListings.data);
    } else {
      const jobListings = await axios.get(
        `http://localhost/api/jobs/filter/${searchTerm ? searchTerm : "''"}/${
          location || mobileLocation ? location : "''"
        }/${fullTime || mobileFullTime ? "Full Time" : ""}`
      );
      setJobListings(jobListings.data);
    }
  };

  return (
    <div>
      {showModal ? (
        <div id="modal-root">
          {" "}
          <Modal
            modal={showModal}
            searchTerm={searchTerm}
            showModal={setShowModal}
          />
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div
            className=" w-[20.438rem] h-[5rem] py-[1.3rem] mx-auto  relative bottom-9 flex flex-row rounded-[0.375rem]   text-p
                           md:w-[46.063rem] md:h-[5rem] md:divide-x md:px-[0rem] md:py-[0rem]
                           
                           dark:divide-[#6E8098] bg-secondary-white dark:bg-[#19202D] "
          >
            <label
              className="px-[1rem] 
                         md:px-[1rem] md:py-[1rem] md:ml-[2rem]"
            >
              <button
                className="relative left-3/4 top-1 
                           md:hidden md:absolute"
                onClick={() => setShowModal(true)}
              >
                <Image
                  src={FilterIcon}
                  alt="Filter Icon"
                  height={20}
                  width={20}
                />
              </button>

              <Image
                src={SearchIcon}
                height={20}
                width={20}
                alt="Icon shaped like a magnifying glass"
                className="relative top-8 hidden 
                           md:block md:right-[1.5rem] md:top-[1.6rem]"
              />
              <input
                className="md:relative  md:my-auto md:ml-[1rem]
                           focus:outline-0  dark:bg-[#19202D]"
                name="companyOrSearchTerm"
                placeholder="Enter job desc..."
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                type="submit"
                className=" relative left-[2rem] top-[0.01rem] h-[3rem] w-[3rem] bottom-7 rounded-[0.375rem] 
                           md:hidden
                           bg-[#5964E0] text-secondary-white dark:text-secondary-white"
              >
                &#x1F50E;&#xFE0E;
              </button>
            </label>

            <label
              className="px-4
                             md:px-[1rem] md:py-[1rem] "
            >
              <Image
                src={LocationIcon}
                height={20}
                width={20}
                alt="Icon shaped like a location pin"
                className="relative top-8 hidden 
                           md:block md:top-[1rem] md:left-[1rem]"
              />
              <input
                className="relative  hidden
                           md:block md:left-[0.5rem] md:bottom-[0.5rem] md:ml-[2.5rem] 
                          focus:outline-0 dark:bg-[#19202D]"
                name="location"
                placeholder="Filter by location..."
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </label>

            <label
              className="mx-auto font-bold text-p  my-auto  flex flex-row  hidden
                         md:flex  md:flex-row  md:inline-flex md:px-[0.5rem] md:py-[1rem]
                        text-[#19202D] dark:text-secondary-white "
            >
              <input
                type="checkbox"
                name="fullTime"
                checked={fullTime}
                onChange={() => setFullTime(!fullTime)}
              />
              Full Time
              <button
                className=" h-[3rem] w-[5rem]  rounded-[0.313rem] font-bold text-p text-center hidden 
                            md:inline-flex md:px-[0.5rem] md:py-[0.5rem] md:ml-[1rem]
                            lg:ml-[2rem]
                            text-secondary-white hover:bg-[#939BF4] bg-[#5964E0]"
                type="submit"
              >
                Search
              </button>
            </label>
          </div>
        </form>
      )}
    </div>
  );
}
